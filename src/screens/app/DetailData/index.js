import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import {View, Container, Content} from 'native-base';
import moment from 'moment';

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
import {ScrollView} from 'react-native-gesture-handler';

class DetailData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: '',
      genres: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    const detail = this.props.navigation.getParam('detail', {});
    const getGenres = await getGenresForResource(detail.id);
    const genres = getGenres.data.data.map(genre => {
      return {
        id: genre.id,
        name: genre.attributes.name,
      };
    });
    console.log(detail);
    this.setState({
      title: detail.attributes.canonicalTitle,
      genres,
      isLoading: false,
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

  render() {
    const {title, genres, isLoading} = this.state;
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
        <Header title={title} type="detail" />
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
              image={this.validateImage(posterImage)}
              videoUrl={youtubeVideoId}
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

export default DetailData;
