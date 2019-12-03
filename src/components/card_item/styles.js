import {StyleSheet, Dimensions} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

const {width} = Dimensions.get('screen');
const widthContainer = width / 3;

export default StyleSheet.create({
  container: {
    paddingHorizontal: resize(2),
    width: resize(widthContainer),
    paddingBottom: resize(5, 'h'),
    borderRadius: resize(5),
  },
  textType: {flex: 1, marginTop: resize(5, 'h'), marginLeft: resize(5)},
  imageBackGround: {height: resize(150, 'h')},
  imageStyle: {borderRadius: resize(10)},
});
