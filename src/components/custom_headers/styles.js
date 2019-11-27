import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';

export default StyleSheet.create({
  androidStatusBarColor: {
    color: '#338a3e',
  },
  containerHeaderSearch: {
    backgroundColor: '#66bb6a',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  containerSearch: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: '95%',
    flexDirection: 'row',
  },
  containerIcons: {flex: 1},
  containerButtonActionSearch: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  containerInput: {flex: 7},
  inputSearch: {paddingLeft: 8},
  containerButtonActionClose: {
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
