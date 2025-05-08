const AWS = require('aws-sdk');
import { serialize } from 'cookie';

AWS.config.update({ region: 'us-east-1' });

export default async function handler(req, res) {
  const { username, password } = req.body;

  const clientId = process.env.AWS_COGNITO_CLIENT_ID;

  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const response = await cognito.initiateAuth(params).promise();

    if (response.ChallengeName === 'NEW_PASSWORD_REQUIRED') {
      const newPassword = 'newSecurePassword123';
      const challengeParams = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: clientId,
        ChallengeResponses: {
          USERNAME: username,
          NEW_PASSWORD: newPassword,
        },
        Session: response.Session,
      };

      const challengeResponse = await cognito.respondToAuthChallenge(challengeParams).promise();
      res.status(200).json({ message: 'Password changed successfully', challengeResponse });
    } else {
      // O token de acesso do Cognito
      const accessToken = response.AuthenticationResult.AccessToken;

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
    }
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(400).json({ message: error.message });
  }
}
