import SSM from 'aws-sdk/clients/ssm';

// systems manager, used to retrieve api keys from parameter store
export const ssmClient = new SSM({
  region: 'eu-west-1',
});
