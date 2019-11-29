import React, {Component} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import styles from './styles';
import {Container} from 'native-base';

const LoadingAnimation = ({type}) => {
  if (type === 'feed') {
    return (
      <Container style={styles.container}>
        <ContentLoader
          height={styles.screen.height}
          width={styles.screen.width}
          speed={2}
          primaryColor={styles.primary.backgroundColor}
          secondaryColor={styles.secondary.backgroundColor}>
          <Rect x="0" y="17" rx="4" ry="4" width="300" height="13" />
          <Rect x="0" y="40" rx="5" ry="5" width="100" height="150" />
          <Rect x="115" y="40" rx="4" ry="5" width="100" height="150" />
          <Rect x="225" y="40" rx="3" ry="5" width="100" height="150" />

          <Rect x="0" y="210" rx="4" ry="4" width="200" height="13" />
          <Rect x="0" y="233" rx="5" ry="5" width="100" height="150" />
          <Rect x="115" y="233" rx="4" ry="5" width="100" height="150" />
          <Rect x="225" y="233" rx="3" ry="5" width="100" height="150" />

          <Rect x="0" y="410" rx="4" ry="4" width="100" height="13" />
          <Rect x="0" y="433" rx="5" ry="5" width="100" height="150" />
          <Rect x="115" y="433" rx="4" ry="5" width="100" height="150" />
          <Rect x="225" y="433" rx="3" ry="5" width="100" height="150" />
        </ContentLoader>
      </Container>
    );
  } else {
    return null;
  }
};

export default LoadingAnimation;
