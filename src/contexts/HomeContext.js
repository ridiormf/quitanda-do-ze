import React from 'react';
import {getCategories} from '../services/requests/getCategories';
import {getProducts} from '../services/requests/getProducts';
import {searchProduct} from '../services/requests/searchProduct';
import debounce from '../utils/debounce';

export const HomeContext = React.createContext({});

export default function HomeProvider({children}) {
  const [categories, setCategories] = React.useState([]);
  const [loadingCategories, setLoadingCategories] = React.useState(true);
  const [categoriesError, setCategoriesError] = React.useState(null);

  const [products, setProducts] = React.useState([]);
  const [loadingProducts, setLoadingProducts] = React.useState(true);
  const [productsError, setProductsError] = React.useState(null);

  const [filterCategory, setFilterCategory] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const getListCategories = async () => {
    setLoadingCategories(true);
    const {error, categories: respCategories} = await getCategories();
    setLoadingCategories(false);
    setCategories(respCategories ?? []);
    setCategoriesError(error ?? null);
  };

  const getListProducts = async searchValue => {
    setLoadingProducts(true);
    const request = searchValue ? searchProduct : getProducts;
    const {error, products: respProducts} = await request(searchValue);
    setLoadingProducts(false);
    setProducts(respProducts ?? []);
    setProductsError(error ?? null);
  };

  const getLists = React.useCallback(
    refreshing => {
      if (refreshing) {
        getListCategories();
        getListProducts();
      } else {
        if (!categories?.length) {
          getListCategories();
        }
        if (!products?.length) {
          getListProducts();
        }
      }
    },
    [categories, products],
  );

  React.useEffect(() => {
    getLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => debounce(() => getListProducts(search)), [search]);

  const clearErrorMessage = () => {
    setCategoriesError(null);
    setProductsError(null);
  };

  const filteredProducts = React.useMemo(() => {
    let productsToFilter = Array.isArray(products)
      ? products
      : Object.values(products);

    if (filterCategory) {
      return productsToFilter.filter(
        product => product.category_id === filterCategory,
      );
    }
    return productsToFilter;
  }, [filterCategory, products]);
  return (
    <HomeContext.Provider
      value={[
        {
          categories: categories,
          loadingCategories,
          categoriesError,
          products: filteredProducts,
          filterCategory,
          loadingProducts,
          productsError,
          search,
          // loadingProducts,
          // productsError,
        },
        {
          onRefresh: () => getLists(true),
          clearErrorMessage,
          setFilterCategory,
          setSearch,
        },
      ]}>
      {children}
    </HomeContext.Provider>
  );
}
