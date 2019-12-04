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
  showManga,
  showAnime,
  segmentActive,
}) => (
  <SafeAreaView>
    <CustomHeader
      searchValue={searchValue}
      clearSearch={clearSearch}
      onSearchChange={onSearchChange}
      segmentActive={segmentActive}
      onLeft={() => onLeft()}
      onRigth={() => onRigth()}
      showAnime={showAnime}
      showManga={showManga}
      title={title}
      type={type}
    />
  </SafeAreaView>
);

export default Header;
