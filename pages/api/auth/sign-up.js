const AWS = require('aws-sdk');
import { serialize } from 'cookie';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function handler(req, res) {
  const { username, password, givenName, familyName } = req.body;
  const clientId = process.env.AWS_COGNITO_CLIENT_ID;

  // Primeiro, tente autenticar o usuário
  const authParams = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password
    },
  };

  try {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    
    // Tentando autenticar o usuário
    try {
      const authResponse = await cognito.initiateAuth(authParams).promise();
      res.status(200).json(authResponse);
    } catch (authError) {
      if (authError.code === 'NotAuthorizedException') {
        // O usuário não existe, então vamos criar um novo
        const userParams = {
          ClientId: process.env.AWS_COGNITO_CLIENT_ID,  // ID do App Client
          Username: username,
          Password: password,
          UserAttributes: [
            { Name: 'email', Value: username },
            { Name: 'given_name', Value: givenName },
            { Name: 'family_name', Value: familyName },
          ],
        };

        try {
          // 1. Cria o usuário
          await cognito.signUp(userParams).promise();

          // 2. Confirma o usuário automaticamente
          const confirmUserParams = {
            UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
            Username: username,
          };
          await cognito.adminConfirmSignUp(confirmUserParams).promise();
        
          // 3. Realiza o login automático após o cadastro
          const response = await cognito.initiateAuth({
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: process.env.AWS_COGNITO_CLIENT_ID,
            AuthParameters: {
              USERNAME: username,
              PASSWORD: password,
            },
          }).promise();
        
          const { AuthenticationResult } = response;
          const accessToken = AuthenticationResult?.AccessToken;
          
          if (accessToken) {
            // Definir o cookie HTTP-only
            const cookie = serialize('authToken', accessToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // use 'secure' em produção
              maxAge: 60 * 60 * 24 * 7, // 1 semana
              path: '/', // disponível em todas as rotas
            });

            // Enviar o cookie com a resposta
            res.setHeader('Set-Cookie', cookie);

            // Responder com sucesso
            res.status(200).json({ message: 'Authenticated successfully', response });

            router.push('/app'); // Redireciona para página após login
          }
        } catch (createUserError) {
          res.status(400).json({ message: 'Error creating user', error: createUserError.message });
        }
      } else {
        // Outro erro durante a autenticação
        res.status(400).json({ message: authError.message });
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: error.message });
  }
}
