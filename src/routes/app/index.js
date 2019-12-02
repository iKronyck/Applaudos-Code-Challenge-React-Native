// screens
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import Home from '../../screens/app/Home';
import DetailData from '../../screens/app/DetailData';
import Search from '../../screens/app/Search';

const appStackNavigator = createStackNavigator(
  {
    Home,
    DetailData,
    Search,
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
