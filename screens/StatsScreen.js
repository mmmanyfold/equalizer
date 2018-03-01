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
              source={require('../assets/images/stats-preview.png')}
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
    backgroundColor: '#54489d',
  },
  headerTitle: {
    fontSize: 21,
    color: '#fff',
    marginHorizontal: 10,
  },
  welcomeContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcomeImage: {
    width: 450,
    height: 535,
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
