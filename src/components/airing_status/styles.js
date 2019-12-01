import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {marginTop: resize(10, 'h')},
  text: {
    backgroundColor: colors.primaryLight,
    borderRadius: resize(10),
    paddingHorizontal: resize(10),
    paddingVertical: resize(1, 'h'),
    fontSize: resize(12),
    color: colors.white,
    flexDirection: 'row',
    // width: resize(75),
  },
  textTBA: {
    // width: resize(130),
    backgroundColor: colors.backgroundTBA,
  },
  textB: {
    backgroundColor: colors.backgroundBroadcast,
  },
  textF: {
    backgroundColor: colors.backgroundFinished,
  },
});
