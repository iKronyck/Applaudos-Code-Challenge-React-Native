import {StyleSheet} from 'react-native';
import {resize} from '../../../../utils/styles';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  container: {paddingHorizontal: resize(10)},
  sectionText: {
    paddingBottom: resize(5, 'h'),
    color: colors.titleColorText,
    fontWeight: 'bold',
    fontSize: resize(18),
  },
  itemContainer: {flex: 1, paddingRight: resize(10)},
  imageContainer: {height: resize(175, 'h'), width: resize(125)},
  image: {
    height: resize(175, 'h'),
    width: resize(125),
    borderRadius: resize(5),
  },
  dataTypeContainer: {
    position: 'absolute',
    alignContent: 'flex-end',
    backgroundColor: colors.primaryDark,
    marginTop: resize(5, 'h'),
    marginLeft: resize(5),
    borderRadius: resize(25),
  },
  dataTypeText: {
    paddingHorizontal: resize(5),
    textAlign: 'center',
    color: colors.white,
    fontSize: resize(14),
    fontWeight: 'bold',
  },
  textTitleContainer: {
    width: resize(125),
  },
  textTitle: {
    color: colors.colorText,
    fontWeight: '500',
    fontSize: resize(14),
  },
});
