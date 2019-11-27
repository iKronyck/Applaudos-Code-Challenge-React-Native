import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

// custom
import AppNavigation from '../../routes/app';
class Splash extends Component {
  componentDidMount() {
    RNBootSplash.hide({duration: 250});
  }

  render() {
    return <AppNavigation />;
  }
}

export default Splash;
