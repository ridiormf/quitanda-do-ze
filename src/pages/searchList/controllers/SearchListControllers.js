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
    {
      clearErrorMessage,
      setFilterCategory,
      onRefresh,
      setSearch,
      searchProducts,
    },
  ] = React.useContext(HomeContext);

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
    searchProducts,
  };
};
