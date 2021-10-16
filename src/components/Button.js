import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../constants/colors';
import {LG_SPACE, MD_FONT} from '../constants/metrics';

export default function Button({loading, onPress, children, dark, style = {}}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...style,
        backgroundColor: dark ? Colors.mainBlue : Colors.white,
      }}
      activeOpacity={0.8}
      onPress={loading ? null : onPress}>
      <Text
        style={{
          ...styles.buttonText,
          color: dark ? Colors.white : Colors.mainBlue,
        }}>
        {loading ? <ActivityIndicator /> : children}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    elevation: 10,
    marginTop: LG_SPACE,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: MD_FONT,
    fontWeight: 'bold',
  },
});
