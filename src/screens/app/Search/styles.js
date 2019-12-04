import {StyleSheet} from 'react-native';
import {resize} from '../../../utils/styles';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {paddingHorizontal: resize(10)},
  containerTextSearch: {alignItems: 'center', paddingTop: resize(40, 'h')},
  textSearch: {
    color: colors.titleColorText,
    fontSize: resize(20),
  },
  iconStyle: {
    fontSize: resize(60),
    color: colors.titleColorText,
  },
  list: {padding: resize(10)},
});
