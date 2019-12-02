import React from 'react';
import {View, Text} from 'react-native';
import {format_first_uppercase_letter} from '../../utils/ format_letters';
import styles from './styles';

export default function TextAnimeManga({text = 'anime'}) {
  const isAnime = text === 'anime';
  return (
    <View style={[styles.container, isAnime ? styles.anime : styles.manga]}>
      <Text style={styles.textStyle}>
        {format_first_uppercase_letter(text)}
      </Text>
    </View>
  );
}
