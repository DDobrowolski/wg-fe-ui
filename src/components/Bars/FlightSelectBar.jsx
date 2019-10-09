import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import PropTypes from 'prop-types';
import {
  Container,
  StyledInput,
} from '../Checkboxes/ImageBars/ImageBarTemplate';

const StyledCheck = styled.span`
  height: 16px;
  min-width: 16px;
  border-radius: 10px;
  border: ${({ checked }) => (checked ? '5px solid' : '1.2px solid')};
  border-color: ${({ checked }) =>
    checked ? key('colors.toggle') : key('colors.outline')};
`;

const FlightData = styled.div`
  display: flex;
  flex-direction: column;
  border-right: ${({ border }) => (border ? '1px solid #cccccc' : null)};
  padding-right: ${({ border }) => (border ? '1.7vw' : null)};
  margin-right: 7%;
  .label {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #a29c95;
  }

  .data {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #505050;
    font-weight: 900;
  }
`;

const StyledFlightData = ({ border, label, data, children }) => (
  <FlightData border={border}>
    {label && data && (
      <>
        <span className="label">{label}</span>
        <span className="data">{data}</span>
      </>
    )}
    {children}
  </FlightData>
);

StyledFlightData.propTypes = {
  border: PropTypes.bool,
  label: PropTypes.string,
  data: PropTypes.string,
};

StyledFlightData.defaultProps = {
  border: false,
};

const StyledContainer = styled(Container)`
  width: 52vw;
  justify-content: space-around;
  padding: 0 2vw;
  svg {
    margin: 0;
  }
`;

const FlightSelectBar = ({
  checked,
  disabled,
  handleChange,
  children,
  ...otherProps
}) => {
  return (
    <StyledContainer checked={checked} disabled={disabled} {...otherProps}>
      <StyledInput
        type="radio"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      {children}
      <StyledCheck checked={checked} />
    </StyledContainer>
  );
};

FlightSelectBar.displayName = 'RadioOption';
FlightSelectBar.FlightData = StyledFlightData;
FlightSelectBar.FlightData.displayName = 'FlightSelectBar.FlightData';

FlightSelectBar.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

FlightSelectBar.defaultProps = {
  checked: false,
};

export default FlightSelectBar;
