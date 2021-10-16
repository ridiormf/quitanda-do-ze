import React from 'react';
import {ScrollView, TextInput} from 'react-native';
import ReactLogo from '../../../../assets/logos/react-logo.svg';
import Button from '../../../../components/Button';
import ErrorModal from '../../../../components/ErrorModal';
import {useLoginMount} from '../../controllers/loginControllers';
import {loginContainerStyles as styles} from '../styles/containersStyles';

export default function LoginContainer() {
  const {
    username,
    password,
    errorMessage,
    loading,
    setUsername,
    setPassword,
    onModalClose,
    onSubmitLogin,
  } = useLoginMount();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <ReactLogo width={150} height={150} />
      <TextInput
        placeholder="Email"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />
      <Button onPress={onSubmitLogin} loading={loading}>
        Entrar
      </Button>

      <ErrorModal
        title="Oops"
        message={errorMessage}
        visible={!!errorMessage}
        onClose={onModalClose}
      />
    </ScrollView>
  );
}
