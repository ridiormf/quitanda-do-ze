import React from 'react';

export const useSearchListMount = () => {
  const [search, setSearch] = React.useState('');
  //   const [password, setPassword] = React.useState('');
  //   const [errorMessage, setErrorMessage] = React.useState(null);
  //   const [loading, setLoading] = React.useState(false);

  //   const [, {setAuthentication}] = React.useContext(AuthenticationContext);

  //   const onSubmitLogin = React.useCallback(async () => {
  //     setLoading(true);
  //     const {error, auth} = await login(username, password);
  //     setLoading(false);
  //     setErrorMessage(error);
  //     if (!error) {
  //       setAuthentication(auth);
  //     }
  //   }, [username, password, setAuthentication]);

  //   const onModalClose = () => setErrorMessage(null);

  return {
    search,
    setSearch,
    // errorMessage,
    // loading,
    // setUsername,
    // setPassword,
    // onModalClose,
    // onSubmitLogin,
  };
};
