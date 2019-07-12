import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button
      buttonType='primary'
      onClick={action('click')}>
      Obtén Premium
    </Button>
  ))
  .add('Secondary', () => (
    <Button
      buttonType='secondary'
      onClick={action('click')}>
      Regístrate gratis
    </Button>
  ))