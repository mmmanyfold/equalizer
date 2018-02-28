import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { CeraText } from '../../components/StyledText';
import { BackButton } from '../../components/OnboardNavButtons';

export default class A3 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleSelection(bool) {
    const { navigation } = this.props;
    const store = navigation.state.params.store.set('liveTogether', bool);
    navigation.navigate('A4', {
      store,
    });
  }

  render() {
    const { navigation : { state : { params: { store } } } } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.helpContainer}>
            <CeraText style={styles.getStartedText}>{`Do you and ${store.momNickname} live together?`}</CeraText>
            <View style={{flexDirection: 'row', width: 130, justifyContent: 'space-between', marginTop: 20}}>
              <Button onPress={() => this.handleSelection(true)}
                      title="Yes"
                      color="#6FCF97"/>
              <Button onPress={() => this.handleSelection(false)}
                      title="No"
                      color="#56CCF2"/>
            </View>
            <View style={{flexDirection: 'row', width: 250, marginTop: 50}}>
              <BackButton navigation={this.props.navigation}/>
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
});
