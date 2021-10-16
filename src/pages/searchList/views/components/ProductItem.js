import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {LG_SPACE, MD_SPACE} from '../../../../constants/metrics';

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
      <Text style={styles.text}>{children}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginVertical: MD_SPACE,
    borderRadius: 16,
    backgroundColor: '#202020',
  },
  text: {
    color: Colors.white,
  },
  value: {
    color: Colors.white,
    alignSelf: 'flex-end',
  },
});
