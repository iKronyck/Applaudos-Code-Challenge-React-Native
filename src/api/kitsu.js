// custom
import {dispatchRequest} from '../api';

export const getAllCategorys = async () =>
  await dispatchRequest({
    method: 'get',
    url: 'categories',
  });

export const getAnimes = async (genre = 'adventure') =>
  await dispatchRequest({
    method: 'get',
    url: `anime?filter[genres]=${genre}`,
  });

export const getFirstPageGenres = async () =>
  await dispatchRequest({
    method: 'get',
    url: 'genres?page%5Blimit%5D=10&page%5Boffset%5D=0',
  });

export const getPaginatedData = async url =>
  await dispatchRequest({
    method: 'get',
    url,
  });

export const getGenresForResource = async id =>
  await dispatchRequest({
    method: 'get',
    url: `anime/${id}/genres`,
  });
