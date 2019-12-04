import React, {Component} from 'react';
import {Text, FlatList, ScrollView} from 'react-native';
import {View, Container, Content, List} from 'native-base';
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
import {
  getGenresForResource,
  getEpisodesForSerie,
  getPaginatedData,
} from '../../../api/kitsu';
import {
  ADD_TO_FAVORITES,
  DELETE_OF_FAVORITES,
} from '../../../actions/favorites';
import EpisodeItem from '../../../components/episode_item';
import ErrorScreen from '../../../components/error_screen';
import EmptyList from '../../../components/empty_list';
import verifyNetworkConnection from '../../../utils/verifyNetworkConnection';

class DetailData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: '',
      genres: [],
      episodes: [],
      isLoading: true,
      isFavorite: false,
      nextPageEpisodes: '',
      showError: false,
    };
  }

  componentDidMount = async () => {
    this.callData();
  };

  callData = async () => {
    try {
      await verifyNetworkConnection();
      const detail = this.props.navigation.getParam('detail', {});
      const getGenres = await getGenresForResource(detail.id, detail.type);
      let episodes = [];
      let nextPageEpisodes = '';
      if (detail.type === 'anime') {
        episodes = await getEpisodesForSerie(detail.id, detail.type);
        if (episodes.data.links.hasOwnProperty('next')) {
          nextPageEpisodes = episodes.data.links.next;
        }
        episodes = episodes.data.data;
      }
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
        episodes,
        nextPageEpisodes,
        showError: false,
      });
    } catch (error) {
      this.setState({showError: true});
    }
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
    return 'No title';
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
  };

  loadMoreData = () => {
    const {nextPageEpisodes, episodes} = this.state;
    if (nextPageEpisodes && episodes.length) {
      this.nextPageOfSectionData();
    }
  };

  nextPageOfSectionData = async () => {
    try {
      const {nextPageEpisodes, episodes} = this.state;
      const data = await getPaginatedData(nextPageEpisodes);
      let _state = this.state;
      _state.nextPageEpisodes = '';
      _state.listData = [...episodes, ...data.data.data];
      if (data.data.links.hasOwnProperty('next')) {
        _state.nextPageEpisodes = data.data.links.next;
      }
      this.setState({_state});
    } catch (error) {
      console.log(error);
    }
  };

  ageRatingText = (ageRatingGuide, ageRating) => {
    if (ageRatingGuide || ageRating) {
      return (
        <Text style={styles.ageRating}>{ageRatingGuide || ageRating}</Text>
      );
    }
    return null;
  };

  render() {
    const {
      title,
      genres,
      isLoading,
      isFavorite,
      episodes,
      showError,
    } = this.state;
    const detail = this.props.navigation.getParam('detail', {});
    const {
      titles,
      startDate,
      endDate,
      status,
      episodeCount,
      posterImage,
      youtubeVideoId,
      userCount,
      synopsis,
      averageRating,
    } = detail.attributes;
    return (
      <ErrorScreen
        onBack={() => this.props.navigation.goBack()}
        onReload={() => this.callData()}
        forUpdate={this.state}
        showError={showError}>
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
              <Text style={styles.titleHeader}>
                {this.getDataTitle(titles)}
              </Text>
              <YearReleasedAndFinshied
                releasedYear={startDate}
                finishedYear={endDate}
              />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <AiringStatus status={status} />
                {this.ageRatingText()}
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
              {detail.type === 'anime' && (
                <List>
                  <Text style={styles.titleHeader}>List of Episodes:</Text>
                  <FlatList
                    data={episodes}
                    extraData={this.state}
                    onEndReachedThreshold={0.8}
                    initialNumToRender={10}
                    onEndReached={() => this.loadMoreData()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      if (item.attributes.canonicalTitle) {
                        return <EpisodeItem item={item} />;
                      } else if (index === 0) {
                        return (
                          <View style={styles.notEpisodes}>
                            <EmptyList text="Are no episodes to show" />
                          </View>
                        );
                      }
                      return null;
                    }}
                    ListEmptyComponent={
                      <View style={styles.notEpisodes}>
                        <EmptyList text="Are no episodes to show" />
                      </View>
                    }
                  />
                </List>
              )}
            </Content>
          )}
        </Container>
      </ErrorScreen>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(DetailData);
