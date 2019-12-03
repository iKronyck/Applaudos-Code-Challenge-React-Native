import React, {Component} from 'react';
import {Text, FlatList, ScrollView} from 'react-native';
import {View, Container, Content} from 'native-base';
import moment from 'moment';
import {connect} from 'react-redux';

// custom
import Header from '../../../components/header';
import ImageNotFound from '../../../assets/img/img_not_found.png';
import StarRating from '../../../components/star_rating';
import PosterImage from '../../../components/poster_image';
import YearReleasedAndFinshied from '../../../components/year_released_finished';
import AiringStatus from '../../../components/airing_status';
import LoadingAnimation from '../../../components/loading_animation';
import styles from './styles';

// api
import {getGenresForResource} from '../../../api/kitsu';
import {
  ADD_TO_FAVORITES,
  DELETE_OF_FAVORITES,
} from '../../../actions/favorites';

class DetailData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: '',
      genres: [],
      isLoading: true,
      isFavorite: false,
    };
  }

  componentDidMount = async () => {
    const detail = this.props.navigation.getParam('detail', {});
    const getGenres = await getGenresForResource(detail.id, detail.type);
    const genres = getGenres.data.data.map(genre => {
      return {
        id: genre.id,
        name: genre.attributes.name,
      };
    });
    let isFavorite = false;
    if (this.props.favorites.length) {
      isFavorite = this.props.favorites.some(fav => fav.id == detail.id);
    }
    this.setState({
      title: detail.attributes.canonicalTitle,
      genres,
      isLoading: false,
      isFavorite,
    });
  };

  validateImage = image => {
    if (image && image.hasOwnProperty('original')) {
      return {uri: image.original};
    } else {
      return ImageNotFound;
    }
  };

  getDataTitle = title => {
    if (title && Object.keys(title).length) {
      const keys = Object.keys(title);
      const key = keys.filter(k => {
        if (title[k]) {
          return title;
        }
      })[0];
      return title[key];
    }
    return 'Nel';
  };

  showYear = data => {
    let {startDate, endDate} = data;
    if (data && data.endDate) {
      startDate = moment(startDate).format('DD.MM.YYYY');
      endDate = moment(endDate).format('DD.MM.YYYY');
      return `${startDate} - ${endDate}`;
    }
  };

  validateStringEpisodes = episodes => {
    if (episodes) {
      const episodesText = episodes == 1 ? 'Episode' : 'Episodes';
      return `${episodes} ${episodesText}`;
    } else {
      return '0 Episodes';
    }
  };

  addToFavorites = async item => {
    const {dispatch, favorites} = this.props;
    favorites.push(item);
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: [...favorites],
    });
    this.setState({isFavorite: true});
  };

  deleteToFavorites = async item => {
    const {dispatch, favorites} = this.props;
    const deleteFavorite = favorites.filter(fav => fav.id != item.id);
    dispatch({
      type: DELETE_OF_FAVORITES,
      payload: deleteFavorite,
    });
    this.setState({isFavorite: false});
    console.log(deleteFavorite);
  };

  render() {
    const {title, genres, isLoading, isFavorite} = this.state;
    const detail = this.props.navigation.getParam('detail', {});
    const {
      titles,
      startDate,
      endDate,
      status,
      ageRating,
      ageRatingGuide,
      episodeCount,
      posterImage,
      youtubeVideoId,
      userCount,
      synopsis,
      averageRating,
    } = detail.attributes;
    return (
      <Container>
        <Header
          onLeft={() => this.props.navigation.goBack()}
          title={title}
          type="detail"
        />
        {isLoading ? (
          <LoadingAnimation type="detail" />
        ) : (
          <Content style={styles.content}>
            <Text style={styles.titleHeader}>{this.getDataTitle(titles)}</Text>
            <YearReleasedAndFinshied
              releasedYear={startDate}
              finishedYear={endDate}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <AiringStatus status={status} />
              <Text style={styles.ageRating}>
                {ageRatingGuide || ageRating}
              </Text>
              <Text style={styles.episodes}>
                {this.validateStringEpisodes(episodeCount)}
              </Text>
            </ScrollView>
            <PosterImage
              item={detail}
              isFavorite={isFavorite}
              videoUrl={youtubeVideoId}
              image={this.validateImage(posterImage)}
              addToFavorites={() => this.addToFavorites(detail)}
              deleteToFavorites={() => this.deleteToFavorites(detail)}
            />
            <View style={styles.contentGenres}>
              <FlatList
                data={genres}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <Text style={styles.genres} key={item.id}>
                      {item.name}
                    </Text>
                  );
                }}
              />
            </View>
            <StarRating rating={averageRating} userCount={userCount} />
            <View style={styles.synopsis}>
              <Text>{synopsis}</Text>
            </View>
          </Content>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(DetailData);
