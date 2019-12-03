import {StyleSheet} from 'react-native';
import {resize} from '../../utils/styles';
import colors from '../../utils/colors';

export default StyleSheet.create({
  containerPosterImage: {paddingBottom: 20},
  imgBackground: {
    width: '100%',
    height: resize(300, 'h'),
    paddingTop: resize(10, 'h'),
    zIndex: 3,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: resize(15, 'h'),
  },
  img: {
    borderRadius: resize(5),
  },
  playButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playImage: {width: resize(90), height: resize(90)},
  addMyFavoritesButton: {
    flexDirection: 'row',
    backgroundColor: colors.blackRGBA,
    padding: resize(6),
    borderRadius: resize(5),
    width: resize(155),
    marginTop: -resize(50),
    marginLeft: resize(15),
    zIndex: 3,
  },
  addIcon: {color: colors.white, fontSize: resize(25), paddingRight: resize(5)},
  addMyFavoritesText: {
    color: colors.white,
    fontSize: resize(14),
    paddingLeft: resize(5),
    fontWeight: 'bold',
  },
  // if the resource dont have video
  containerPosterImage2: {paddingBottom: resize(10, 'h')},
  imgBackground2: {
    width: '100%',
    height: resize(300, 'h'),
    paddingTop: resize(10, 'h'),
    zIndex: 3,
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: resize(15, 'h'),
  },
  addMyFavoritesButton2: {
    flexDirection: 'row',
    backgroundColor: colors.blackRGBA,
    padding: resize(6),
    marginBottom: resize(10, 'h'),
    borderRadius: resize(5),
    width: resize(155),
    marginLeft: resize(15),
  },
  addIconDelete: {
    color: colors.backgroundFinished,
    fontSize: resize(25),
    paddingRight: resize(5),
  },
  addMyFavoritesTextD: {
    color: colors.backgroundFinished,
    fontSize: resize(14),
    paddingLeft: resize(5),
    fontWeight: 'bold',
  },
  addMyFavoritesButtonDelete: {
    flexDirection: 'row',
    backgroundColor: colors.blackRGBA,
    padding: resize(6),
    marginBottom: resize(10, 'h'),
    borderRadius: resize(5),
    width: resize(175),
    marginLeft: resize(15),
  },
});
