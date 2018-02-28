import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CeraText } from '../components/StyledText';
import { default as focusAreas } from "../constants/focusAreas";
import { isFunction } from 'lodash';

export default class ActionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const store = this.props.navigation.state.params.store;
    const { focusArea, childNickname, momNickname } = this.props.navigation.state.params.store;
    const { title, who, subtitle } = this.props.navigation.state.params.store.cardSelected;
    const { meta: { color, name, id } } = focusAreas.find(area => area.meta.id === focusArea);
    let cardTitle;
    if (isFunction(title)) {
      if(who === 'baby') {
        cardTitle = title(childNickname);
      } else {
        cardTitle = title(momNickname);
      }
    } else {
      cardTitle = title;
    }
    let icon;
    switch (id) {
      case 'BabyHealthAndHygiene':
        icon = require("../assets/images/fa-icon-yellow.png")
        break;
      case 'BabyDevelopment':
        icon = require("../assets/images/fa-icon-blue.png")
        break;
      case 'HouseholdChores':
        icon = require("../assets/images/fa-icon-green.png")
        break;
      case 'SchedulesAndCommunication':
        icon = require("../assets/images/fa-icon-purple.png")
        break;
      case 'EmotionalSupport':
        icon = require("../assets/images/fa-icon-orange.png")
        break;
    }
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={[ styles.header, { backgroundColor: color } ]}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('FocusAreas', {
                store
              })}>
                <Image
                  source={icon}
                  style={styles.headerIcon}/>
              </TouchableOpacity>
            </View>
            <View>
              <CeraText style={styles.headerTitle}>{name}</CeraText>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={[styles.cardContainer, { borderColor: this.props.color }]}>
              <CeraText style={[styles.cardLabel, { color: this.props.color }]}>{"IN PROGRESS"}</CeraText>
              <View style={styles.cardContent}>
                <View><CeraText style={styles.cardTitle}>{ cardTitle }</CeraText></View>
                <View><CeraText style={styles.cardSubtitle}>{subtitle}</CeraText></View>
              </View>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
    }),
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
    }),
    marginBottom: 20,
  },
  headerIcon: {
    height: 35,
    width: 35,
    margin: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginLeft: -10,
  },
  cardContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
    borderWidth: 3,
    borderRadius: 10,
    height: 300,
  },
  cardLabel: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: {
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 30,
      },
    }),
    textAlign: 'center',
    marginHorizontal: 13,
  },
  cardSubtitle: {
    ...Platform.select({
      ios: {
        fontSize: 25,
      },
      android: {
        fontSize: 20,
      },
    }),
    textAlign: 'center',
    margin: 13,
  },
});
