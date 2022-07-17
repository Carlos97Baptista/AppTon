import React, {useEffect, type PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShoppingCart, ProductList} from './Screens';

import { ProductProvider } from './Context/Product';
import { CardIcon } from './Components';




const Stack = createNativeStackNavigator();
const App = () => {

  return(
    <NavigationContainer>
      <ProductProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          options={({navigation, route}) => ({
            headerTitle: props => <></>,
            headerRight: () => (
              <CardIcon  />
            ),
          })}
          component={ProductList}
        />
        <Stack.Screen name="Cart"  options={{
            headerTitle: props => <></>,}} component={ShoppingCart} />
      </Stack.Navigator>
      </ProductProvider>
    </NavigationContainer>
  );
};

export default App;

