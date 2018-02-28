import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    CheckBox,
    Switch,
} from 'react-native';
import { CeraText } from '../../components/StyledText';
import { BackButton, NextButton } from "../../components/OnboardNavButtons";

export default class A7 extends React.Component {
    static navigationOptions = {
      header: null,
    };

    state = { // otherCaregivers
        nanny: false,
        familyMember: false,
        friend: false,
    };

    handleValueChange(key, value) {
        this.setState((state) => {
            return {
                ...state,
                [key]: value,
            };
        })
    }

    saveAction() {
        const { navigation : { state : { params: { store } } } } = this.props;
        const update = store.set('otherCaregivers', this.state);
        return Promise.resolve(update);
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
                        <CeraText style={styles.getStartedText}>{`Does anyone help you and ${store.momNickname} with ${store.childNickname}'s care?`}</CeraText>
                        <CeraText style={{marginVertical: 20}}>{"Select all that apply:"}</CeraText>
                        <View style={{flexDirection: 'column'}}>
                          <View style={styles.selectionWrapper}>
                             { Platform.OS === 'ios' ?
                              <Switch
                                  value={this.state.nanny}
                                  onValueChange={this.handleValueChange.bind(this, 'nanny')}
                              />
                              :
                              <CheckBox
                                value={this.state.nanny}
                                onValueChange={this.handleValueChange.bind(this, 'nanny')}
                              />
                             }
                             <CeraText style={styles.selectionText}>Nanny</CeraText>
                          </View>

                          <View style={styles.selectionWrapper}>
                              { Platform.OS === 'ios' ?
                                  <Switch
                                      value={this.state.familyMember}
                                      onValueChange={this.handleValueChange.bind(this, 'familyMember')}
                                  />
                                  :
                                  <CheckBox
                                      value={this.state.familyMember}
                                      onValueChange={this.handleValueChange.bind(this, 'familyMember')}
                                  />
                              }
                              <CeraText style={styles.selectionText}>Family member(s)</CeraText>
                          </View>

                          <View style={styles.selectionWrapper}>
                              { Platform.OS === 'ios' ?
                                  <Switch
                                      value={this.state.friend}
                                      onValueChange={this.handleValueChange.bind(this, 'friend')}
                                  />
                                  :
                                  <CheckBox
                                      value={this.state.friend}
                                      onValueChange={this.handleValueChange.bind(this, 'friend')}
                                  />
                              }
                              <CeraText style={styles.selectionText}>Friend(s)</CeraText>
                          </View>
                        </View>

                        <View style={{flexDirection: 'row', width: 250, justifyContent: 'space-between', marginTop: 30}}>
                          <BackButton navigation={this.props.navigation}/>
                          <NextButton
                              navigation={this.props.navigation}
                              saveAction={this.saveAction.bind(this)}
                              to={"Tour1"}
                          />
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
        marginHorizontal: 30,
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
    selectionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    selectionText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        marginLeft: 10,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
});
