import React, {Component} from 'react';
import {Text} from 'react-native';
import {View, Container, Thumbnail, Content} from 'native-base';
import Header from '../../../components/header';
import ImageNotFound from '../../../assets/img/img_not_found.png';

import styles from './styles';
import moment from 'moment';
import {getGenresForResource} from '../../../api/kitsu';
import {FlatList} from 'react-native-gesture-handler';

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
    console.log(genres);
    this.setState({
      title: detail.attributes.canonicalTitle,
      genres,
      isLoading: false,
    });
    console.log(detail);
  };

  validateImage = image => {
    if (image && image.hasOwnProperty('original')) {
      return {uri: image.original};
    } else {
      return ImageNotFound;
    }
  };

  getDataTitle = title => {
    console.log(title);
    if (title && Object.keys(title).length) {
      const keys = Object.keys(title);
      const key = keys.filter(k => {
        if (title[k]) {
          return title;
        }
      })[0];
      console.log(key);
      // const key = Object.keys(title)[0];
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

  render() {
    const {title, genres, isLoading} = this.state;
    const detail = this.props.navigation.getParam('detail', {});
    return (
      <Container>
        <Header title={title} type="detail" />
        {isLoading ? (
          <Text>Cargando</Text>
        ) : (
          <View>
            <View
              style={{
                paddingVertical: 20,
                paddingLeft: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <Thumbnail
                  square
                  style={styles.image}
                  resizeMode="stretch"
                  source={this.validateImage(detail.attributes.posterImage)}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.titleHeader}>Main Title</Text>
                <Text style={styles.titleInfo}>
                  {this.getDataTitle(detail.attributes.titles)}
                </Text>

                <Text style={[styles.titleHeader, {paddingTop: 10}]}>
                  Canonical Title
                </Text>
                <Text style={styles.titleInfo}>
                  {detail.attributes.canonicalTitle}
                </Text>

                <Text style={[styles.titleHeader, {paddingTop: 10}]}>Type</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleType}>{detail.type}</Text>
                  <Text style={styles.titleType}>
                    {`${detail.attributes.episodeLength} Eps`}
                  </Text>
                </View>

                <Text style={[styles.titleHeader, {paddingTop: 10}]}>Year</Text>
                <Text style={styles.titleInfo}>
                  {this.showYear(detail.attributes)}
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.titleHeader}>Genres</Text>
              <View style={{flexDirection: 'row'}}>
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
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text style={styles.titleHeader}>Average Rating</Text>
                  <Text style={styles.titleInfo}>
                    {detail.attributes.averageRating}
                  </Text>
                </View>
                <View style={{flexDirection: 'column', flex: 1}}>
                  <Text style={styles.titleHeader}>Age Rating</Text>
                  <Text style={styles.titleInfo}>
                    {detail.attributes.ageRatingGuide}
                  </Text>
                </View>
              </View>
              <View style={{paddingTop: 10, paddingBottom: 10}}>
                <Text style={styles.titleHeader}>Sipnosis</Text>
                <Content style={{height: 90, width: '100%'}}>
                  <Text style={styles.titleInfo}>
                    {detail.attributes.synopsis}
                  </Text>
                </Content>
              </View>
            </View>
          </View>
        )}
      </Container>
    );
  }
}

export default DetailData;
