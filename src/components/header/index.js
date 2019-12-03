import React from 'react';
import {SafeAreaView} from 'react-native';

import CustomHeader from '../custom_headers';

const Header = ({
  type,
  title,
  searchValue,
  onLeft,
  onRigth,
  onSearchChange,
  clearSearch,
}) => (
  <SafeAreaView>
    <CustomHeader
      searchValue={searchValue}
      clearSearch={clearSearch}
      onSearchChange={onSearchChange}
      onLeft={() => onLeft()}
      onRigth={() => onRigth()}
      title={title}
      type={type}
    />
  </SafeAreaView>
);

export default Header;
