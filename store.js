import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

//reducers
import favoritesReducer from './src/reducers/favorites';

//persist config
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const userFavorites = {
  key: 'favorites',
  storage: AsyncStorage,
  blacklist: [],
};

//combine reducers
const rootReducer = combineReducers({
  favorites: persistReducer(userFavorites, favoritesReducer),
});

// create store and persist reducers
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

export {store, persistor};
