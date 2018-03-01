import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { CeraText, CeraTextBold } from '../../components/StyledText';
import SwipeCards from 'react-native-swipe-cards';
import { has, isFunction } from 'lodash';
import { default as focusAreas } from '../../constants/focusAreas';

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
          <CeraTextBold style={[styles.cardLabel, { color: this.props.color }]}>{"TODAY'S ACTION"}</CeraTextBold>
          <View style={styles.cardContent}>
            <View><CeraText style={styles.cardTitle}>{title}</CeraText></View>
            <View><CeraText style={styles.cardSubtitle}>{this.props.subtitle}</CeraText></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: -50 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flexDirection: 'column', flex: 2, alignItems: 'flex-end' }}>
            <Image
              style={{ height: 100, width: 90, marginRight: 10, }}
              source={require('../../assets/images/arrow-right.png')} />
            <CeraTextBold style={{ paddingRight: 20, fontSize: 20, textAlign: 'right' }}>
                Swipe RIGHT to ACCEPT the Action
            </CeraTextBold>
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
    const { navigation : { state : { params: { store } } } } = this.props;
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
        icon = require("../../assets/images/fa-icon-red.png")
        break;
      case 'BabyDevelopment':
        icon = require("../../assets/images/fa-icon-blue.png")
        break;
      case 'HouseholdChores':
        icon = require("../../assets/images/fa-icon-orange.png")
        break;
      case 'SchedulesAndCommunication':
        icon = require("../../assets/images/fa-icon-green.png")
        break;
      case 'EmotionalSupport':
        icon = require("../../assets/images/fa-icon-purple.png")
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
              source={require('../../assets/images/elf.png')}
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
            noView={<View><CeraText style={{ fontSize: 40, color: '#54489d' }}><CeraText>{"Leave this for \"the elves\""}</CeraText></CeraText></View>}
            yupView={<View><CeraText style={{ fontSize: 45, color: '#54489d' }}><CeraText>{"I got this!"}</CeraText></CeraText></View>}
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
    backgroundColor: '#F2F2F2',
  },
  contentContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
    }),
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
  welcomeContainer: {
    alignItems: 'flex-end',
  },
  welcomeImage: {
    width: 57,
    height: 80,
    resizeMode: 'contain',
    marginRight: 65,
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
    width: 325,
  },
  cardLabel: {
    fontSize: 20,
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
    marginTop: 13,
    marginHorizontal: 13,
  },
});
