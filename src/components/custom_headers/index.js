import React from 'react';
import {View, TextInput, StatusBar, Text} from 'react-native';
import {
  Header,
  Icon,
  Title,
  Left,
  Body,
  Right,
  Segment,
  Button,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// custom
import styles from './styles';

const CustomHeader = ({
  type,
  title,
  searchValue,
  onLeft,
  onRigth,
  onSearchChange,
  clearSearch,
  showAnime,
  showManga,
  segmentActive,
}) => {
  if (type === 'search') {
    return (
      <Header style={styles.containerHeaderSearch}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.containerSearch}>
          <View style={styles.containerIcons}>
            <TouchableOpacity style={styles.containerButtonActionSearch}>
              <Icon
                style={styles.colorIcon}
                type="MaterialIcons"
                name="search"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              value={searchValue}
              onChangeText={onSearchChange}
              style={styles.inputSearch}
              placeholder="Search"
            />
          </View>
          <View style={styles.containerIcons}>
            <TouchableOpacity
              onPress={clearSearch}
              style={styles.containerButtonActionClose}>
              <Icon
                style={styles.colorIcon}
                type="MaterialIcons"
                name="close"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Header>
    );
  } else if (type === 'favorites') {
    return (
      <Header noLeft style={styles.favoritesHeader}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Left />
        <Body>
          <Title style={styles.title}>{title}</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={onRigth} style={styles.buttonFilter}>
            <Icon
              type="MaterialIcons"
              style={styles.backIcon}
              name="filter-list"
            />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  } else if (type === 'home') {
    const {
      buttonActive,
      textActive,
      iconActive,
      buttonInactive,
      textInactive,
      iconInactive,
    } = styles;
    return (
      <Header style={styles.headerHome} hasSegment>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Left />
        <Body>
          <Segment style={styles.segmentStyle}>
            <Button
              onPress={showAnime}
              style={[
                styles.buttonLeftSegment,
                segmentActive ? buttonActive : buttonInactive,
              ]}
              active={segmentActive}
              first>
              <Icon
                style={segmentActive ? iconActive : iconInactive}
                name="tv"
              />
              <Text style={segmentActive ? textActive : textInactive}>
                Anime
              </Text>
            </Button>
            <Button
              onPress={showManga}
              style={[
                styles.buttonRightSegment,
                segmentActive ? buttonInactive : buttonActive,
              ]}
              active={!segmentActive}
              last>
              <Icon
                style={segmentActive ? iconInactive : iconActive}
                name="book"
              />
              <Text style={segmentActive ? textInactive : textActive}>
                Manga
              </Text>
            </Button>
          </Segment>
        </Body>
        <Right />
      </Header>
    );
  } else {
    return (
      <Header style={styles.ordinaryHeader}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <TouchableOpacity onPress={onLeft} style={styles.leftOrdinary}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </TouchableOpacity>
        <View style={styles.titleLeftContainer}>
          <Title style={styles.title}>{title}</Title>
        </View>
      </Header>
    );
  }
};

CustomHeader.defaultProps = {
  type: 'ordinary',
  title: '',
  valueSearch: '',
  data: [],
  searchValue: '',
  onLeft: () => {},
  onRigth: () => {},
  onSearchChange: () => {},
  showAnime: () => {},
  showManga: () => {},
};

export default CustomHeader;
