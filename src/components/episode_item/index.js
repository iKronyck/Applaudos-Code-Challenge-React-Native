import React from 'react';
import {Text, View} from 'react-native';
import {ListItem, Thumbnail} from 'native-base';
import styles from './styles';
import ImageNotFound from '../../assets/img/img_not_found.png';

function verifyImage(image) {
  if (image && image.hasOwnProperty('original')) {
    return {uri: image.original};
  } else {
    return ImageNotFound;
  }
}

export default function EpisodeItem({item}) {
  const {thumbnail, canonicalTitle, synopsis, number} = item.attributes;
  if (item.attributes.canonicalTitle) {
    return (
      <ListItem>
        <View style={styles.imageContainer}>
          <Thumbnail
            square
            resizeMode="cover"
            style={styles.image}
            source={verifyImage(thumbnail)}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{`${number} - ${canonicalTitle}`}</Text>
          <Text style={styles.text} numberOfLines={3}>
            {synopsis}
          </Text>
        </View>
      </ListItem>
    );
  }
  return null;
}
