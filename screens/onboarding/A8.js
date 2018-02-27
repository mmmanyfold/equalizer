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
                      <Text style={styles.getStartedText}>At the same time each day, we’ll send a notification reminding you to choose an Action.</Text>
                      <Text style={styles.tabBarInfoText}>Pick a time after work when you are likely to be at home. (You can always change this later in your Settings.)</Text>
                  </View>

                  <View style={styles.helpContainer}>
                      <TimePicker
                        selectedHours={selectedHours}
                        selectedMinutes={selectedMinutes}
                        onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                      />

                      <Button
                        onPress={() => this.props.navigation.navigate('Main App Demo')}
                        title="Finish Setup!"
                        color="#6FCF97"
                      />
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
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
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
        marginHorizontal: 50,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight:'bold',
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
});
