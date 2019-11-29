import {StyleSheet, Dimensions} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {paddingHorizontal: resize(10)},
  primary: {
    backgroundColor: colors.backgroundLoading,
  },
  secondary: {
    backgroundColor: colors.backgroundLoadingDark,
  },
  screen: {
    width: width,
    height: height,
  },
});
