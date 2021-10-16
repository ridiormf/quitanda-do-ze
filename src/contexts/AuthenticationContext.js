import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useConstructor} from '../utils/hooks';
import {AUTH} from '../constants/keys';

export const AuthenticationContext = React.createContext({});

export default function AuthenticationProvider({children}) {
  const [auth, setAuth] = React.useState(null);
  const [mounting, setMounting] = React.useState(true);

  useConstructor(async () => {
    const storage = await AsyncStorage.getItem(AUTH);
    if (storage) {
      setAuth(storage);
    }
    setMounting(false);
  });

  const setAuthentication = newAuth => {
    if (newAuth) {
      AsyncStorage.setItem(AUTH, newAuth);
      setAuth(newAuth);
    } else {
      AsyncStorage.removeItem(AUTH);
      setAuth(null);
    }
  };
  return (
    <AuthenticationContext.Provider
      value={[
        {
          auth,
          mounting,
        },
        {
          setAuthentication,
        },
      ]}>
      {children}
    </AuthenticationContext.Provider>
  );
}
