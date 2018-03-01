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

export default class A5 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleSelection(bool) {
    const { navigation } = this.props;
    const store = navigation.state.params.store.set('momWorksFromHome', bool);
    navigation.navigate('A6', {
        store,
    });
  }

    render() {
    const { navigation : { state : { params: { store } } } } = this.props;
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
            <CeraText style={styles.getStartedText}>{`Does ${store.momNickname} work from home?`}</CeraText>
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
            <View style={{flexDirection: 'row', width: 280, marginTop: 50}}>
              <BackButton navigation={this.props.navigation}/>
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
});
