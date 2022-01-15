import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Favourites.style';

import JobCard from '../../components/JobCard';
import Button from '../../components/Button';

const Favourites = () => {
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch({type: 'REMOVE_FAVOURITES', payload: {id}});
  };

  const renderJob = ({item}) => (
    <JobCard
      id={item.id}
      jobName={item.name}
      jobCompany={item.company.name}
      jobLocation={item.locations[0].name}
      jobLevel={item.levels[0].name}>
      <View style={styles.buttonContainer}>
        <Button text="Remove" onPress={() => handleRemove(item.id)} />
      </View>
    </JobCard>
  );

  return (
    <View>
      <FlatList data={favourites} renderItem={renderJob} />
    </View>
  );
};

export default Favourites;
