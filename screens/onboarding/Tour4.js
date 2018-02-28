import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { CeraText } from '../../components/StyledText';
import SwipeCards from 'react-native-swipe-cards';
import UserRecord from '../../stores/UserRecord';
import { has, isFunction } from 'lodash';
import { default as focusAreas } from '../../constants/focusAreas';

const store = new UserRecord();

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title;
    if (isFunction(this.props.title)) {
      if(this.props.who === 'baby') {
        title = this.props.title(this.props.babyName);
      } else {
        title = this.props.title(this.props.momName);
      }
    } else {
      title = this.props.title;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.cardContainer, { borderColor: this.props.color }]}>
          <CeraText style={[styles.cardLabel, { color: this.props.color }]}>{"TODAY'S ACTION"}</CeraText>
          <View style={styles.cardContent}>
            <View><CeraText style={styles.cardTitle}>{title}</CeraText></View>
            <View><CeraText style={styles.cardSubtitle}>{this.props.subtitle}</CeraText></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: -50 }}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
          </View>
          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-end' }}>
            <Image
              style={{ height: 100, width: 90, marginRight: 10, }}
              source={require('../../assets/images/arrow-right.png')} />
            <CeraText style={{ flex: 1, paddingRight: 20, fontWeight: 'bold' }}>
              <CeraText>
                Swipe RIGHT to ACCEPT the Action
              </CeraText>
            </CeraText>
          </View>
        </View>
      </View>
    )
  }
}

export default class Tour4 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  handleYup(store, card) {
    const update = store.set('cardSelected', card);
    this.props.navigation.navigate('Action', {
      store: update,
    });
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    let focusArea;
    if (has(this.props, 'navigation.state.params.store')) {
      focusArea = this.props.navigation.state.params.store.focusArea;
    } else {
      focusArea = store.focusArea;
    }
    const { meta: { color, name, id }, actionCards } = focusAreas.find(area => area.meta.id === focusArea);
    let icon;
    switch (id) {
      case 'BabyHealthAndHygiene':
        icon = require("../../assets/images/fa-icon-yellow.png")
        break;
      case 'BabyDevelopment':
        icon = require("../../assets/images/fa-icon-blue.png")
        break;
      case 'HouseholdChores':
        icon = require("../../assets/images/fa-icon-green.png")
        break;
      case 'SchedulesAndCommunication':
        icon = require("../../assets/images/fa-icon-purple.png")
        break;
      case 'EmotionalSupport':
        icon = require("../../assets/images/fa-icon-orange.png")
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
              source={require('../../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
          </View>
          <SwipeCards style={{ flex: 1 }}
            loop={true}
            cards={actionCards}
            renderCard={(cardData) => <Card {...cardData}
                                            color={color}
                                            momName={store.momNickname}
                                            babyName={store.childNickname}/>}
            nopeStyle={{ borderWidth: 0, flex: 1 }}
            yupStyle={{ borderWidth: 0, flex: 1 }}
            noView={<View><CeraText style={{ fontSize: 25, color: 'red' }}><CeraText>{"Leave this for the \"elves\""}</CeraText></CeraText></View>}
            yupView={<View><CeraText style={{ fontSize: 30, color: 'green' }}><CeraText>{"I got this!"}</CeraText></CeraText></View>}
            handleYup={this.handleYup.bind(this, store)}
            handleNope={this.handleNope.bind(this, store)}
          />
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
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
    borderWidth: 3,
    borderRadius: 10,
    height: 300,
    backgroundColor: '#fff',
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
