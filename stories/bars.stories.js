import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {
  BackButton,
  SearchInput,
  ProgressBar,
  ToolBar,
  OverviewClaimStatus,
  TrackingBar,
} from './../src';

const COMPONENT_CHOICES = {
  none: null,
  back_button: <BackButton />,
  search_input: <SearchInput onChange={action('onChange')} />,
};

storiesOf('Mid Level blocks/Bars', module)
  .addDecorator(withKnobs())
  .addDecorator(withInfo({ inline: true }))
  .add('ProgressBar', () => {
    return <ProgressBar background="#AEAEAE" />;
  })
  .add('ToolBar', () => {
    const componentName = select(
      'Child component',
      Object.keys(COMPONENT_CHOICES),
      'search_input',
    );
    return (
      <ToolBar onClick={action('clicked it')}>
        {COMPONENT_CHOICES[componentName]}
      </ToolBar>
    );
  })
  .add('OverviewClaimStatus', () => {
    const statuses = ['first', 'second', 'third'];

    return (
      <OverviewClaimStatus statuses={statuses} currentStatus={statuses[1]} />
    );
  })
  .add('TrackingBar', () => {
    return <TrackingBar background="#D3D4D8" />;
  });
