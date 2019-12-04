import {StyleSheet} from 'react-native';
import {resize} from '../../../utils/styles';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  content: {
    paddingHorizontal: resize(15),
  },
  contentGenres: {flexDirection: 'row', paddingTop: 10, paddingBottom: 10},
  synopsis: {paddingVertical: resize(10, 'h')},
  image: {
    borderRadius: resize(5),
    width: resize(170),
    height: resize(260, 'h'),
  },
  titleHeader: {
    fontSize: resize(20),
    textAlign: 'left',
    color: colors.titleColorText,
  },
  notEpisodes: {paddingVertical: resize(10)},
  titleInfo: {
    fontSize: resize(13),
    color: colors.colorText,
  },
  ageRating: {
    marginLeft: resize(5),
    marginTop: resize(10, 'h'),
    backgroundColor: '#212121',
    fontSize: resize(13),
    paddingHorizontal: resize(5),
    borderRadius: resize(10),
    color: colors.white,
  },
  episodes: {
    marginLeft: resize(5),
    marginTop: resize(10, 'h'),
    backgroundColor: '#00701a',
    fontSize: resize(13),
    paddingHorizontal: resize(5),
    borderRadius: resize(10),
    color: colors.white,
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
    backgroundColor: '#0277bd',
  },
});
