import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {useProduct} from '../../Context/Product';
export interface CardObject {img: string; title: string; value: string}

export interface CardInterface {
  item:CardObject;
  fnc?: Function | undefined;
}

const widthSimention = Dimensions.get('window').width;
const HorizontalCard = (props: CardInterface) => {
  const {HaveInArray} = useProduct();
  const {item, fnc} = props;

  return (
    <Card style={{elevation: 5}}>
      <Img source={{uri: item.img}} />
      <ContainerCard>
        <TitleCard>{item.title}</TitleCard>
        <MoneyCard>{item.value}</MoneyCard>
      </ContainerCard>
      <BtnCard onPress={fnc} added={HaveInArray(item)}>
        <BtnTxt style={{color: '#FFF'}}>
          {HaveInArray(item) ? 'Remover' : 'Adicionar'}
        </BtnTxt>
      </BtnCard>
    </Card>
  );
};

export default HorizontalCard;

const Card = styled.View`
  width:  ${widthSimention * 0.9}px;
  height: ${widthSimention * 0.2}px;
  background-color: #f8f8f8;
  border-radius: ${widthSimention * 0.05}px;
  margin: 20px;
  margin-bottom: 10px;
  margin-top: 10px ;
  flex-direction: row ;
`;
const Img = styled.Image`
  margin: ${widthSimention * 0.03}px;
  width: 20%;
  height: ${widthSimention * 0.15}px;
`;
const ContainerCard = styled.View`
  padding: ${widthSimention * 0.01}px;
  width: 50%;
  height: 100%;
  background-color: #fff;
`;
const BtnCard = styled.TouchableOpacity`
  border-top-right-radius: ${widthSimention * 0.05}px;
  border-bottom-right-radius: ${widthSimention * 0.05}px;
  padding: ${widthSimention * 0.01}px;
  width: 25%;
  height: 100%;
  background-color: ${(props: {added: boolean}) =>
    props.added ? '#d9534f' : '#5CEEA8'};
  justify-content: center;
  align-items: center;
`;
const TitleCard = styled.Text`
  font-weight: 500;
  color: #000;
  font-size: 16px;
`;
const MoneyCard = styled.Text`
  font-weight: 600;
  color: #666;
  font-size: 12px;
`;
const BtnTxt = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
