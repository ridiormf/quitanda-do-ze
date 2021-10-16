import React from 'react';
import SearchListContainer from '../pages/searchList/views/containers/SearchListContainer';
import ItemPageContainer from '../pages/itemPage/views/containers/ItemPageContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PAGES} from '../constants/keys';

const Stack = createNativeStackNavigator();

const ProtectedStack = () => {
  return (
    <Stack.Navigator initialRouteName={PAGES.PROTECTED.HOME}>
      <Stack.Screen
        name={PAGES.PROTECTED.HOME}
        component={SearchListContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PAGES.PROTECTED.ITEM_PAGE}
        component={ItemPageContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
