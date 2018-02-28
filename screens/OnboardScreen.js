import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { CeraText, CeraTextBold, CeraTextItalic } from '../components/StyledText';

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
                require('../assets/images/logo-circle-blue-white.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <CeraTextBold style={styles.titleText}>Equalizer</CeraTextBold>
          </View>

          <View style={styles.helpContainer}>
            <CeraText style={styles.getStartedText}>I want to...</CeraText>
            <View style={styles.buttonWrapper}>

              <Button onPress={() => this.props.navigation.navigate('A1')}
                      fontFamily={'cera'}
                      title="Help my partner"
                      color="#fff"
                      buttonStyle={{ paddingBottom: 4, paddingTop: 9 }}
                      backgroundColor="#ff3752"/>
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => this.props.navigation.navigate('A1')}
                      fontFamily={'cera'}
                      buttonStyle={{ paddingBottom: 4, paddingTop: 9 }}
                      title="Help my partner help me"
                      disabled={true}
                      color="#fff">
              </Button>
              <CeraText style={{ color:"lightgray", textAlign: 'center', marginTop: 10 }}>
                (coming soon)
              </CeraText>
            </View>
          </View>
        </View>
        <View style={styles.tabBarInfoContainer}>
          <CeraText style={styles.getStartedText}>{"*Próximamente en español."}</CeraText>
          <CeraTextItalic style={styles.getStartedText}>{"Coming soon in Spanish"}</CeraTextItalic>
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
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  titleText: {
    fontSize: 38,
    color: '#ff3752',
    letterSpacing: 1.2,
  },
  getStartedText: {
    fontSize: 17,
    color: '#000',
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 5,
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
    color: '#000',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
});
