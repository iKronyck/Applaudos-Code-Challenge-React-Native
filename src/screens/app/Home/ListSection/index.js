import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Thumbnail} from 'native-base';
import {getAnimes, getPaginatedData} from '../../../../api/kitsu';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';

import ImageNotFound from '../../../../assets/img/img_not_found.png';

class ListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount = () => {
    this.getSectionData();
  };

  getSectionData = async () => {
    const {attributes} = this.props.genre;
    try {
      const genreSearch = attributes.slug;
      const data = await getAnimes(genreSearch);
      this.setState({
        listData: data.data.data,
        nextPage: data.data.links.next,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  nextPageOfSectionData = async () => {
    try {
      const {nextPage, listData} = this.state;
      const data = await getPaginatedData(nextPage);
      console.log(data, 'NEXT');
      let _state = this.state;
      _state.nextPage = '';
      _state.listData = [...listData, ...data.data.data];
      if (data.data.links.hasOwnProperty('next')) {
        _state.nextPage = data.data.links.next;
      }
      this.setState({_state});
    } catch (error) {
      console.log(error);
    }
  };

  loadMoreData = () => {
    const {nextPage, listData} = this.state;
    if (nextPage && listData.length) {
      this.nextPageOfSectionData();
    }
  };

  validateImage = image => {
    if (image && image.hasOwnProperty('original')) {
      return {uri: image.original};
    } else {
      return ImageNotFound;
    }
  };

  render() {
    const {listData} = this.state;
    const {attributes} = this.props.genre;
    return (
      <View style={styles.container}>
        <Text style={styles.sectionText}>
          {listData.length > 0 ? attributes.name : ''}
        </Text>
        <FlatList
          keyExtractor={i => i.id}
          data={listData}
          initialNumToRender={10}
          extraData={this.state}
          onEndReached={() => this.loadMoreData()}
          showsHorizontalScrollIndicator={false}
          horizontal
          onEndReachedThreshold={0.8}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Thumbnail
                  square
                  style={styles.image}
                  resizeMode="stretch"
                  source={this.validateImage(item.attributes.posterImage)}
                />
                <View style={styles.dataTypeContainer}>
                  <Text numberOfLines={2} style={styles.dataTypeText}>
                    {item.type}
                  </Text>
                </View>
              </View>
              <View style={styles.textTitleContainer}>
                <Text style={styles.textTitle} numberOfLines={3}>
                  {item.attributes.canonicalTitle}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default ListSection;