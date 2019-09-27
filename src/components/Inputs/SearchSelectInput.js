import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { func, string, bool, array, object } from 'prop-types';
import { key } from 'styled-theme';

const SearchSelectInput = ({
  className,
  selected,
  loading,
  options,
  name,
  disabled,
  children,
  initial,
  noOptionMessage,
  loadingMessage,
  placeholder,
  otherProps,
}) => {
  const [isSelected, setSelected] = useState();

  const handleChange = e => {
    selected(name, e.value);
    setSelected(e);
  };

  useEffect(() => {
    if (loading || !options.length || options === []) {
      setSelected('');
    }

    if (initial) {
      setSelected(initial);
    }
  }, [options]);

  return (
    <Container className={className}>
      <Label disabled={disabled}>{children}</Label>
      <Input
        isDisabled={disabled}
        onChange={e => handleChange(e)}
        options={options}
        value={isSelected}
        noOptionsMessage={() => noOptionMessage}
        placeholder={loading ? loadingMessage : placeholder}
        classNamePrefix="Select"
        {...otherProps}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${key('fonts.primary')};
`;

const Input = styled(Select)`
  width: 100%;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }

  & .Select {
    &__control {
      border-radius: 0.3rem;
      border: 0.1rem solid ${key('colors.outline')};
      box-shadow: none;

      &:hover {
        border-color: ${key('colors.interactive')};
      }
    }

    &__control--menu-is-open {
      &:hover {
        border-color: ${key('colors.interactive')};
      }

      .Select__dropdown-indicator {
        & svg {
          transform: rotate(180deg);
          transition: 0.1s ease;
        }
      }
    }

    &__value-container {
      padding: 0 0.5em;
      font-size: ${key('fonts.normal-size')};
    }

    &__single-value {
      color: black;
    }

    &__menu {
      font-size: 1.8rem;
      z-index: 999;
    }

    &__menu-list {
      max-height: 13rem;
    }

    &__menu-notice--no-options {
      text-align: left;
      font-size: 1.2rem;
    }

    &__option {
      font-size: 1.2rem;
      color: ${key('colors.sub-txt')};

      :hover {
        cursor: pointer;
        background-color: ${key([`colors`, `hover`])};
        color: white;
      }

      &--is-focused {
        color: white;
        background-color: ${key([`colors`, `hover`])};
      }

      &--is-selected {
        background-color: ${key([`colors`, `toggle`])};
        color: white;
      }
    }
  }
`;

const Label = styled.p`
  font-size: 1.2rem;
  transition: 0.2s;
  line-height: 1rem;
  margin-bottom: 1rem;
  color: ${props =>
    props.disabled ? key('colors.disabled') : key('colors.sub-title')};
  width: 80%;
`;

SearchSelectInput.defaultProps = {
  disabled: false,
  loading: false,
  noOptionMessage: 'No options',
  loadingMessage: 'Loading...',
  placeholder: 'Choose your option',
  initial: null,
};

SearchSelectInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Returns name and value of selected */
  selected: func.isRequired,
  /** Sets name of inputfield */
  name: string.isRequired,
  /** if true input is disabled */
  disabled: bool,
  /** label above the input */
  children: string.isRequired,
  /** array of objects {value: 'test', label: 'Test'} */
  options: array.isRequired,
  /** set true if options are loading */
  loading: bool,
  /** name that sets selected on load */
  initial: object,
  /** Message to show when options are empty */
  noOptionMessage: string,
  /** Message to show when loading is true */
  loadingMessage: string,
  /** Message to show on load when no initial */
  placeholder: string,
  /** Adds extra props to the element */
  otherProps: object,
};

export default SearchSelectInput;