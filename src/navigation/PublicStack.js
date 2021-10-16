import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../pages/login/views/containers/LoginContainer';
import {PAGES} from '../constants/keys';

const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator initialRouteName={PAGES.PUBLIC.LOGIN}>
      <Stack.Screen
        name={PAGES.PUBLIC.LOGIN}
        component={LoginContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;
