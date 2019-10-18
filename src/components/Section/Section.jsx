import React from 'react';
import styled from 'styled-components';
import { object, node, string } from 'prop-types';
import { key } from 'styled-theme';
import { SubTitle } from '../Typography';

const Section = ({ children, className, ...otherProps }) => {
  return (
    <StyledSection {...otherProps} className={className}>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  font-family: ${key('fonts.primary')};
  width: 100%;
  max-width: 100rem;
  margin-bottom: 4.5rem;
`;

const Subtitle = styled.h2`
  font-size: ${key('fonts.normal-size')};
`;

const Content = styled.div`
  background-color: ${props => (props.background ? 'white' : 'none')};
  position: relative;
  font-size: ${key('fonts.normal-size')};
  padding: ${props => (props.background ? '3.5rem' : 'none')};
  border: ${props =>
    props.background ? `0.1rem solid ${key('colors.outline')}` : 'none'};
  box-shadow: ${props =>
    props.background ? '0 0.2rem 0.5rem rgba(0, 0, 0, 0.05)' : 'none'};
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

Section.defaultProps = {
  otherProps: {},
};

Section.propTypes = {
  children: node,
  className: string,
  otherProps: object,
};

Section.Title = SubTitle;
Section.Title.displayName = 'Section.Title';
Section.Subtitle = Subtitle;
Section.Subtitle.displayName = 'Section.Subtitle';
Section.Content = Content;
Section.Content.displayName = 'Section.Content';

export default Section;
