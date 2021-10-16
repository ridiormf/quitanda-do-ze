import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ExitToApp from '../assets/icons/exit-to-app.svg';
import {HEADER_SIZE, LG_FONT, LG_SPACE} from '../constants/metrics';
import {Colors} from '../constants/colors';
import IconButton from './IconButton';
import ExitModal from './ExitModal';
import {AuthenticationContext} from '../contexts/AuthenticationContext';

export default function Header() {
  const [, {setAuthentication}] = React.useContext(AuthenticationContext);
  const [exitVisible, setExitVisible] = React.useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Quitanda do Zé</Text>
        <IconButton
          Icon={ExitToApp}
          onPress={() => setExitVisible(true)}
          iconColor={Colors.white}
        />
      </View>
      <ExitModal
        visible={exitVisible}
        onClose={() => setExitVisible(false)}
        onConfirmExit={() => {
          setExitVisible(false);
          setAuthentication(null);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEADER_SIZE,
    paddingHorizontal: LG_SPACE,
    elevation: 5,
    backgroundColor: Colors.mainBlue,
  },
  title: {
    fontSize: LG_FONT,
    color: Colors.white,
  },
});
