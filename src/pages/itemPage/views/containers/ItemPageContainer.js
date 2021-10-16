import React from 'react';
import {ScrollView, Image, View, Text, useWindowDimensions} from 'react-native';
import {Colors} from '../../../../constants/colors';

import IconButton from '../../../../components/IconButton';
import ArrowLeft from '../../../../assets/icons/arrow-left.svg';
import CartIcon from '../../../../assets/icons/cart-outline.svg';
import {itemPageContainerStyles as styles} from '../styles/containersStyles';
import {XL_SPACE} from '../../../../constants/metrics';

export default function ItemPageContainer({route, navigation}) {
  const {width} = useWindowDimensions();
  const product = route.params;
  return (
    <>
      <ScrollView style={styles.container}>
        <Image
          style={{...styles.img, width}}
          source={{
            uri: product.img,
          }}
        />
        <View style={styles.imgInfos}>
          <IconButton
            styles={styles.iconButton}
            Icon={ArrowLeft}
            onPress={() => navigation.goBack()}
            iconColor={Colors.white}
          />
          <Text style={styles.title}>{product.name}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentRow}>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Preço</Text>
              <Text>{`R$ ${product.price}`}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>Unidade</Text>
              <Text>{product.unit}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Descrição</Text>
            <Text>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <IconButton
        styles={styles.cartButton}
        Icon={CartIcon}
        onPress={() => {}}
        iconSize={XL_SPACE}
        iconColor={Colors.white}
      />
    </>
  );
}
