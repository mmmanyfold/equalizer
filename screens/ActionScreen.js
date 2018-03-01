import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

import Overlay from 'react-native-modal-overlay';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { CeraText, CeraTextBold, CeraTextItalic } from '../components/StyledText';
import { default as focusAreas } from "../constants/focusAreas";
import { isFunction } from 'lodash';

export default class ActionScreen extends Component {

  state = {
    currentTime: 0,
    stopwatchStart: true,
    stopwatchReset: false,
    modalVisible: false,
  };

  static navigationOptions = {
    header: null,
  };

  closeModal(store) {
    this.setState({
      stopwatchStart: false,
      stopwatchReset: true,
      modalVisible: false,
    });
    this.props.navigation.navigate('Main', {
      store,
    });
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
      modalVisible: true,
    });
  }

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
        icon = require("../assets/images/fa-icon-red.png")
        break;
      case 'BabyDevelopment':
        icon = require("../assets/images/fa-icon-blue.png")
        break;
      case 'HouseholdChores':
        icon = require("../assets/images/fa-icon-orange.png")
        break;
      case 'SchedulesAndCommunication':
        icon = require("../assets/images/fa-icon-green.png")
        break;
      case 'EmotionalSupport':
        icon = require("../assets/images/fa-icon-purple.png")
        break;
    }
    return (
      <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <TouchableWithoutFeedback onPress={() => this.closeModal(store)}>
              <View style={{ backgroundColor: '#54489d', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require("../assets/images/logo-wiggle-white.gif")}
                       style={styles.logo} />
                <CeraText style={{ color: "#fff", fontSize: 50 }}>Way to go!</CeraText>
              </View>
            </TouchableWithoutFeedback>
        </Modal>
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
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={[styles.cardContainer, { borderColor: color }]}>
              <CeraTextBold style={[styles.cardLabel, { color: color }]}>{"IN PROGRESS"}</CeraTextBold>
              <View style={styles.cardContent}>
                <CeraText style={styles.cardTitle}>{ cardTitle }</CeraText>
                <CeraText style={styles.cardSubtitle}>{subtitle}</CeraText>
                <CeraTextItalic style={{ textAlign: 'center' }}>
                  Tap this card for helpful tips
                </CeraTextItalic>
              </View>
            </View>
            <View style={{ flex: 1, alignItems:'center', marginTop: 50 }}>
              <Stopwatch laps msecs start={this.state.stopwatchStart}
                msecs={false}
                options={options}
              />
              <TouchableOpacity
                onPress={() => this.toggleStopwatch(store)}
                style={{ backgroundColor: color, borderRadius: 5, paddingHorizontal: 13, paddingTop: 4 }}>
                <CeraText
                  style={{ fontSize: 35, color: '#fff' }}>
                  {!this.state.stopwatchStart ? "START" : "DONE"}
                </CeraText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.closeModal(store)}
                                  style={{ marginTop: 45 }}>
                <CeraText style={{ color: color, fontSize: 25 }}>
                  {"Didn't get to it"}
                </CeraText>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 2 }}></View>
          </View>
        </View>
      </View>
    );
  }
}

const options = {
  container: {
    borderRadius: 5,
  },
  text: {
    fontSize: 40,
    fontFamily: 'cera',
    color: '#54489d',
    marginHorizontal: 7,
  }
};

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
    fontSize: 21,
    color: '#fff',
    marginHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  cardContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 10,
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
        fontSize: 30,
      },
      android: {
        fontSize: 20,
      },
    }),
    textAlign: 'center',
    marginHorizontal: 13,
  },
  cardSubtitle: {
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 17,
      },
    }),
    textAlign: 'center',
    margin: 13,
    marginHorizontal: 13,
  },
});
