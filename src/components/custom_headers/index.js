import React from 'react';
import {View, TextInput, StatusBar} from 'react-native';
import {Header, Icon, Title} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// custom
import styles from './styles';

const CustomHeader = ({type, title, onLeft, onRigth}) => {
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
      <Header transparent style={{alignItems: 'center'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{flex: 1}}>
          <Icon style={styles.backIcon} name="arrow-back" />
        </View>
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
  onLeft: () => {},
  onRigth: () => {},
};

export default CustomHeader;
