import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {MD_SPACE} from '../../../../constants/metrics';

export default function CategoryItem({onPress, children, img}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 4,
    borderRadius: 12,
    backgroundColor: '#202020',
    width: 110,
    height: 110,
    marginHorizontal: MD_SPACE,
  },
  text: {
    color: Colors.white,
  },
});
