import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

const Button = ({text, iconName, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={20} color={'white'} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
