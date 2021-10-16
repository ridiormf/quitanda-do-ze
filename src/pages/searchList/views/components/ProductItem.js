import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  View,
} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {MD_SPACE} from '../../../../constants/metrics';

export default function ProductItem({onPress, children, value, img}) {
  const {width: screenWidth} = useWindowDimensions();
  const size = React.useMemo(
    () => screenWidth / 2 - MD_SPACE * 2.5,
    [screenWidth],
  );
  return (
    <TouchableOpacity
      style={{...styles.container, width: size, height: size}}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{children}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: MD_SPACE,
    borderRadius: 16,
    backgroundColor: '#202020',
    overflow: 'hidden',
  },
  contentContainer: {
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    color: Colors.white,
  },
  value: {
    color: Colors.white,
    alignSelf: 'flex-end',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
