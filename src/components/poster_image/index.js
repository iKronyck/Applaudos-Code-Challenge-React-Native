import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';
import {Icon} from 'native-base';

// custom
import PlayButton from '../../assets/img/play_button.png';
import styles from './styles';

// utils
import playYoutubeVideo from '../../utils/playYoutubeVideo';

export default function PosterImage({videoUrl, image}) {
  if (videoUrl) {
    return (
      <View style={styles.containerPosterImage}>
        <ImageBackground
          style={styles.imgBackground}
          imageStyle={styles.img}
          resizeMode="stretch"
          source={image}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => {
              // to open and watch the video in youtube app
              // Linking.openURL(`https://www.youtube.com/watch?v=${videoUrl}`)

              // to open video in the app
              playYoutubeVideo(videoUrl);
            }}>
            <Image source={PlayButton} style={styles.playImage} />
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => alert('Hi')}
          style={styles.addMyFavoritesButton}>
          <Icon style={styles.addIcon} name="add" />
          <Text style={styles.addMyFavoritesText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.containerPosterImage2}>
        <ImageBackground
          style={styles.imgBackground2}
          imageStyle={styles.img}
          resizeMode="stretch"
          source={image}>
          <TouchableOpacity
            onPress={() => alert('Hi')}
            style={styles.addMyFavoritesButton2}>
            <Icon style={styles.addIcon} name="add" />
            <Text style={styles.addMyFavoritesText}>Add to Favorites</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
