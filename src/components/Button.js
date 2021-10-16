import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../constants/colors';

export default function Button({loading, onPress, children, dark, style = {}}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...style,
        backgroundColor: dark ? Colors.mainBlue : Colors.white,
      }}
      activeOpacity={0.8}
      onPress={onPress}>
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
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 8,
    elevation: 10,
    marginTop: 24,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: Colors.mainBlue,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
