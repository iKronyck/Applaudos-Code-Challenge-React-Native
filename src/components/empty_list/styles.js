import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingTop: resize(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: resize(18),
    color: colors.titleColorText,
    textAlign: 'center',
  },
});
