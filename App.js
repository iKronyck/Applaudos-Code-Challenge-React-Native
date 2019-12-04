import React from 'react';
import 'react-native-gesture-handler';
import {Root} from 'native-base';
import Splash from './src/screens/splash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

import './network';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root>
          <Splash />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
