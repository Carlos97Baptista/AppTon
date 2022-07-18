import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ProductList, ShoppingCart } from './Screens';

import { CardIcon } from './Components';
import { ProductProvider } from './Context/Product';




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

