import React from 'react';
import {HomeContext} from '../../../contexts/HomeContext';

export const useSearchListMount = () => {
  const [
    {
      categories,
      loadingCategories,
      categoriesError,
      products,
      loadingProducts,
      productsError,
      filterCategory,
      search,
    },
    {clearErrorMessage, setFilterCategory, onRefresh, setSearch},
  ] = React.useContext(HomeContext);
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

  const errorMessage = React.useMemo(() => {
    let result = '';
    if (categoriesError) {
      result = categoriesError;
    }
    if (productsError) {
      if (result) {
        result += `\n\n${productsError}`;
      } else {
        result = productsError;
      }
    }
    return result;
  }, [categoriesError, productsError]);

  return {
    search,
    setSearch,
    errorMessage,
    clearErrorMessage,
    categories,
    loadingCategories,
    products,
    loadingProducts,
    setFilterCategory,
    filterCategory,
    onRefresh,
  };
};
