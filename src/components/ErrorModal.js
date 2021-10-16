import React from 'react';
import {
  Modal,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {Colors} from '../constants/colors';
import Button from './Button';

export default function ErrorModal({title, message, visible, onClose}) {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      onDismiss={onClose}
      transparent>
      <Pressable style={styles.modal} onPress={onClose}>
        <View>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{message}</Text>
            <Button onPress={onClose} style={styles.button} dark>
              OK
            </Button>
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'stretch',
    padding: 24,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#00000030',
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  contentContainer: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    alignSelf: 'flex-end',
  },
});
