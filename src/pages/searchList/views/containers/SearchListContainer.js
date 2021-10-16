import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../../../../components/Header';
import {useSearchListMount} from '../../controllers/SearchListControllers';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import {searchListContainerStyles as styles} from '../styles/containersStyles';
import SearchIcon from '../../../../assets/icons/search-icon.svg';
import {Colors} from '../../../../constants/colors';
export default function SearchListContainer() {
  const {search, setSearch} = useSearchListMount();
  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.categoriesTitle}>Categorias</Text>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesContentContainer}>
            <CategoryItem>Legume</CategoryItem>
            <CategoryItem>Raizes</CategoryItem>
            <CategoryItem>Fruta</CategoryItem>
          </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          <SearchIcon width={28} height={28} fill={Colors.gray} />
          <TextInput
            placeholder="Buscar produtos..."
            inlineImageLeft="search_icon"
            value={search}
            style={styles.input}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.productsContainer}>
          <Text style={styles.productsTitle}>Produtos</Text>
          <View style={styles.productsItemsContainer}>
            <ProductItem value="R$ 2,75">Abacaxi</ProductItem>
            <ProductItem value="R$ 4,25">Maçã</ProductItem>
            <ProductItem value="R$ 2,75">Beterraba</ProductItem>
            <ProductItem value="R$ 2,75">Inhame</ProductItem>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
