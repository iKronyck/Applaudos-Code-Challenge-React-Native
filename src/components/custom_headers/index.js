import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Header, Left, Icon, Button, Right, Title, Body} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// custom
import styles from './styles';

const CustomHeader = ({type}) => {
  if (type === 'search') {
    return (
      <Header
        androidStatusBarColor={styles.androidStatusBarColor.color}
        style={styles.containerHeaderSearch}>
        <View style={styles.containerSearch}>
          <View style={styles.containerIcons}>
            <TouchableOpacity style={styles.containerButtonActionSearch}>
              <Icon type="MaterialIcons" name="search" />
            </TouchableOpacity>
          </View>
          <View style={styles.containerInput}>
            <TextInput style={styles.inputSearch} placeholder="Search" />
          </View>
          <View style={styles.containerIcons}>
            <TouchableOpacity style={styles.containerButtonActionClose}>
              <Icon type="MaterialIcons" name="close" />
            </TouchableOpacity>
          </View>
        </View>
      </Header>
    );
  } else {
    return (
      <Header
        androidStatusBarColor={styles.androidStatusBarColor.color}
        style={{backgroundColor: '#66bb6a'}}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
};

CustomHeader.defaultProps = {
  type: 'ordinary',
  valueSearch: '',
  data: [],
};

export default CustomHeader;
