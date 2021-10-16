import React from 'react';
import {login} from '../../../services/requests/login';

export const useLoginMount = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmitLogin = React.useCallback(async () => {
    setLoading(true);
    const error = await login(username, password);
    setLoading(false);
    setErrorMessage(error);
  }, [username, password]);

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
