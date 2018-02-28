import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CeraText } from '../../components/StyledText';
import { BackButton } from '../../components/OnboardNavButtons';
import { Button } from 'react-native-elements';

export default class A4 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleSelection(bool) {
      const { navigation } = this.props;
      const store = navigation.state.params.store.set('userWorksFromHome', bool);
      navigation.navigate('A5', {
          store,
      });
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
            <CeraText style={styles.getStartedText}>{"Do you work from home?"}</CeraText>
            <View style={{flexDirection: 'row', width: 170, justifyContent: 'space-between', marginTop: 20}}>
              <Button onPress={() => this.handleSelection(true)}
                      title="Yes"
                      buttonStyle={{ paddingBottom: 4, paddingTop: 9 }}
                      fontFamily={'cera'}
                      color="#fff"
                      backgroundColor="#ff3752"/>
              <Button onPress={() => this.handleSelection(false)}
                      title="No"
                      buttonStyle={{ paddingBottom: 4, paddingTop: 9 }}
                      fontFamily={'cera'}
                      color="#fff"
                      backgroundColor="#204392"/>
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
    height: 141,
    resizeMode: 'contain',
    marginTop: 3,
  },
  getStartedText: {
    fontSize: 17,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});
