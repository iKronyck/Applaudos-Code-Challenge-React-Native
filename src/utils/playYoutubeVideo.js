import {Platform} from 'react-native';
import {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube';
import {API_KEY_YOUTUBE} from '../../enviroment';

export default function playYoutubeVideo(videoId) {
  if (Platform.OS === 'android') {
    return YouTubeStandaloneAndroid.playVideo({
      apiKey: API_KEY_YOUTUBE,
      videoId,
      autoplay: true,
    });
  }
  return YouTubeStandaloneIOS.playVideo(videoId);
}
