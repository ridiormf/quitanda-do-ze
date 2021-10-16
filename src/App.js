import React from 'react';
import AuthenticationProvider from './contexts/AuthenticationContext';
import NavigationStack from './navigation/NavigationStack';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <AuthenticationProvider>
      <NavigationStack />
    </AuthenticationProvider>
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
