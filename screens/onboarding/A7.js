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

import { BackButton, NextButton } from "../../components/OnboardNavButtons";

export default class A7 extends React.Component {
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
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                require('../../assets/images/robot-prod.png')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View style={styles.helpContainer}>
                        <Text style={styles.getStartedText}>{"Does anyone help you and your partner with the care of your child?"}</Text>
                        <Text style={styles.getStartedText}>{"Check all that apply:"}</Text>

                        <View>
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
                           <Text>Nanny</Text>
                        </View>

                        <View>
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
                            <Text>Family member(s)</Text>
                        </View>

                        <View>
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
                            <Text>Friend(s)</Text>
                        </View>

                        <NextButton
                            navigation={this.props.navigation}
                            saveAction={this.saveAction.bind(this)}
                            to={"A8"}
                        />

                        <BackButton navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
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
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        fontWeight:'bold',
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
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        // alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
