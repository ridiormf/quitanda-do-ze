import React from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../constants/colors';

export default function FullLoading({visible}) {
  const {height: screenHeight, width} = useWindowDimensions();

  const fadeAnim = React.useRef(new Animated.Value(visible ? 1 : 0)).current;
  const [height, setHeight] = React.useState(visible ? screenHeight : 0);

  const fadeIn = React.useCallback(() => {
    setHeight(screenHeight, () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  }, [fadeAnim, screenHeight]);

  const fadeOut = React.useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setHeight(0);
    }, 500);
  }, [fadeAnim]);

  React.useEffect(() => {
    if (visible) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [visible, fadeIn, fadeOut]);

  return (
    <Animated.View
      style={{...styles.container, height, width, opacity: fadeAnim}}>
      <ActivityIndicator color={Colors.white} size={30} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBlue, // Should be splashScreen background color
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
  },
});
