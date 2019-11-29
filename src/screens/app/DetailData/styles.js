import {StyleSheet} from 'react-native';
import {resize} from '../../../utils/styles';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  image: {
    borderRadius: resize(5),
    width: resize(170),
    height: resize(260, 'h'),
  },
  titleHeader: {
    fontSize: resize(16),
    color: colors.titleColorText,
  },
  titleInfo: {
    fontSize: resize(13),
    color: colors.colorText,
  },
  titleType: {
    borderColor: colors.primaryLight,
    borderWidth: 1,
    marginRight: resize(5),
    marginTop: resize(5, 'h'),
    fontSize: resize(13),
    color: colors.primaryLight,
    borderRadius: resize(25),
    paddingVertical: 3,
    paddingHorizontal: resize(10),
    fontWeight: 'bold',
    backgroundColor: colors.white,
  },
  genres: {
    marginRight: resize(5),
    marginTop: resize(5, 'h'),
    fontSize: resize(14),
    color: colors.white,
    borderRadius: resize(25),
    paddingVertical: resize(3),
    paddingHorizontal: resize(10),
    fontWeight: 'bold',
    backgroundColor: colors.primary,
  },
});
