import React from 'react';
import {AuthenticationContext} from '../../../contexts/AuthenticationContext';
import {login} from '../../../services/requests/login';

export const useLoginMount = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [, {setAuthentication}] = React.useContext(AuthenticationContext);

  const onSubmitLogin = React.useCallback(async () => {
    if (!username || !password) {
      setErrorMessage('Preencha seu email e senha antes de prosseguir.');
      return;
    }
    setLoading(true);
    const {error, auth} = await login(username, password);
    setLoading(false);
    setErrorMessage(error);
    if (!error) {
      setAuthentication(auth);
    }
  }, [username, password, setAuthentication]);

  const onModalClose = () => setErrorMessage(null);

  return {
    username,
    password,
    errorMessage,
    loading,
    setUsername,
    setPassword,
    onModalClose,
    onSubmitLogin,
  };
};
