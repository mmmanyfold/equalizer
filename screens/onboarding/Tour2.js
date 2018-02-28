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
import { isFunction } from 'lodash';
import { HouseholdChores } from '../../constants/focusAreas/HouseholdChores';

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
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}

export default class Tour2 extends Component {
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
    console.log(`Nope for ${card.title}`)
  }

  render() {
    const { navigation : { state : { params: { store } } } } = this.props;
    const { meta: { color, name }, actionCards } = HouseholdChores;
    // NOTE: for demo purposes we display cards at index 1 on first render
    const cards = actionCards.slice(1, actionCards.length);
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={[ styles.header, { backgroundColor: color } ]}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Tour3', {
                store
              })}>
                <Image
                  source={require('../../assets/images/fa-icon-green.png')}
                  style={styles.headerIcon}/>
              </TouchableOpacity>
            </View>
            <View>
              <CeraText style={styles.headerTitle}>{name}</CeraText>
            </View>
          </View>
          <View style={styles.instructions}>
            <Image
              style={{ height: 80, width: 79 }}
              source={require('../../assets/images/arrow-up.png')} />
            <CeraText style={{ flex: 1, paddingBottom: 15, fontWeight: 'bold' }}>
              <CeraText>Tap to change the Focus Area</CeraText>
            </CeraText>
          </View>
          <View style={styles.welcomeContainer}>
          </View>
          <SwipeCards style={{ flex: 1 }}
            loop={true}
            cards={cards}
            renderCard={(cardData) => <Card {...cardData}
                                            color={color}
                                            momName={store.momNickname}
                                            babyName={store.childNickname}/>}
            nopeStyle={{ borderWidth: 0, flex: 1 }}
            yupStyle={{ borderWidth: 0, flex: 1 }}
            noView={<View></View>}
            yupView={<View></View>}
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
    height: 80,
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
  instructions: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 80,
      },
      android: {
        top: 50,
      },
    }),
    left: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  cardContainer: {
    flex: 3,
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
