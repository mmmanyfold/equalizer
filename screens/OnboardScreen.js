import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { CeraText } from '../components/StyledText';

export default class OnboardScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <CeraText style={styles.titleText}>Equalizer</CeraText>
          </View>

          <View style={styles.helpContainer}>
            <CeraText style={styles.getStartedText}>I want to...</CeraText>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => this.props.navigation.navigate('A1')}
                      title="Learn how to help my partner"
                      color="#6FCF97"/>
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => this.props.navigation.navigate('A1')}
                      title="Help my partner help me"
                      disabled={true}
                      color="lightgray">
              </Button>
              <CeraText style={{color:"lightgray",textAlign: 'center'}}>(coming soon)</CeraText>
            </View>
          </View>
        </View>
        <View style={styles.tabBarInfoContainer}>
          <CeraText style={styles.getStartedText}>{"* Próximamente en español."}</CeraText>
          <CeraText style={styles.getStartedText}>{"(Coming soon in Spanish)"}</CeraText>
        </View>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
  titleText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#56CCF2',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
});
