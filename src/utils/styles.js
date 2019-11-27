import {Dimensions, Platform} from 'react-native';

//env
import {WIDTH_DESING, HEIHGT_DESING} from '../../enviroment';

export const {width, height} = Dimensions.get(
  Platform.OS === 'ios' ? 'screen' : 'window',
);

export const resize = (size, type = 'width') => {
  const currentSize = type === 'width' ? WIDTH_DESING : HEIHGT_DESING;
  const diviceSize = type === 'width' ? width : height;
  const percent = (size * 100) / currentSize;
  const percentJS = percent / 100;
  return diviceSize * percentJS;
};
