import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import styles from './Jobs.style';

import JobCard from '../../components/JobCard';

const Jobs = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.JOBS_API_URL);

  if (loading) {
    return <ActivityIndicator size="small" />;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  const handlePress = (id, name) => {
    navigation.navigate('Details', {id, name});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={({item}) => (
          <JobCard
            id={item.id}
            jobName={item.name}
            jobCompany={item.company.name}
            jobLocation={item.locations[0].name}
            jobLevel={item.levels[0].name}
            onPress={() => handlePress(item.id, item.name)}
          />
        )}
      />
    </View>
  );
};

export default Jobs;
