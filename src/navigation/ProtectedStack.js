import React from 'react';
import SearchListContainer from '../pages/searchList/views/containers/SearchListContainer';
import ItemPageContainer from '../pages/itemPage/views/containers/ItemPageContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProtectedStack = () => {
  return (
    <Stack.Navigator initialRouteName="SearchList">
      <Stack.Screen
        name="SearchList"
        component={SearchListContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemPage"
        component={ItemPageContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
