import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {resize} from '../../utils/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: resize(5),
    paddingVertical: resize(1, 'h'),
    borderRadius: resize(10),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: resize(55),
  },
  textStyle: {
    fontSize: resize(12),
    fontWeight: 'bold',
    color: colors.white,
  },
  anime: {
    backgroundColor: colors.primaryDark,
  },
  manga: {
    backgroundColor: colors.backgroundFinished,
  },
});
