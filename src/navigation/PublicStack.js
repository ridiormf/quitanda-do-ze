import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../pages/login/views/containers/LoginContainer';

const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;
