import AWS from 'aws-sdk';
import { parse } from 'cookie';

const cognito = new AWS.CognitoIdentityServiceProvider({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  // Obter o cookie que contém o token
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.authToken; // O token está no cookie "authToken"

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not found' });
  }

  try {
    const params = { AccessToken: token };

    // Verifica se o token é válido
    await cognito.getUser(params).promise();

    // Se o token for válido, retorna a resposta de sucesso
    res.status(200).json({ message: 'Authorized' });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
}
