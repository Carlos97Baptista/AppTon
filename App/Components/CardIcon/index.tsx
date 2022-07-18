import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useProduct } from '../../Context/Product';

const CardIcon = () => {
    const navigation = useNavigation()
    const {cart} = useProduct();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
    <NumItems><TextNum>{cart.length > 9 ? "+9" : cart.length}</TextNum></NumItems>
    <FontAwesomeIcon icon={faCartShopping} color="#5CEEA8" size={28}/>
  </TouchableOpacity>
  );
};

export default CardIcon;
const NumItems = styled.View`
width: 15px;
height: 15px;
border-radius: 20px;
background-color: red;
justify-content: center ;
align-items: center ;
position: absolute ;
z-index:5 ;
top:-5;
right:-5 ;
`
const TextNum = styled.Text`
color: #FFF ;
font-weight: bold ;
font-size:10px ;
`