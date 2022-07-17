import React, {type PropsWithChildren} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ProductCard} from '../../Components';
import image from '../../Assets/img/maquina.jpg';
import {CardObject} from '../../Components/ProductCard';
import { useProduct } from '../../Context/Product';

const list: CardObject[] = [
  {
    img: image,
    title: 'maquininha 1',
    value: '2.500,00',
  },
  {
    img: image,
    title: 'maquininha 2',
    value: '2.800,00',
  },
  {
    img: image,
    title: 'maquininha 3',
    value: '2.500,00',
  },
  {
    img: image,
    title: 'maquininha 4',
    value: '2.800,00',
  },
];

const ProductList = () => {

  const {manegeCart} = useProduct();
  return (

    <View>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        numColumns={2}
        data={list}
        renderItem={({item}) => (
          <ProductCard
            item={item}
            fnc={() => manegeCart(item)}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
