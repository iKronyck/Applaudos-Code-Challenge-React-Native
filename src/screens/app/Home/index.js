import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Button, Footer, FooterTab, Icon} from 'native-base';
import ContentLoader, {Rect} from 'react-content-loader/native';

// custom
import Header from '../../../components/header';
import {
  getFirstPageGenres,
  getAnimes,
  getPaginatedData,
} from '../../../api/kitsu';

// api
import Genres from './Genres';
import LoadingAnimation from '../../../components/loading_animation';
import CustomFooter from '../../../components/custom_footer';
import ErrorScreen from '../../../components/error_screen';
import verifyNetworkConnection from '../../../utils/verifyNetworkConnection';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      nextPage: '',
      isLoading: true,
      search: '',
      showError: false,
      serieType: 'anime',
      activeAnime: true,
    };
  }

  componentDidMount = async () => {
    this.callFirstGenres();
  };

  onChangeInputValue = (value, clear = false) => {
    const search = clear ? '' : value;
    this.setState({
      search,
    });
  };

  callFirstGenres = async () => {
    try {
      this.setState({nextPage: ''});
      const getGenres = await getFirstPageGenres();
      this.setState({
        genres: getGenres.data.data,
        nextPage: getGenres.data.links.next,
        isLoading: false,
        showError: false,
      });
    } catch (error) {
      this.setState({isLoading: false, showError: true});
      console.log(error);
    }
  };

  nextPageOfGenres = async () => {
    try {
      await verifyNetworkConnection();
      const {nextPage, genres} = this.state;
      let _state = this.state;
      const getGenres = await getPaginatedData(nextPage);
      _state.genres = [...genres, ...getGenres.data.data];
      _state.nextPage = '';
      if (getGenres.data.links.hasOwnProperty('next')) {
        _state.nextPage = getGenres.data.links.next;
      }
      this.setState({_state});
    } catch (error) {
      console.log(error);
      this.setState({showError: true});
    }
  };

  loadMoreGenres = () => {
    const {nextPage, genres} = this.state;
    if (nextPage && genres.length) {
      this.nextPageOfGenres();
    }
  };

  showAnime = async () => {
    this.setState({activeAnime: true});
  };

  showManga = async () => {
    this.setState({activeAnime: false});
  };

  render() {
    const {genres, isLoading, search, showError, activeAnime} = this.state;
    return (
      <ErrorScreen
        onBack={() => this.props.navigation.goBack()}
        onReload={() => this.callFirstGenres()}
        forUpdate={this.state}
        showBack={false}
        showError={showError}>
        <Container>
          <Header
            type="home"
            segmentActive={activeAnime}
            showAnime={() => this.showAnime()}
            showManga={() => this.showManga()}
            searchValue={search}
            clearSearch={v => this.onChangeInputValue(v, true)}
            onSearchChange={v => this.onChangeInputValue(v)}
          />
          {isLoading ? (
            <LoadingAnimation type="feed" />
          ) : (
            <Genres
              genres={genres}
              activeAnime={activeAnime}
              search={search}
              updateData={this.state}
              loadMoreGenres={this.loadMoreGenres}
            />
          )}
          <CustomFooter />
        </Container>
      </ErrorScreen>
    );
  }
}

export default Home;
