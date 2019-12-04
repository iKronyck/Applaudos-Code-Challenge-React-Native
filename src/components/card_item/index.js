import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Container} from 'native-base';

import styles from './styles';
import TextAnimeManga from '../text_anime_manga';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CardItem({data, goToDetail, image}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToDetail}>
        <ImageBackground
          imageStyle={styles.imageStyle}
          resizeMode="stretch"
          style={styles.imageBackGround}
          source={image}>
          <View style={styles.textType}>
            <TextAnimeManga text={data.type} />
          </View>
        </ImageBackground>
        <Text numberOfLines={3}>{data.attributes.canonicalTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
