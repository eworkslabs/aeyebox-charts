import AWS from 'aws-sdk';

const cognito = new AWS.CognitoIdentityServiceProvider({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const { AccessToken } = JSON.parse(token);
    const params = { AccessToken };

    await cognito.getUser(params).promise();
    res.status(200).json({ message: 'Authorized' });
  } catch (error) {
    console.error("Erro de autenticação", error);
    res.status(401).json({ message: 'Unauthorized' });
  }
}
