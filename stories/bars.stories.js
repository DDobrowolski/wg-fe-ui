import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import {
  //BackButton,
  SearchInput,
  ProgressBar,
  ToolBar,
  OverviewClaimStatus,
  TrackingBar,
  FlightSelectBar,
} from './../src';
import ApprovedIcon from './assets/Icons/Approved';
import OpenedIcon from './assets/Icons/Opened';
import FilingIcon from './assets/Icons/Filing';
import LoupeIcon from './assets/Icons/Loupe';
import PlaneIcon from './assets/Icons/Plane';
import PayIcon from './assets/Icons/Pay';
import UploadingIcon from './assets/Icons/Uploading';
import QuickActionSubMenu from '../src/components/Navigation/QuickActionSubMenu';

import RiskObjectBar from '../src/components/Bars/RiskObjectBar';

import Plane from '../src/components/Icons/Plane';
import * as Icons from '../src/components/Icons';
const IconsKeys = Object.keys(Icons);
const IconsList = {};
IconsKeys.map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey].name;
});

const backgrounds = ['#AEAEAE', '#C1C1C1', '#D3D4D8'];
const fillColors = ['default', 'red', 'green', 'blue'];
const activeIds = [1, 2, 3];
const heights = ['7px', '3px', '5px', '10px'];

storiesOf('Mid Level blocks/Bars', module)
  .addDecorator(withKnobs())
  .addDecorator(withInfo({ inline: true }))
  .add('ProgressBar', () => {
    const props = {
      activeId: select('activeStep', activeIds),
      background: select('color of bar', backgrounds),
      filledColor: select('color of filled bar', fillColors),
      height: select('height of Bar', heights),
    };
    return <StyledProgressBar {...props} />;
  })
  .add('ToolBar', () => {
    const [val, setVal] = useState('');
    return (
      <StyledToolBar
        btnName={text('Button text', 'Continue')}
        btnDisable={boolean('Disable button', false)}
        onClick={action('clicked it')}
      >
        <SearchInput text={val} placeholder="Search for..." onChange={setVal} />
      </StyledToolBar>
    );
  })
  .add('TrackingBar', () => {
    const activeSteps = [
      'filing',
      'uploading_documents',
      'data_analysis',
      'claim_opened',
      'approved',
      'payout',
    ];
    const props = {
      active: select('activeStep', activeSteps),
      background: select('color of bar', backgrounds),
      filledColor: select('color of filled bar', fillColors),
      height: select('height of Bar', heights),
    };
    return (
      <StyledTrackingBar
        stages={[
          {
            key: 'filing',
            name: 'filing',
            icon: <FilingIcon />,
            id: 1,
          },
          {
            key: 'uploading_documents',
            name: 'uploading documents',
            icon: <UploadingIcon />,
            id: 2,
          },
          {
            key: 'data_analysis',
            name: 'data analysis',
            icon: <LoupeIcon />,
            id: 3,
          },
          {
            key: 'claim_opened',
            name: 'claim opened',
            icon: <OpenedIcon />,
            id: 4,
          },
          {
            key: 'air_carrier_processing',
            name: 'air carrier processing',
            icon: <PlaneIcon />,
            id: 5,
          },
          {
            key: 'approved',
            name: 'approved',
            icon: <ApprovedIcon />,
            id: 6,
          },
          {
            key: 'payout',
            name: 'payout',
            icon: <PayIcon />,
            id: 7,
          },
        ]}
        {...props}
      />
    );
  })
  .add('OverviewClaimStatus', () => {
    const statuses = ['first', 'second', 'third'];

    return (
      <OverviewClaimStatus
        statuses={statuses}
        currentStatus={select('status', statuses, 'first')}
      />
    );
  })
  .add('FlightSelectBar', () => {
    const [checkedRadio, setCheckedRadio] = useState(0);
    return (
      <FlightSelectBar
        handleChange={({ name }) => setCheckedRadio(name)}
        disabled={select('disabled', [false, true], false)}
        checked={checkedRadio === 'selected'}
        value={select('value', ['first', 'second', 'third'], 'first')}
        name="selected"
      >
        <FlightSelectBar.FlightData
          border={true}
          label="Ryanair"
          data="FR2985"
        />
        <FlightSelectBar.FlightData label="Brussels" data="BRU" />
        <FlightSelectBar.FlightData label="Departure" data="17:55" />
        <FlightSelectBar.FlightData>
          <Plane color="#CCCCCC" />
        </FlightSelectBar.FlightData>
        <FlightSelectBar.FlightData label="Lisbon" data="LIS" />
        <FlightSelectBar.FlightData label="Arrival" data="20:10" />
      </FlightSelectBar>
    );
  })
  .add('RiskObjectBar', () => {
    return (
      <div style={{ padding: '0px 40px', width: '100%' }}>
        <RiskObjectBar icon={select('Icon', IconsList, IconsKeys[0])}>
          <RiskObjectBar.RiskObjectBarData
            size="double"
            label="Car"
            data="BMW X1 (2015) (F45)"
          />

          <RiskObjectBar.RiskObjectBarData
            label="License plate"
            data="1UWJ768"
          />

          <RiskObjectBar.RiskObjectBarData
            label="First registration"
            data="28/01/2020"
          />

          <RiskObjectBar.RiskObjectBarData
            label="Catalogue value"
            data="€ 28.797,53"
          />

          <QuickActionSubMenu otherProps={{}}>
            <QuickActionSubMenu.SubMenuItem
              label="View customer"
              onClick={function noRefCheck() {}}
              type=""
            />
            <QuickActionSubMenu.SubMenuItem
              label="Edit customer"
              onClick={function noRefCheck() {}}
              type=""
            />
            <QuickActionSubMenu.SubMenuItem
              label="Delete customer"
              onClick={function noRefCheck() {}}
              type=""
            />
          </QuickActionSubMenu>
        </RiskObjectBar>
      </div>
    );
  });

const StyledTrackingBar = styled(TrackingBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;

StyledTrackingBar.displayName = 'TrackingBar';

const StyledToolBar = styled(ToolBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;
StyledToolBar.displayName = 'ToolBar';

const StyledProgressBar = styled(ProgressBar)`
  width: 75rem;
  margin-bottom: 10rem;
`;

StyledProgressBar.displayName = 'ProgressBar';
