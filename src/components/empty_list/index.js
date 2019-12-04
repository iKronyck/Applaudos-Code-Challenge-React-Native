import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import styles from './styles';

export default function EmptyList({text}) {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
