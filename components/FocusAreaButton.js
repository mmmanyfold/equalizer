import React from 'react';
import { Button } from 'react-native-elements';
import { Platform } from 'react-native';

export const FocusAreaButton = (props) => (
  <Button
    onPress={() => {
      const { state: { params: { store }}} = props.navigation;
      const update = store.set('focusArea', props.id);
      const to = props.to || 'Main';
      props.navigation.navigate(to, {
        store: update
      });
    }}
    {...props}
    buttonStyle={{ ...Platform.select({ ios: { paddingBottom: 10, paddingTop: 15 } }) }}
    textStyle={{ textAlign: 'center' }}
    fontFamily={'cera'}
    fontSize={18}
  />
);
