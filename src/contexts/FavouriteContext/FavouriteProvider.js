import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import React, {useState, useEffect} from 'react';

const FavouriteProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('@FAVOURITES').then(item => {
      item ? setFavourites(JSON.parse(item)) : setFavourites([]);
    });
  }, []);

  const store = createStore(reducers, {favourites});
  return <Provider store={store}>{children}</Provider>;
};

export default FavouriteProvider;
