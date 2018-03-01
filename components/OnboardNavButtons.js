import React from 'react';
import { Button } from 'react-native-elements';
// import UserRecord from '../stores/UserRecord';

export const NextButton = (props) => (
    <Button
        {...props}
        onPress={ async () => {
            // TODO: handle store creation when no store available
            if (props.saveAction) {
                try {
                    const store = await props.saveAction();
                    const save = await store.asyncSave(store);
                    props.navigation.navigate(props.to, {
                        store,
                    });
                    // console.log(store); // debugging
                } catch (e) {
                    console.log(e);
                }
                return;
            }
            props.navigation.navigate(props.to);
        }}
        title="Next"
        fontFamily={'cera'}
        buttonStyle={{ paddingBottom: 4, paddingTop: 9 }}
        color="#fff"
        backgroundColor="#ff3752"/>
);

export const BackButton = (props) => (
    <Button
        {...props}
        onPress={() => props.navigation.goBack()}
        title="Back"
        fontFamily={'cera'}
        buttonStyle={{ paddingBottom: 4, paddingTop: 9, borderWidth: 2, borderColor: '#204392' }}
        color="#204392"
        backgroundColor="#F2F2F2"/>
)
