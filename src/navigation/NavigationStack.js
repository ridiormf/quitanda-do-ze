import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../contexts/AuthenticationContext';
import FullLoading from '../components/FullLoading';
import PublicStack from './PublicStack';
import ProtectedStack from './ProtectedStack';
import HomeProvider from '../contexts/HomeContext';

const NavigationStack = () => {
  const [{auth, mounting}] = React.useContext(AuthenticationContext);
  return (
    <>
      {mounting ? null : (
        <NavigationContainer>
          {!auth ? (
            <PublicStack />
          ) : (
            <HomeProvider>
              <ProtectedStack />
            </HomeProvider>
          )}
        </NavigationContainer>
      )}
      <FullLoading visible={mounting} />
    </>
  );
};

export default NavigationStack;
