import { ssmClient } from '../../instances/aws';

export const getApiKeyFromParameterStore = async (parameterName: string) => {
  const response = await ssmClient
    .getParameter({ Name: parameterName, WithDecryption: true })
    .promise();

  if (!response.Parameter || !response.Parameter.Value)
    throw new Error('Parameter not found');

  return response.Parameter.Value;
};
