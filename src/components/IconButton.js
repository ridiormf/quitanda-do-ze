import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

export default function IconButton({
  onPress,
  styles = {},
  iconSize = 28,
  iconColor,
  Icon,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...containerStyles.container, ...styles}}>
      <Icon width={iconSize} height={iconSize} fill={iconColor} />
    </TouchableOpacity>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 100,
    color: Colors.white,
  },
});
