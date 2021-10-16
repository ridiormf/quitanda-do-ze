import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../../../../components/Header';
import {useSearchListMount} from '../../controllers/SearchListControllers';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import {searchListContainerStyles as styles} from '../styles/containersStyles';
import SearchIcon from '../../../../assets/icons/search-icon.svg';
import {Colors} from '../../../../constants/colors';
import ErrorModal from '../../../../components/ErrorModal';
import {PAGES} from '../../../../constants/keys';
import debounce from '../../../../utils/debounce';

export default function SearchListContainer({navigation}) {
  const {
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
  } = useSearchListMount();
  return (
    <>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loadingCategories || loadingProducts}
            onRefresh={onRefresh}
          />
        }
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.categoriesTitle}>Categorias</Text>
        <View>
          {loadingCategories ? (
            <View style={styles.categoriesLoadingContainer}>
              <ActivityIndicator size={30} />
            </View>
          ) : (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.categoriesContainer}
              contentContainerStyle={styles.categoriesContentContainer}>
              {categories.map(category => {
                const selected = category.id === filterCategory;
                return (
                  <CategoryItem
                    key={category.id}
                    img={category.img}
                    selected={selected}
                    onPress={() =>
                      setFilterCategory(selected ? null : category.id)
                    }>
                    {category.name}
                  </CategoryItem>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View style={styles.inputContainer}>
          <SearchIcon width={28} height={28} fill={Colors.gray} />
          <TextInput
            placeholder="Buscar produtos..."
            inlineImageLeft="search_icon"
            value={search}
            style={styles.input}
            onChangeText={value => {
              setSearch(value);
              debounce(() => searchProducts(value));
            }}
          />
        </View>
        <View style={styles.productsContainer}>
          <Text style={styles.productsTitle}>Produtos</Text>
          <View style={styles.productsItemsContainer}>
            {loadingProducts ? (
              <View style={styles.productsLoadingContainer}>
                <ActivityIndicator size={30} color={Colors.white} />
              </View>
            ) : (
              products.map(product => (
                <ProductItem
                  key={product.id}
                  value={`R$ ${product.price}`}
                  img={product.img}
                  onPress={() =>
                    navigation.navigate(PAGES.PROTECTED.ITEM_PAGE, product)
                  }>
                  {product.name}
                </ProductItem>
              ))
            )}
          </View>
        </View>
      </ScrollView>
      <ErrorModal
        visible={!!errorMessage}
        title="Oops"
        message={errorMessage}
        onClose={clearErrorMessage}
      />
    </>
  );
}
