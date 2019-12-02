import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';

// custom
import styles from './styles';
import ListSection from '../ListSection';

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  render() {
    const {genres, search, loadMoreGenres, updateData} = this.props;
    return (
      <Container style={styles.container}>
        <FlatList
          keyExtractor={i => i.id}
          data={genres}
          initialNumToRender={10}
          extraData={updateData}
          onEndReached={() => loadMoreGenres()}
          onEndReachedThreshold={0.8}
          renderItem={({item}) => <ListSection search={search} genre={item} />}
        />
      </Container>
    );
  }
}

export default Genres;
