const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

export default async function handler(req, res) {
  const { username, password } = req.body;

  const clientId = process.env.AWS_COGNITO_CLIENT_ID;
  const clientSecret = process.env.AWS_COGNITO_CLIENT_SECRET;

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
      res.status(200).json({ message: 'Authenticated', response });
    }
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(400).json({ message: error.message });
  }
}
