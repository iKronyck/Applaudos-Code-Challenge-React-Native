import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';

// custom
import styles from './styles.js';

function StartRating({rating, userCount}) {
  if (rating) {
    const ratingToShow = (rating / 2 / 10).toFixed(1);
    const raitingArray = ratingToShow.split('.');
    return (
      <View style={styles.container}>
        {[1, 2, 3, 4, 5].map(i => {
          if (i <= Number(raitingArray[0])) {
            return (
              <Icon style={styles.icon} key={i} type="Ionicons" name="star" />
            );
          } else {
            if (i - ratingToShow < 1 && Number(raitingArray[1]) >= 5) {
              return (
                <Icon
                  style={styles.icon}
                  key={i}
                  type="Ionicons"
                  name="star-half"
                />
              );
            } else {
              return (
                <Icon
                  style={styles.icon}
                  key={i}
                  type="Ionicons"
                  name="star-outline"
                />
              );
            }
          }
        })}
        <Text style={styles.numberRaiting}>{ratingToShow}</Text>
        <Text style={styles.numberPersons}>{`(${userCount})`}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {[0, 1, 2, 3, 4].map(i => (
          <Icon
            style={styles.icon}
            key={i}
            type="Ionicons"
            name="star-outline"
          />
        ))}
        <Text style={styles.numberPersons}>{`(${userCount})`}</Text>
      </View>
    );
  }
}

export default StartRating;
