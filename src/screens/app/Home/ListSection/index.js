import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';
import {Container, Thumbnail} from 'native-base';
import {getAnimes, getPaginatedData, filterAnime} from '../../../../api/kitsu';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {withNavigation} from 'react-navigation';
import styles from './styles';

import ImageNotFound from '../../../../assets/img/img_not_found.png';
import CardItem from '../../../../components/card_item';

class ListSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount = () => {
    this.getSectionData();
  };

  componentDidUpdate = async (prevProps, prevState) => {
    console.log(prevProps.activeAnime, this.props.activeAnime);
    if (prevProps.activeAnime !== this.props.activeAnime) {
      this.getSectionData();
    }
  };

  getSectionData = async () => {
    const {attributes} = this.props.genre;
    try {
      const genreSearch = attributes.slug;
      const type = this.props.activeAnime ? 'anime' : 'manga';
      const data = await getAnimes(genreSearch, type);
      this.setState({
        listData: data.data.data,
        nextPage: data.data.links.next,
      });
    } catch (error) {
      console.log(error);
    }
  };

  nextPageOfSectionData = async () => {
    try {
      const {nextPage, listData} = this.state;
      const data = await getPaginatedData(nextPage);
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
    const {attributes, navigation} = this.props.genre;
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
            <CardItem
              goToDetail={() =>
                navigation.navigate('DetailData', {detail: item})
              }
              data={item}
              image={this.validateImage(item.attributes.posterImage)}
            />
          )}
        />
      </View>
    );
  }
}

export default withNavigation(ListSection);
