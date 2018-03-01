import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { CeraText } from '../../components/StyledText';
import { NextButton, BackButton } from '../../components/OnboardNavButtons';

export default class A2 extends React.Component {
  state = {
    momNickname: '',
  };

  static navigationOptions = {
    header: null,
  };

  handleTextInput(momNickname){
      this.setState({ momNickname });
  }

  async saveAction() {
    const { navigation : { state : { params: { store } } } } = this.props;
    try {
        const newRecord = store.set('momNickname', this.state.momNickname);
        const update = store.merge(newRecord);
        await store.asyncSave(update);
        return update;
    } catch (e) {
        console.log(e);
    }
  }

  render() {
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

          <View style={styles.helpContainer}>
            <CeraText style={styles.getStartedText}>{"What's the child's mom's first name (or nickname)?"}</CeraText>
            <TextInput
              style={styles.inputText}
              onChangeText={this.handleTextInput.bind(this)}
              value={this.state.momNickname} />
            <View style={{flexDirection: 'row', width: 280, justifyContent: 'space-between', marginTop: 20}}>
              <BackButton navigation={this.props.navigation}/>
              <NextButton
                saveAction={this.saveAction.bind(this)}
                disabled={this.state.momNickname === ''}
                navigation={this.props.navigation}
                to={'A3'} />
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
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
    marginTop: 20,
    textAlign: 'center'
  },
});
