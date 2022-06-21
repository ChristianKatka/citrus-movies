import fetch from 'node-fetch';
import { NY_TIMES_URL_SEARCH } from '../constants';
import { getApiKeyFromParameterStore } from './parameter-store/get-api-key-from-parameter-store.service';

export const getMovieByTitleNyTimes = async (title: string) => {
  const nyTimesKey = process.env.NY_TIMES_API_KEY;
  if (!nyTimesKey) return;

  const nyTimesApiKeyValue = await getApiKeyFromParameterStore(nyTimesKey);

  const response = await fetch(
    `${NY_TIMES_URL_SEARCH}${title}&api-key=${nyTimesApiKeyValue}`
  );
  return await response.json();
};
