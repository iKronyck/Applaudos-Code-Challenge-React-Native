import {StyleSheet} from 'react-native';
import {resize} from '../../../utils/styles';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  list: {
    padding: 10,
  },
  colorIcon: {
    color: colors.primaryLight,
  },
  colorCloseIcon: {
    color: colors.backgroundFinished,
  },
  emptyList: {
    paddingTop: resize(30),
    alignItems: 'center',
  },
  text: {
    fontSize: resize(18),
    color: colors.titleColorText,
  },
});
