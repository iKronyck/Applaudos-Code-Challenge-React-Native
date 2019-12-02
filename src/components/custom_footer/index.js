import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

import styles from './styles.js';

function CustomFooter({active, navigation}) {
  return (
    <Footer>
      <FooterTab style={styles.footer}>
        <Button vertical onPress={() => navigation.navigate('Home')}>
          <Icon
            style={active === 'home' ? styles.iconActive : styles.icon}
            name="home"
          />
          <Text style={active === 'home' ? styles.textActive : styles.text}>
            Home
          </Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Search')}>
          <Icon
            style={active === 'search' ? styles.iconActive : styles.icon}
            name="search"
          />
          <Text style={active === 'search' ? styles.textActive : styles.text}>
            Search
          </Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Favorites')}>
          <Icon
            style={active === 'favorites' ? styles.iconActive : styles.icon}
            active
            name="heart"
          />
          <Text
            style={active === 'favorites' ? styles.textActive : styles.text}>
            Favorites
          </Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

CustomFooter.defaultProps = {
  active: 'home',
};

export default withNavigation(CustomFooter);
