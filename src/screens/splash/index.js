import React, {Component} from 'react';
import RNBootSplash from 'react-native-bootsplash';
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
