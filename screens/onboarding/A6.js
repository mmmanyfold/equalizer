import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import { NextButton, BackButton } from '../../components/OnboardNavButtons';
import { CeraText } from '../../components/StyledText';

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
              <View style={styles.contentContainer}>
                  <View style={styles.welcomeContainer}>
                      <Image
                          source={
                              require('../../assets/images/elf.png')
                          }
                          style={styles.welcomeImage}
                      />
                  </View>
                  <View style={styles.helpContainer}>
                      <CeraText style={styles.getStartedText}>{"What's your child's name (or nickname)?"}</CeraText>
                      <TextInput
                          style={styles.inputText}
                          onChangeText={this.handleNicknameInput.bind(this)}
                          value={this.state.userFirstName} />

                      <CeraText style={styles.getStartedText}>{"When was your child born?"}</CeraText>
                      <DatePicker
                          style={{width: 200, marginTop: 15}}
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
                                  marginLeft: 36,
                                  borderWidth: 1,
                                  borderColor: '#4F4F4F',
                                  backgroundColor: '#fff',
                              },
                          }}
                          onDateChange={(childDOB) => this.setState({ childDOB })}
                      />
                      <View style={{flexDirection: 'row', width: 280, justifyContent: 'space-between', marginTop: 30}}>
                        <BackButton navigation={this.props.navigation}/>
                        <NextButton
                          saveAction={this.saveAction.bind(this)}
                          disabled={ this.state.childNickname === ''}
                          navigation={this.props.navigation}
                          to={'A7'} />
                      </View>
                  </View>
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
        justifyContent: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 141,
        resizeMode: 'contain',
        marginTop: 3,
    },
    getStartedText: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        color: '#000',
        backgroundColor: '#fff',
        fontFamily: 'cera',
        width: 250,
        height: 40,
        borderColor: '#4F4F4F',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 25,
        textAlign: 'center'
    },
});
