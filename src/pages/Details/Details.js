import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {useDispatch} from 'react-redux';

import styles from './Details.style';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Button from '../../components/Button';

const Details = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.SINGLE_JOB_API_URL}${id}`);
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();

  if (loading) {
    return <ActivityIndicator size="small" />;
  }
  if (error) {
    console.log(error);
    return <Text>Error</Text>;
  }

  const handleFav = () => {
    dispatch({type: 'ADD_FAVOURITES', payload: {data}});
  };

  const handleSubmit = () => {
    Alert.alert('kodwork', 'Submitted');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.location}>
          <Text style={styles.titleText}>Locations: </Text>
          <Text style={styles.text}>{data.locations[0].name}</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.titleText}>Job Level: </Text>
          <Text style={styles.text}>{data.levels[0].name}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <RenderHtml contentWidth={width} source={{html: data.contents}} />
      </View>
      <View style={styles.footer}>
        <Button text={'Submit'} iconName={'login'} onPress={handleSubmit} />
        <Button text={'Favourite'} iconName={'heart'} onPress={handleFav} />
      </View>
    </ScrollView>
  );
};

export default Details;
