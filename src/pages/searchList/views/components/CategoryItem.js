import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {MD_SPACE} from '../../../../constants/metrics';

export default function CategoryItem({onPress, selected, children, img}) {
  console.log({selected});
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image
        style={{...styles.img, opacity: selected ? 0.3 : 1}}
        source={{
          uri: img,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#202020',
    width: 110,
    height: 110,
    overflow: 'hidden',
    marginHorizontal: MD_SPACE,
  },
  contentContainer: {
    padding: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    color: Colors.white,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
