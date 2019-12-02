import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: resize(2),
    flex: 1,
    paddingBottom: resize(5, 'h'),
    borderRadius: resize(5),
  },
  textType: {flex: 1, marginTop: resize(5, 'h'), marginLeft: resize(5)},
  imageBackGround: {height: resize(150, 'h')},
  imageStyle: {borderRadius: resize(10)},
});
