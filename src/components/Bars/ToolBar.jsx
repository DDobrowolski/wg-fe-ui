import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { ActionButton } from './../Buttons'
import { arrayOf, string, object, node, func } from 'prop-types';


const Box = styled.div`
    display: flex;
    background-color: #F7F7F7;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 13px 9.21vw 12px 15.73vw;
    box-sizing: border-box;
`

export const InnerBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    border-right: 1px solid ${key('colors.outline')};
    margin-right: 2.4vw;

    input {
        border: none;
        background-color: inherit;
    }
`

const ToolBar = ({ btnName, className, children, onClick, ...otherProps,  }) => {
  return (
    <Box className={className} {...otherProps}> 
        <InnerBox>
            { children }
        </InnerBox>
        <ActionButton onClick={onClick}>
            { btnName }
        </ActionButton>
    </Box>
  );
};

ToolBar.defaultProps = {
    btnName: 'New claim',
    onClick: Function.prototype,
    otherProps: []
}

ToolBar.propTypes = {
  btnName: string,
  /** Beeing able to use it in Styled Components */
  className: string,
  onClick: func,
  /** Adds extra props to the element */
  otherProps: arrayOf(object).isRequired,
  children: node,
};


export default ToolBar;
