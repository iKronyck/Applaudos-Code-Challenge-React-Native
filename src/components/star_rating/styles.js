import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  icon: {
    color: colors.colorDates,
    paddingLeft: resize(3),
    fontSize: resize(30),
  },
  numberRaiting: {
    fontSize: resize(16),
    paddingLeft: resize(10),
    color: colors.titleColorText,
  },
  numberPersons: {
    fontSize: resize(14),
    fontWeight: '400',
    color: colors.colorText,
  },
});
