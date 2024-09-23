import { S3Client } from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const region = process.env.REACT_APP_AWS_REGION;

const s3Client = new S3Client({
    region,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        identityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID || '',
    }),
});

export default s3Client;