import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

export default async function handler(req, res) {
  const { username, newPassword, session } = req.body;

  const cognito = new AWS.CognitoIdentityServiceProvider();

  const params = {
    ChallengeName: 'NEW_PASSWORD_REQUIRED',
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    ChallengeResponses: {
      USERNAME: username,
      NEW_PASSWORD: newPassword,
    },
    Session: session, // Utilize a sessão retornada anteriormente
  };

  try {
    const response = await cognito.respondToAuthChallenge(params).promise();
    res.status(200).json({ message: 'Password updated successfully', response });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(400).json({ message: error.message });
  }
}
