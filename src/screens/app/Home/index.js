import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Button} from 'native-base';
import Header from '../../../components/header';
import {getAllCategorys, getAnimes} from '../../../api/kitsu';

class Home extends Component {
  componentDidMount = async () => {
    const getCategorys = await getAllCategorys();
    console.log(getCategorys);
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header type="search" />
      </View>
    );
  }
}

export default Home;
