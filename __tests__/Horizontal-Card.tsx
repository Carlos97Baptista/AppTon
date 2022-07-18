import React from 'react';
import 'react-native';
import { HorizontalCard } from '../App/Components';
// Note: test renderer must be required after react-native.
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ProductProvider } from '../App/Context/Product';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
it('HorizontalCard',async () => {
  var manegeCart = jest.fn();
  var HaveInArray = jest.fn();
  const cart: never[] = [];
  HaveInArray.mockReturnValueOnce(false).mockReturnValueOnce(true);
  render(
    <ProductProvider value={{cart, manegeCart, HaveInArray}}>
    <HorizontalCard
      item={{
        img: 'https://flagcdn.com/w320/ao.png',
        title: 'Angola',
        value: '1246700',
      }}
      fnc={() => manegeCart()}
    />
</ProductProvider>
  );

  expect(screen.getByText('Angola'));

  const btn = screen.getByText('Remover');
  expect(btn);
  fireEvent.press(btn);
  expect(manegeCart).toBeCalled();
});
