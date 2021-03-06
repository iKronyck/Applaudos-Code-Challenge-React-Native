import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CustomFooter from '../../../components/custom_footer';
import Header from '../../../components/header';
import {connect} from 'react-redux';
import CardItem from '../../../components/card_item';
import {Container, ActionSheet} from 'native-base';

// custom
import styles from './styles';
import EmptyList from '../../../components/empty_list';
import ImageNotFound from '../../../assets/img/img_not_found.png';

var BUTTONS = [
  {text: 'Manga', icon: 'book', iconColor: styles.colorIcon.color},
  {text: 'Anime', icon: 'tv', iconColor: styles.colorIcon.color},
  {
    text: 'Manga and Anime',
    icon: 'git-compare',
    iconColor: styles.colorIcon.color,
  },
  {text: 'Cancel', icon: 'close', iconColor: styles.colorCloseIcon.color},
];
var CANCEL_INDEX = 3;

function Favorites(props) {
  const {favorites, navigation} = props;
  let [myFavorites, setMyFavorites] = useState(favorites);

  function openFilterOptions() {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: 'Filter My Favorites',
      },
      buttonIndex => {
        prepareFilterData(buttonIndex);
      },
    );
  }

  function prepareFilterData(index) {
    switch (index) {
      case 0:
        filterData('manga', favorites);
        break;
      case 1:
        filterData('anime', favorites);
        break;
      default:
        getAll(favorites);
        break;
    }
  }

  function filterData(type) {
    const filterFavorites = favorites.filter(fav => fav.type === type);
    setMyFavorites(filterFavorites);
  }

  function getAll() {
    setMyFavorites(favorites);
  }

  function validateImage(image) {
    if (image && image.hasOwnProperty('original')) {
      return {uri: image.original};
    } else {
      return ImageNotFound;
    }
  }

  return (
    <Container>
      <Header
        onRigth={() => openFilterOptions(favorites)}
        title="My Favorites"
        type="favorites"
      />
      <FlatList
        style={styles.list}
        keyExtractor={i => i.id.toString()}
        extraData={props}
        showsVerticalScrollIndicator={false}
        data={myFavorites}
        numColumns={3}
        ListEmptyComponent={() => <EmptyList text="You don't have favorites" />}
        renderItem={({item}) => (
          <CardItem
            goToDetail={() => navigation.navigate('DetailData', {detail: item})}
            data={item}
            image={validateImage(item.attributes.posterImage)}
          />
        )}
      />
      <CustomFooter active="favorites" />
    </Container>
  );
}

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(Favorites);
