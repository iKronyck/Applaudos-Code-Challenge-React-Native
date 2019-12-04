import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  imageContainer: {flex: 1},
  image: {height: resize(70, 'h'), width: '100%', borderRadius: resize(3)},
  infoContainer: {
    flex: 4,
    paddingLeft: resize(10),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: resize(16),
    color: colors.titleColorText,
  },
  text: {
    fontSize: resize(13),
    color: colors.colorText,
  },
});
