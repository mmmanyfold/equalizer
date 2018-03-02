import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import TimePicker from 'react-native-simple-time-picker';
import { CeraText } from '../../components/StyledText';
import { BackButton } from '../../components/OnboardNavButtons';

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
                              require('../../assets/images/elf.png')
                          }
                          style={styles.welcomeImage}
                      />
                  </View>

                  <View style={styles.getStartedContainer}>
                      <CeraText style={styles.getStartedText}>At the same time each day, we’ll send a notification reminding you to take Action.</CeraText>
                      <CeraText style={styles.tabBarInfoText}>Choose a time after work when you are most likely to be at home. You can change this later or turn notifications off/on in Settings.</CeraText>
                  </View>

                  <View style={{marginTop: 10}}>
                      <TimePicker
                        selectedHours={selectedHours}
                        selectedMinutes={selectedMinutes}
                        onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                      />
                      <View>
                        <TouchableOpacity
                          style={{ marginTop: 30 }}
                          onPress={() => this.props.navigation.navigate('Main App Demo')}>
                          <CeraText style={styles.finishButton}>{"Finish Setup!"}</CeraText>
                        </TouchableOpacity>
                      </View>
                  </View>
              </ScrollView>
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
        justifyContent: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 141,
        resizeMode: 'contain',
        marginTop: 3,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 30,
    },
    getStartedText: {
        fontSize: 19,
        color: '#000',
        textAlign: 'center',
    },
    finishButton: {
        color: '#54489d',
        fontSize: 35,
        textAlign: 'center',
    },
    tabBarInfoText: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
        marginVertical: 10,
    },
});
