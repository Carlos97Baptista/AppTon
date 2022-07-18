import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ProductCard } from '../../Components';
import { CardObject } from '../../Components/ProductCard';
import { useProduct } from '../../Context/Product';
import api from '../../Utils/api';

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
