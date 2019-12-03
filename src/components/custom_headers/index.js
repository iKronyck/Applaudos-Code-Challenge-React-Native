import React from 'react';
import {View, TextInput, StatusBar, Text} from 'react-native';
import {Header, Icon, Title, Left, Body, Right} from 'native-base';
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
      <Header noLeft style={{alignItems: 'center', backgroundColor: 'white'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Left />
        <Body>
          <Title style={styles.title}>{title}</Title>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={onRigth}
            style={{justifyContent: 'flex-start', paddingRight: 20}}>
            <Icon
              type="MaterialIcons"
              style={styles.backIcon}
              name="filter-list"
            />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  } else {
    return (
      <Header transparent style={{alignItems: 'center'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <TouchableOpacity
          onPress={onLeft}
          style={{justifyContent: 'flex-start', paddingRight: 20}}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </TouchableOpacity>
        <View style={{flex: 7, paddingRight: 10}}>
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
};

export default CustomHeader;
