import React from 'react';
import ToolBar from './ToolBar';
import { SearchInput } from './../Inputs';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { BackButton } from './../Buttons';

import { orange } from '../../themes';
const theme = orange();

describe('ToolBar', () => {
  it('when rendered, component should have correct style', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ToolBar btnName="submit" />
      </ThemeProvider>,
    );

    expect(wrapper.find('ButtonWrapper')).toHaveStyleRule(
      'border-left',
      `1px solid ${theme.ui.outline}`,
    );
  });

  it('when passed children, component should render correctly', () => {
    let wrapper = shallow(
      <ToolBar>
        <SearchInput />
      </ToolBar>,
    );

    expect(wrapper.find(SearchInput).exists()).toEqual(true);
  });

  it('when passed children, component should render correctly', () => {
    let wrapper = shallow(
      <ToolBar>
        <BackButton />
      </ToolBar>,
    );

    expect(wrapper.find(BackButton).exists()).toEqual(true);
  });
});
