import React, {type PropsWithChildren} from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HorizontalCard } from '../../Components';
import { useProduct } from '../../Context/Product';
const ShoppingCart = () => {
  const {cart , manegeCart} = useProduct();
  return (
<View>
<FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        data={cart}
        renderItem={({item}) => (
          <HorizontalCard
            item={item}
            fnc={() => manegeCart(item)}
          />
        )}
      />
</View>
  );
};

export default ShoppingCart;
