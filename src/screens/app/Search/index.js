import React, {Component} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import CustomFooter from '../../../components/custom_footer';
import Header from '../../../components/header';
import {Container, Icon} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';
import ErrorScreen from '../../../components/error_screen';

// api
import {filterAnime, filterManga, getPaginatedData} from '../../../api/kitsu';
import CardItem from '../../../components/card_item';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      search: '',
      nextAnime: '',
      nextManga: '',
      showError: false,
    };
  }

  onChangeValue = (value, clear = false) => {
    const search = clear ? '' : value;
    this.setState({
      search,
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    this.callData(prevState);
  };

  callData = async prevState => {
    try {
      const {search} = this.state;
      if (search && search !== prevState.search) {
        const anime = await filterAnime(search);
        const manga = await filterManga(search);
        const listData = [...anime.data.data, ...manga.data.data].sort(
          () => Math.random() - 0.5,
        );
        this.setState({
          listData,
          nextAnime: anime.data.links.next,
          nextManga: manga.data.links.next,
          showError: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({showError: true});
    }
  };

  nextPageOfSectionData = async () => {
    try {
      const {nextAnime, nextManga, listData} = this.state;
      const anime = await getPaginatedData(nextAnime);
      const manga = await getPaginatedData(nextManga);
      let _state = this.state;
      _state.nextAnime = '';
      // _state.nextManga = '';
      // const newArray = [...anime.data.data, ...manga.data.data].sort(
      //   () => Math.random() - 0.5,
      // );
      _state.listData = [...listData, ...anime.data.data];
      if (anime.data.links.hasOwnProperty('next')) {
        _state.nextAnime = anime.data.links.next;
      }
      // if (manga.data.links.hasOwnProperty('next')) {
      //   _state.nextAnime = manga.data.links.next;
      // }
      this.setState({_state});
    } catch (error) {
      console.log(error);
    }
  };

  loadMoreData = () => {
    const {nextAnime, nextManga, listData} = this.state;
    if (nextAnime && listData.length) {
      this.nextPageOfSectionData();
    }
  };

  render() {
    const {listData, search, showError} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <ErrorScreen
        onBack={() => this.props.navigation.goBack()}
        onReload={() => this.setState({showError: false})}
        forUpdate={this.state}
        showError={showError}>
        <Container>
          <Header
            type="search"
            onSearchChange={v => this.onChangeValue(v)}
            clearSearch={v => this.onChangeValue(v, true)}
            searchValue={search}
          />
          {search === '' && listData.length === 0 && (
            <View style={{alignItems: 'center', paddingTop: 40}}>
              <Text style={styles.textSearch}>Type to search series</Text>
              <Icon
                style={styles.iconStyle}
                type="MaterialIcons"
                name="tag-faces"
              />
            </View>
          )}
          <FlatList
            style={styles.list}
            keyExtractor={i => i.id.toString()}
            initialNumToRender={40}
            extraData={this.state}
            // onEndReached={() => this.loadMoreData()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.8}
            data={listData}
            numColumns={3}
            renderItem={({item}) => (
              <CardItem
                goToDetail={() => navigate('DetailData', {detail: item})}
                data={item}
              />
            )}
          />
          <CustomFooter active="search" />
        </Container>
      </ErrorScreen>
    );
  }
}

export default Search;
