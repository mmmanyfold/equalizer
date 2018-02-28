import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

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
              <Text style={styles.headerTitle}>Choose a Focus Area</Text>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.focusAreasContainer}>
            <Text style={styles.focusAreasText}>{"Each week, you'll be prompted to select a new Focus Area, or continue with the same one - it's completely up to you."}</Text>
            <View style={styles.focusAreaSelection}>
              <View style={styles.focusAreaButton}>
                <Button
                  navigation={this.props.navigation}
                  id={"BabyHealthAndHygiene"}
                  title={"Baby Health & Hygiene"}
                  color={"#F2C94C"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <Button
                  navigation={this.props.navigation}
                  id={"BabyDevelopment"}
                  title={"Baby Development"}
                  color={"#2D9CDB"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <Button
                  navigation={this.props.navigation}
                  id={"HouseholdChores"}
                  title={"Household Chores"}
                  color={"#27AE60"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <Button
                  navigation={this.props.navigation}
                  id={"SchedulesAndCommunication"}
                  title={"Schedules & Communication"}
                  color={"#BB6BD9"}/>
              </View>
              <View style={styles.focusAreaButton}>
                <Button
                  navigation={this.props.navigation}
                  id={"EmotionalSupport"}
                  title={"Emotional Support"}
                  color={"#F2994A"}/>
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
  welcomeContainer: {
    alignItems: 'center',
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
    marginBottom: 20,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginLeft: -10,
  },
  focusAreasContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  focusAreasText: {
    textAlign: 'center',
  },
  focusAreaSelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  focusAreaButton: {
    width: '47%',
    marginBottom: 20,
  },
});
