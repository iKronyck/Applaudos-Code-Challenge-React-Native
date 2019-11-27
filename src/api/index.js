import {Keyboard} from 'react-native';
import axios from 'axios';

import {BASE_URL} from '../../enviroment';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const dispatchRequest = async (request, hideKeyboard = true) => {
  //   instance.defaults.headers.common['Content-Type'] = 'application/json';
  //   instance.defaults.headers.common['Accept'] = 'application/json';
  try {
    if (hideKeyboard) {
      Keyboard.dismiss();
    }
    const resource = await instance(request);

    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};
