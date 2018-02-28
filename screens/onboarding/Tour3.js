import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { FocusAreaButton } from '../../components/FocusAreaButton';
import { CeraText } from '../../components/StyledText';

export default class Tour3 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <View>
              <CeraText style={styles.headerTitle}>Choose a Focus Area</CeraText>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../../assets/images/logo-circle-black.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.focusAreasContainer}>
            <CeraText style={styles.focusAreasText}>{"Each week, you'll be prompted to select a new Focus Area, or continue with the same one - it's completely up to you."}</CeraText>
            <View style={styles.focusAreaSelection}>
              <View style={styles.focusAreaButton}>
                <FocusAreaButton
                  to={'Tour4'}
                  navigation={this.props.navigation}
                  id={"BabyHealthAndHygiene"}
                  title={"Baby Health & Hygiene"}
                  backgroundColor={"#ff3752"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <FocusAreaButton
                  to={'Tour4'}
                  navigation={this.props.navigation}
                  id={"BabyDevelopment"}
                  title={"Baby Development"}
                  backgroundColor={"#204392"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <FocusAreaButton
                  to={'Tour4'}
                  navigation={this.props.navigation}
                  id={"HouseholdChores"}
                  title={"Household Chores"}
                  backgroundColor={"#f68a4f"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <FocusAreaButton
                  to={'Tour4'}
                  navigation={this.props.navigation}
                  id={"SchedulesAndCommunication"}
                  title={"Schedules & Communication"}
                  backgroundColor={"#3cbb8b"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <FocusAreaButton
                  to={'Tour4'}
                  navigation={this.props.navigation}
                  id={"EmotionalSupport"}
                  title={"Emotional Support"}
                  backgroundColor={"#bc9fca"}/>
              </View>
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
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
    }),
    marginBottom: 30,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  focusAreasContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  focusAreasText: {
    textAlign: 'center',
  },
  focusAreaSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  focusAreaButton: {
    width: '50%',
    marginBottom: 27,
  },
});
