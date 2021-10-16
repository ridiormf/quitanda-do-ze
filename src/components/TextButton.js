import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../constants/colors';
import {LG_SPACE, MD_FONT} from '../constants/metrics';

export default function TextButton({
  loading,
  onPress,
  children,
  dark,
  style = {},
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...style,
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        style={{
          ...styles.buttonText,
          color: dark ? Colors.mainBlue : Colors.white,
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
    marginTop: LG_SPACE,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: MD_FONT,
    fontWeight: 'bold',
  },
});
