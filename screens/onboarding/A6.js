import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import { NextButton, BackButton } from '../../components/OnboardNavButtons';
import { MonoText } from '../../components/StyledText';

export default class A6 extends React.Component {

    state = {
        childNickname: '',
        childDOB: '2017-02-25',
    };

    handleNicknameInput(childNickname) {
       this.setState({ childNickname });
    }

    saveAction() {
        const { navigation : { state : { params: { store } } } } = this.props;
        const update = store.set('childNickname', this.state.childNickname);
        const update2 = update.set('childDOB', this.state.childDOB);
        return Promise.resolve(update2);
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

                    <View style={styles.getStartedContainer}>
                        <MonoText>Please enter the following information about your child</MonoText>
                    </View>

                    <View style={styles.helpContainer}>

                        <Text style={styles.getStartedText}>{"Child's name or nickname:"}</Text>

                        <TextInput
                            style={{width: 250, height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={this.handleNicknameInput.bind(this)}
                            value={this.state.userFirstName} />

                        <Text style={styles.getStartedText}>{"Child's Date of Birth:"}</Text>

                        <DatePicker
                            style={{width: 200}}
                            date={this.state.childDOB}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                },
                            }}
                            onDateChange={(childDOB) => this.setState({ childDOB })}
                        />

                        <NextButton
                          saveAction={this.saveAction.bind(this)}
                          disabled={ this.state.childNickname === ''}
                          navigation={this.props.navigation}
                          to={'A7'} />
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
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
