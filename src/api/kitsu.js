// custom
import {dispatchRequest} from '../api';

export const getAllCategorys = async () =>
  await dispatchRequest({
    method: 'get',
    url: 'categories',
  });

export const getAnimes = async () =>
  await dispatchRequest({
    method: 'get',
    url: 'anime',
  });
