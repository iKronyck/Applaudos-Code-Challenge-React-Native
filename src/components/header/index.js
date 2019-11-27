import React from 'react';
import {SafeAreaView, View, Image, Animated} from 'react-native';

import CustomHeader from '../custom_headers';

const Header = ({type}) => (
  <SafeAreaView>
    <CustomHeader type={type} />
  </SafeAreaView>
);

export default Header;
