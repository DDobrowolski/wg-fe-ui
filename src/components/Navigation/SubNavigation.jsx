import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.li`
  font-weight: 900;
`;

const SubSection = styled.li`
  padding-right: 0.78vw;
  border-right: 1px solid;
  border-color: ${({ active, theme }) =>
    active ? theme.brand.primary : 'transparent'};
`;

const Item = styled.li`
  position: relative;
  padding-right: 0 !important;
  margin-bottom: 0 !important;
`;

const SectionContainer = styled.ul`
  padding-left: 0.78vw;
  font-family: ${({ theme }) => theme.font};
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  max-height: ${({ active }) => (active ? '100vh' : '0')};
  transition: opacity 0.5s, max-height 0.5s;
`;

SubSection.propTypes = {
  active: PropTypes.bool,
};

const StyledSubNavigation = styled.ul`
  font-size: 1.6rem;
  line-height: 2rem;
  font-family: ${({ theme }) => theme.font};
  li {
    color: ${({ theme }) => theme.typo.highlight};
    line-height: 2rem;
    text-align: right;
    margin-bottom: 1rem;
    padding-right: 0.78vw;
    cursor: pointer;
  }
`;

const SubNavigation = ({ className, children, ...otherProps }) => {
  return (
    <StyledSubNavigation className={className} {...otherProps}>
      {children}
    </StyledSubNavigation>
  );
};

SubNavigation.Section = Section;
SubNavigation.Section.displayName = 'SubNavigation.Section';
SubNavigation.SubSection = SubSection;
SubNavigation.SubSection.displayName = 'SubNavigation.SubSection';
SubNavigation.Item = Item;
SubNavigation.SectionContainer = SectionContainer;
SubNavigation.SectionContainer.displayName = 'SubNavigation.SectionContainer';

SubNavigation.propTypes = {
  className: PropTypes.string,
  otherProps: PropTypes.object,
  children: PropTypes.node,
};

export default SubNavigation;
