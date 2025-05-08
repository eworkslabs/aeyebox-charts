import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_LjZBqO3n2',
  ClientId: '63ev27k93ojphtoq1h8d4842dn',
};

export const userPool = new CognitoUserPool(poolData);
