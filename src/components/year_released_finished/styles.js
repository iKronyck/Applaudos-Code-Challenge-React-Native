import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: resize(20, 'h'),
    paddingBottom: resize(1, 'h'),
  },
  text: {
    backgroundColor: colors.colorDates,
    borderRadius: resize(25),
    paddingHorizontal: resize(10),
    paddingVertical: resize(1, 'h'),
    fontSize: resize(12),
    color: colors.white,
  },
});
