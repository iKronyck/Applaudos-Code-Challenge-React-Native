import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {Container, Button, Icon} from 'native-base';

// custom
import ErrorImage from '../../assets/img/error.gif';
import styles from './styles';

export default function ErrorScreen({
  showError,
  children,
  onReload,
  onBack,
  showBack,
}) {
  if (showError) {
    return (
      <Container style={styles.container}>
        <ImageBackground style={styles.imageContainer} source={ErrorImage}>
          <Text style={styles.message}>ALGO SALIO MAL</Text>
          <Button
            onPress={onReload}
            style={showBack ? styles.button : styles.buttonTop}
            iconLeft>
            <Icon
              style={styles.icon}
              type="MaterialCommunityIcons"
              name="reload"
            />
            <Text style={styles.textButton}>Reload</Text>
          </Button>
          {showBack && (
            <Button onPress={onBack} style={styles.button2} iconLeft>
              <Icon style={styles.icon} name="arrow-back" />
              <Text style={styles.textButton}>Volver atras</Text>
            </Button>
          )}
        </ImageBackground>
      </Container>
    );
  }
  return children;
}

ErrorScreen.defaultProps = {
  onBack: () => {},
  onReload: () => {},
  showBack: true,
};
