import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import UserAvatar, { COLORS } from '.'

storiesOf('UserAvatar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <UserAvatar
      firstName={text('Nombre', 'Sacha')}
      lastName={text('Apellido', 'Lifs')}
      color={select('Color', COLORS, COLORS[0])} />
  ))
