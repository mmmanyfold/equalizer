import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';
import { NextButton, BackButton } from '../../components/OnboardNavButtons';
import { MonoText } from '../../components/StyledText';

export default class A8 extends React.Component {
  state = {
    selectedHours: 0,
    selectedMinutes: 0,
  }
  static navigationOptions = {
    header: null,
  };

  render() {
      const { selectedHours, selectedMinutes } = this.state;
      return (
          <View style={styles.container}>
              <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                  <View style={styles.welcomeContainer}>
                      <Image
                          source={
                              require('../../assets/images/robot-prod.png')
                          }
                          style={styles.welcomeImage}
                      />
                  </View>

                  <View style={styles.getStartedContainer}>
                      <Text style={styles.getStartedText}>At the same time each day, we’ll send a notification reminding you to take Action.</Text>
                      <Text style={styles.tabBarInfoText}>Choose a time after work when you are most likely to be at home. You can change this later or turn notifications off/on in Settings.</Text>
                  </View>

                  <View style={{marginTop: 10}}>
                      <TimePicker
                        selectedHours={selectedHours}
                        selectedMinutes={selectedMinutes}
                        onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                      />
                      <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main App Demo')}>
                          <Text style={styles.finishButton}>{"Finish Setup!"}</Text>
                        </TouchableOpacity>
                      </View>
                      <BackButton navigation={this.props.navigation}/>
                  </View>
              </ScrollView>
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
        justifyContent: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 30,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight:'bold',
    },
    finishButton: {
        color: '#6FCF97',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 25,
    },
    tabBarInfoText: {
        fontSize: 15,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
        marginVertical: 10,
    },
});
