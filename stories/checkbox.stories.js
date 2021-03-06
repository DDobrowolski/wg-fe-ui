import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { CheckBox, CheckOption, CheckBoxContainer } from '../src';

import CheckBox_v2 from '../src/components/v2/Checkboxes/CheckBox_v2';

import Property from '../src/components/Icons/Property';

storiesOf('Low level blocks/Checkboxes', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Checkbox', () => (
    <CheckBox
      name="checktest"
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
      onChange={e => console.log('Checkbox checked:', e.currentTarget.checked)}
    >
      Item
    </CheckBox>
  ))
  .add('Checkbox', () => (
    <CheckBox
      name="checktest"
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
      onChange={e => console.log('Checkbox checked:', e.currentTarget.checked)}
    >
      Item
    </CheckBox>
  ))
  .add('CheckOption', () => {
    const [checkedBox, setCheckedBox] = useState({ 1: false, 2: false });

    const handleChangeCheckbox = id => {
      setCheckedBox({ ...checkedBox, [id]: !checkedBox[id] });
    };
    return (
      <>
        <CheckOption
          icon={<Property />}
          handleClick={() => handleChangeCheckbox(1)}
          checked={checkedBox[1]}
          disabled={boolean('disabled', false)}
        >
          I encountered issues with my lugage
        </CheckOption>
      </>
    );
  })
  .add('CheckBoxContainer', () => {
    return (
      <CheckBoxContainer label={text('Title', 'Contract types')}>
        <CheckBox name="lead">Lead</CheckBox>
        <CheckBox name="offer">Offer</CheckBox>
        <CheckBox name="contract">Contract</CheckBox>
      </CheckBoxContainer>
    );
  })
  .add('CheckBox_v2', () => {
    return (
      <CheckBox_v2
        name="checktest"
        disabled={boolean('Disabled?', false)}
        checked={boolean('Checked?', false)}
        side={select('Label side?', { Left: 'left', Right: 'right' }, 'right')}
        onChange={e =>
          console.log('Checkbox checked:', e.currentTarget.checked)
        }
      >
        Item
      </CheckBox_v2>
    );
  });
