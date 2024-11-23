import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { jwtDecode } from 'jwt-decode';

const cognito = new CognitoIdentityServiceProvider({
  region: 'us-east-1',
  // region: process.env.AWS_REGION,
});

async function getCognitoUser(token: string) {
  try {
    // Decodifica o JWT
    const decodedToken: any = jwtDecode(token);
    
    // Verifica se o token tem o 'sub' (ID do usuário)
    if (!decodedToken.sub) {
      throw new Error('Invalid token');
    }

    // Obtém o usuário pelo sub (ID do usuário) do token
    const params = {
      UserPoolId: 'us-east-1_LjZBqO3n2',
      // UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      Username: decodedToken.sub, // O sub é o Username do usuário
    };

    const userData = await cognito.adminGetUser(params).promise();

    // Retorna os dados do usuário
    return userData;
  } catch (error) {
    console.error('Error fetching Cognito user:', error.message);
    throw new Error('Invalid token or user not found');
  }
}

export default getCognitoUser;
