import React from 'react';
import {View, Text} from 'react-native';
import date_released_format from '../../utils/date_released_format';
import styles from './styles';

export default function YearReleasedAndFinshied({releasedYear, finishedYear}) {
  if (releasedYear) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {date_released_format(releasedYear, finishedYear)}
        </Text>
      </View>
    );
  }
  return null;
}
