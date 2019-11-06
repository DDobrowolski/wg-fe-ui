import React, { useState, useEffect } from 'react';
import { bool, node, func, string, object, number } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { detect } from 'detect-browser';
import Error from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const TextArea = ({
  className,
  children,
  name,
  disabled,
  placeholder,
  onChange,
  setFieldTouched,
  error,
  touched,
  value,
  maxLength,
  counter,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [focus, setFocus] = useState();
  const [iconRight, setIconRight] = useState('1rem');
  const browser = detect();
  const handleChange = e => {
    e.persist();
    setInputValue(e.target.value);
    onChange({ name: e.target.name, value: e.target.value });
  };

  const handleFocus = () => {
    setFocus(true);
    if (browser) {
      switch (browser.name) {
        case 'safari':
          setIconRight('3.5rem');
          break;
        case '':
          setIconRight('3.5rem');
          break;
        default:
          setIconRight('1rem');
          break;
      }
    }
  };

  useEffect(() => {
    if (inputValue !== value) {
      setInputValue(value);
    }
  }, [value]);

  const handleBlur = () => {
    setFieldTouched(name, true);
    setFocus(false);
  };

  return (
    <Container className={className}>
      <StyledLabel disabled={disabled} htmlFor={name}>
        {children}
      </StyledLabel>
      <InputContainer>
        <Count maxLength={maxLength} count={value.length} counter={counter}>
          <StyledTextArea
            {...otherProps}
            id={name}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            error={error}
            touched={touched}
            value={inputValue}
            maxLength={maxLength}
            count={value.length}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </Count>
        <ValidationIcons
          error={error}
          browser={browser}
          focus={focus}
          iconRight={iconRight}
          touched={touched}
        />
      </InputContainer>
      <Error error={error} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-family: ${key('fonts.primary')};
  position: relative;
`;

const Count = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: ${({ count, maxLength, counter }) =>
      counter ? `'${count} / ${maxLength || '∞'}'` : ''};
    position: absolute;
    bottom: 20px;
    right: 15px;
    height: 13px;
    max-width: 74px;
    display: block;
    white-space: nowrap;
    font-size: 1.5rem;
    line-height: 1.3rem;
    letter-spacing: 0.924996px;
    color: #dfdfdf;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: ${({ disabled }) => (disabled ? '#AEAEAE' : '#5B5550')};
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  background-color: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${({ error, touched }) =>
    error
      ? key('colors.bad')
      : touched && !error
      ? key('colors.good')
      : key('colors.outline')};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  padding: 1rem;
  min-height: 7rem;

  &:focus {
    outline: none;
    border-color: ${key('colors.primary-regular')};
  }

  &::placeholder {
    color: ${key('colors.button-toggle')};
  }
`;

TextArea.defaultProps = {
  disabled: false,
  placeholder: '',
  error: '',
  value: '',
  touched: false,
  setFieldTouched: () => {},
  onChange: () => {},
  otherProps: {},
};

TextArea.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node.isRequired,
  /** name of input and label */
  name: string.isRequired,
  /** if true input is disabled */
  disabled: bool,
  /** example value in the input */
  placeholder: string,
  /** string with errormessage */
  error: string,
  /** boolean to check if inputfield is touched */
  touched: bool,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** returns onChange event */
  onChange: func,
  /** max input length */
  maxLength: number,
  /** boolean to set counter visibility */
  counter: bool,
  /** Adds extra props to the element */
  otherProps: object,
  /** sets initial value */
  value: string,
};

export default TextArea;