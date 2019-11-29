// screens
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import Home from '../../screens/app/Home';
import DetailData from '../../screens/app/DetailData';

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    DetailData,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const appNavigator = createAppContainer(appStackNavigator);

export default appNavigator;
