import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HouseIcon from './assets/HouseIcon.jsx';
import { HeaderNav, MainNavigation } from '../src/index.js';

storiesOf('Mid level blocks/Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('MainNavigation', () => {
    return (
      <Container>
        <StyledMainNav>
          <MainNavigation.Title>Title</MainNavigation.Title>
          <MainNavigation.Item icon={<HouseIcon isActive={false} />}>
            Example
          </MainNavigation.Item>
          <MainNavigation.Item
            isActive={true}
            icon={<HouseIcon isActive={true} />}
          >
            Active
          </MainNavigation.Item>
          <MainNavigation.Title>Other</MainNavigation.Title>
          <MainNavigation.Item icon={<HouseIcon isActive={false} />}>
            House
          </MainNavigation.Item>
          <MainNavigation.Line />
        </StyledMainNav>
      </Container>
    );
  })
  .add('HeaderNavigation', () => {
    // Mock navTabs
    const navTabs = [
      { title: 'tab1', to: '/tab1' },
      { title: 'tab2', to: '/tab2' },
    ];
    const [tab, setTab] = useState('/tab1');

    return (
      <Container>
        <HeaderNav
          currentLocation={tab}
          navTabs={navTabs}
          onClick={val => setTab(val)}
        />
      </Container>
    );
  });

const Container = styled.div`
  width: 100%;
  height: 35rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  > div {
    position: absolute;
  }
`;

const StyledMainNav = styled(MainNavigation)`
  height: 35rem;
  position: absolute;
  left: 0;
  top: 0;
  right: auto;
`;

Container.displayName = '.';
HeaderNav.displayname = 'HeaderNav';

StyledMainNav.displayName = 'MainNavigation';