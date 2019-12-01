import React from 'react';
import {View, Text} from 'react-native';

// custom
import styles from './styles';

// utils
import {format_first_uppercase_letter} from '../../utils/ format_letters';
export default function AiringStatus({status}) {
  let backgroundColor = styles.textB;
  if (status === 'tba') {
    backgroundColor = styles.textTBA;
  } else if (status === 'finished') {
    backgroundColor = styles.textF;
  }
  status = status === 'tba' ? 'To be confirmed' : status;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, backgroundColor]}>
        {format_first_uppercase_letter(status)}
      </Text>
    </View>
  );
}
