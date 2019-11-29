import React from 'react';
import {SafeAreaView} from 'react-native';

import CustomHeader from '../custom_headers';

const Header = ({type, title}) => (
  <SafeAreaView>
    <CustomHeader title={title} type={type} />
  </SafeAreaView>
);

export default Header;
