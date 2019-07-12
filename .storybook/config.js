import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);
