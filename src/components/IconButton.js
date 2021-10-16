import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

export default function IconButton({onPress, iconColor, Icon}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <Icon width={28} height={28} fill={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 100,
    color: Colors.white,
  },
});
