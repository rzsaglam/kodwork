import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export default function reducers(state, action) {
  let favourites = state.favourites;
  switch (action.type) {
    case 'ADD_FAVOURITES':
      const {data} = action.payload;
      if (favourites.find((a: id) => a.id === data.id)) {
        Alert.alert('kodwork', 'Job is already in favourites');
        return state;
      }
      favourites.push(data);

      AsyncStorage.setItem('@FAVOURITES', JSON.stringify(favourites));
      Alert.alert('kodwork', 'Job is added to favourites');

      return {favourites: [...favourites]};
    case 'REMOVE_FAVOURITES':
      const {id} = action.payload;
      favourites = favourites.filter(a => {
        return a.id !== id;
      });
      AsyncStorage.setItem('@FAVOURITES', JSON.stringify(favourites));

      return {favourites: [...favourites]};
    default:
      return state;
  }
}
