import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../pages/login/views/containers/LoginContainer';
import SearchListContainer from '../pages/searchList/views/containers/SearchListContainer';
import ItemPageContainer from '../pages/itemPage/views/containers/ItemPageContainer';
import {AuthenticationContext} from '../contexts/AuthenticationContext';
import FullLoading from '../components/FullLoading';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const [{auth, mounting}] = React.useContext(AuthenticationContext);
  return (
    <>
      {mounting ? null : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={auth ? 'SearchList' : 'Login'}>
            {!auth ? (
              <Stack.Screen
                name="Login"
                component={LoginContainer}
                options={{headerShown: false}}
              />
            ) : (
              <>
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
      <FullLoading visible={mounting} />
    </>
  );
};

export default NavigationStack;
