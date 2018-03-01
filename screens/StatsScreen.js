import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CeraText } from '../components/StyledText';

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <View>
              <CeraText style={styles.headerTitle}>ACTION STATS</CeraText>
            </View>
          </View>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/stats.png')}
              style={styles.welcomeImage}
            />
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
    backgroundColor: '#204392',
  },
  headerTitle: {
    fontSize: 21,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeImage: {
    width: 400,
    height: 785,
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
    width: '100%',
    marginBottom: 25,
  },
});
