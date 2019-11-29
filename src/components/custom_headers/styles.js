import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  androidStatusBarColor: {
    color: 'white',
  },
  containerHeaderSearch: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  containerSearch: {
    backgroundColor: colors.backgroundSearch,
    borderRadius: resize(25),
    height: '100%',
    width: '95%',
    flexDirection: 'row',
  },
  containerIcons: {flex: 1},
  containerButtonActionSearch: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  colorIcon: {
    color: colors.greyIcon,
  },
  containerInput: {flex: 7},
  inputSearch: {
    paddingLeft: resize(8),
    fontSize: resize(15),
    color: colors.titleColorText,
  },
  containerButtonActionClose: {
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
