import React from 'react';
import {View, Text, TextInput, StatusBar} from 'react-native';
import {Header, Left, Icon, Button, Right, Title, Body} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// custom
import styles from './styles';

const CustomHeader = ({type, title}) => {
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
            <TextInput style={styles.inputSearch} placeholder="Search" />
          </View>
          <View style={styles.containerIcons}>
            <TouchableOpacity style={styles.containerButtonActionClose}>
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
  } else {
    return (
      <Header transparent style={styles.detailContainer}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Left>
          <Button transparent>
            <Icon style={styles.backIcon} name="arrow-back" />
          </Button>
        </Left>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{title}</Title>
        </View>
        <Right>
          <Button transparent>
            {false ? (
              <Icon style={styles.heart_empty} type="Ionicons" name="heart" />
            ) : (
              <Icon
                style={styles.backIcon}
                type="Ionicons"
                name="heart-empty"
              />
            )}
          </Button>
        </Right>
      </Header>
    );
  }
};

CustomHeader.defaultProps = {
  type: 'ordinary',
  title: 'KHA',
  valueSearch: '',
  data: [],
};

export default CustomHeader;
