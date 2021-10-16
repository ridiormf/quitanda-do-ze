import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors';

export default function ItemPageContainer() {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBlue,
  },
});
