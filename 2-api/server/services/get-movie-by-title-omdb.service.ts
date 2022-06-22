import fetch from 'node-fetch';
import { OMDB_URL_SEARCH } from '../constants';
import { getApiKeyFromParameterStore } from './parameter-store/get-api-key-from-parameter-store.service';

export const getMovieByTitleOMDB = async (title: string) => {
  const ombdKey = process.env.OMDB_API_KEY;
  if (!ombdKey) return;

  const ombdApiKeyValue = await getApiKeyFromParameterStore(ombdKey);

  console.log('asd tässä');

  console.log(title);
  
  const response = await fetch(
    `${OMDB_URL_SEARCH}${title}&apikey=${ombdApiKeyValue}`
  );
  return await response.json();
};
