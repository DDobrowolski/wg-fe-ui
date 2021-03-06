import { configure, addDecorator } from '@storybook/react';
import { orange } from './../src/themes';
import ThemeProvider from '../src/components/ThemeProvider';
import React from 'react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={orange()}>{story()}</ThemeProvider>
));

configure(loadStories, module);
