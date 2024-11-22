const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_COGNITO_CLIENT_SECRET,
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
        const createUserParams = {
          UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,  // ID do User Pool
          Username: username,
          TemporaryPassword: password,  // Senha temporária
          MessageAction: 'SUPPRESS',  // Desabilita o envio automático de e-mail
          UserAttributes: [
            {
              Name: 'email',
              Value: username,  // Pode ser o e-mail do usuário
            },
            {
              Name: 'given_name', // Atributo exigido
              Value: givenName,
            },
            {
              Name: 'family_name', // Atributo exigido
              Value: familyName,
            },
          ],
        };

        // Cria o usuário
        try {
          const createUserResponse = await cognito.adminCreateUser(createUserParams).promise();
          res.status(200).json({
            message: 'User created successfully',
            user: createUserResponse,
          });
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
