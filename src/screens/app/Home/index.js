import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Button} from 'native-base';
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      nextPage: '',
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    this.callFirstGenres();
  };

  callFirstGenres = async () => {
    try {
      const getGenres = await getFirstPageGenres();
      this.setState({
        genres: getGenres.data.data,
        nextPage: getGenres.data.links.next,
        isLoading: false,
      });
    } catch (error) {
      this.setState({isLoading: false});
      console.log(error);
    }
  };

  nextPageOfGenres = async () => {
    try {
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
    }
  };

  loadMoreGenres = () => {
    const {nextPage, genres} = this.state;
    if (nextPage && genres.length) {
      this.nextPageOfGenres();
    }
  };

  render() {
    const {genres, isLoading} = this.state;
    return (
      <Container>
        <Header type="search" />
        {isLoading ? (
          <LoadingAnimation type="feed" />
        ) : (
          <Genres
            genres={genres}
            updateData={this.state}
            loadMoreGenres={this.loadMoreGenres}
          />
        )}
      </Container>
    );
  }
}

export default Home;
