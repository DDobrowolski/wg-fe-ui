import React from 'react';
import styled from 'styled-components';
import { arrayOf, string, object, node } from 'prop-types';
import Value from './Value.js';
import Row from './Row.js';
import Key from './Key.js';
import { key } from 'styled-theme/dist';

const DisplayTable = ({ className, children, ...otherProps }) => {
  return (
    <StyledDisplayTable {...otherProps} className={className}>
      <StyledBody>{children}</StyledBody>
    </StyledDisplayTable>
  );
};

const StyledDisplayTable = styled.table`
  width: 100%;
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
`;

const StyledBody = styled.tbody`
  background-color: white;
`;

DisplayTable.defaultProps = {
  otherProps: []
}

DisplayTable.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: arrayOf(object).isRequired,
  children: node,
};

DisplayTable.Value = Value;
DisplayTable.Value.displayName = 'DisplayTable.Value';
DisplayTable.Row = Row;
DisplayTable.Row.displayName = 'DisplayTable.Row';
DisplayTable.Key = Key;
DisplayTable.Key.displayName = 'DisplayTable.Key';

export default DisplayTable;
