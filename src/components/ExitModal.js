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
import {LG_SPACE, MD_FONT, MD_SPACE} from '../constants/metrics';
import TextButton from './TextButton';

export default function ExitModal({visible, onClose, onConfirmExit}) {
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
            <Text style={styles.title}>Sair</Text>
            <View style={styles.divider}></View>
            <Text>Tem certeza que deseja sair?</Text>
            <View style={styles.buttonsContainer}>
              <TextButton onPress={onClose} style={styles.button} dark>
                Cancelar
              </TextButton>
              <TextButton onPress={onConfirmExit} style={styles.button} dark>
                Sim, desejo sair
              </TextButton>
            </View>
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'stretch',
    padding: LG_SPACE,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.darkOpacity,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  contentContainer: {
    padding: MD_SPACE,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: MD_SPACE,
    fontSize: MD_FONT,
  },
  divider: {
    height: 1,
    marginBottom: MD_SPACE,
    backgroundColor: Colors.darkOpacity,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'flex-end',
  },
});
