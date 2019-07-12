import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '.';

storiesOf('Atoms|Title', module)
  .add('default', () => <Title>Mi Título</Title>);