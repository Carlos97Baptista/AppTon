import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ProductCard} from '../../Components';
import image from '../../Assets/img/maquina.jpg';
import {CardObject} from '../../Components/ProductCard';
import { useProduct } from '../../Context/Product';
import api from '../../Utils/api';
import { faLungs } from '@fortawesome/free-solid-svg-icons';
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
const [country, setCountry] = useState([])

  useEffect(() => {
    api
      .get("/v2/lang/pt")
      .then((response) => {setCountry(response.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
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
        data={country}
        renderItem={({item}) => (
          <ProductCard
            item={{img: item.flags.png, title: item.translations.br, value: item.area}}
            fnc={() => manegeCart({img: item.flags.png, title: item.translations.br, value: item.area})}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
