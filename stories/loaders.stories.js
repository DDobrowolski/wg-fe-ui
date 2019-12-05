import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import LoadingSpinner from '../src/components/Loaders/LoadingSpinner.jsx';

storiesOf('Low level blocks/Loaders', module)
  .addDecorator(withInfo({ inline: true }))
  .add('LoadingSpinner', () => {
    return <LoadingSpinner />;
  });
