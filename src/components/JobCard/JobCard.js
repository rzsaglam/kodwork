import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './JobCard.style';

const JobCard = ({
  jobName,
  jobCompany,
  jobLocation,
  jobLevel,
  onPress,
  children,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>{jobName}</Text>
          <Text style={styles.company}>{jobCompany}</Text>
          <View style={styles.location}>
            <Text style={styles.locationText}>{jobLocation}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.level}>{jobLevel}</Text>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
