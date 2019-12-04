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
  // detail header
  title: {
    color: colors.titleColorText,
    fontSize: resize(18),
    textAlign: 'center',
  },
  backIcon: {
    color: colors.titleColorText,
  },
  heart_empty: {
    color: colors.primaryLight,
  },
  headerHome: {
    backgroundColor: colors.white,
  },
  buttonLeftSegment: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonRightSegment: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonActive: {
    backgroundColor: colors.titleColorText,
    paddingRight: resize(20),
    borderWidth: 1,
    borderColor: colors.titleColorText,
  },
  iconActive: {
    color: colors.white,
  },
  textActive: {
    fontSize: resize(16),
    color: colors.white,
  },

  buttonInactive: {
    backgroundColor: colors.white,
    paddingRight: resize(20),
    borderWidth: 1,
    borderColor: colors.titleColorText,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  iconInactive: {
    color: colors.titleColorText,
  },
  textInactive: {
    fontSize: resize(16),
    color: colors.titleColorText,
  },
  segmentStyle: {backgroundColor: colors.white, marginLeft: resize(40)},
  favoritesHeader: {alignItems: 'center', backgroundColor: colors.white},
  buttonFilter: {justifyContent: 'flex-start', paddingRight: resize(20)},
  ordinaryHeader: {alignItems: 'center', backgroundColor: colors.white},
  leftOrdinary: {justifyContent: 'flex-start', paddingRight: resize(20)},
  titleLeftContainer: {flex: 7, paddingRight: resize(10)},
});
