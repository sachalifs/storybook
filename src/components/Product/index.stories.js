import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from '.';

storiesOf('Product', module)
  .add('default', () => (
    <Product
      imageUrl='https://images.fravega.com/s250/c67fb6d07b70f6e98ed8ac71649e9067.jpg'
      imageAlt='Lavarropas 1'
      productName='Lavarropas Carga Frontal'
      productDescription='Su capacidad de lavado es de hasta 8 kilos y su potencia de centrifugado de 1200 RPM (revoluciones por minuto).' />
  ))
