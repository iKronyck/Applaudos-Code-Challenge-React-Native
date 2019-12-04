import {StyleSheet, Dimensions} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

const {width} = Dimensions.get('screen');
const widthContainer = width / 3;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: resize(10),
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  message: {
    color: colors.white,
    fontSize: resize(20),
    fontWeight: 'bold',
    paddingHorizontal: resize(30),
    paddingVertical: resize(50, 'h'),
    borderRadius: resize(10),
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  icon: {paddingRight: resize(5)},
  textButton: {color: colors.white, fontSize: resize(20)},
  button: {
    marginTop: resize(40, 'h'),
    paddingRight: resize(20),
    backgroundColor: colors.primaryDark,
  },
  buttonTop: {
    marginTop: resize(40, 'h'),
    marginBottom: resize(80, 'h'),
    paddingRight: resize(20),
    backgroundColor: colors.primaryDark,
  },
  button2: {
    backgroundColor: colors.primaryDark,
    marginTop: resize(25, 'h'),
    paddingRight: resize(20),
    marginBottom: resize(30, 'h'),
  },
});
