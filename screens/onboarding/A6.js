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

import DatePicker from 'react-native-datepicker'
import { NextButton, BackButton } from '../../components/OnboardNavButtons';
import { MonoText } from '../../components/StyledText';

export default class A6 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
      childNickname: '',
      childDOB: '2017-02-25',
  };

  handleNicknameInput(childNickname) {
     this.setState({ childNickname });
  }

  saveAction() {
      const { navigation : { state : { params: { store } } } } = this.props;
      const update = store.set('childNickname', this.state.childNickname);
      const update2 = update.set('childDOB', this.state.childDOB);
      return Promise.resolve(update2);
  }

  render() {
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
                  <View style={styles.helpContainer}>
                      <Text style={styles.getStartedText}>{"What's your child's name (or nickname)?"}</Text>
                      <TextInput
                          style={styles.inputText}
                          onChangeText={this.handleNicknameInput.bind(this)}
                          value={this.state.userFirstName} />

                      <Text style={styles.getStartedText}>{"When was your child born?"}</Text>
                      <DatePicker
                          style={{width: 200, marginTop: 20}}
                          date={this.state.childDOB}
                          mode="date"
                          placeholder="select date"
                          format="YYYY-MM-DD"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                              dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                              },
                              dateInput: {
                                  marginLeft: 36
                              },
                          }}
                          onDateChange={(childDOB) => this.setState({ childDOB })}
                      />
                      <View style={{flexDirection: 'row', width: 250, justifyContent: 'space-between', marginTop: 30}}>
                        <BackButton navigation={this.props.navigation}/>
                        <NextButton
                          saveAction={this.saveAction.bind(this)}
                          disabled={ this.state.childNickname === ''}
                          navigation={this.props.navigation}
                          to={'A7'} />
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
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
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
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        color: '#56CCF2',
        fontWeight: 'bold',
        width: 250,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 20,
        textAlign: 'center'
    },
});
