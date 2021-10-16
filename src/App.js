/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from './pages/login/views/containers/LoginContainer';
import SearchListContainer from './pages/searchList/views/containers/SearchListContainer';
import ItemPageContainer from './pages/itemPage/views/containers/ItemPageContainer';

const Stack = createNativeStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{headerShown: false}}
        />
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
    </NavigationContainer>
  );

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>

  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

export default App;
