import React, { forwardRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import {
  func,
  string,
  shape,
  bool,
  number,
  arrayOf,
  object,
  oneOfType,
} from 'prop-types';
import Error from './../Messages/Error';

const SearchSelectInput = forwardRef(
  (
    {
      async,
      className,
      onSelected,
      loading,
      loadOptions,
      options,
      name,
      value,
      disabled,
      children,
      initial,
      noOptionMessage,
      loadingMessage,
      placeholder,
      isMulti,
      error,
      ...otherProps
    },
    ref,
  ) => {
    const [isSelected, setSelected] = useState();

    const handleChange = option => {
      setSelected(option || []);
      if (!option) {
        onSelected({ name, value: undefined });
        return;
      }
      onSelected({
        name,
        value: Array.isArray(option) ? option : option.value,
      });
    };

    useEffect(() => {
      if (loading || !options.length || options === []) {
        setSelected('');
      }

      if (initial) {
        setSelected(initial);
      }
      if (value) setSelected(value);
    }, [value, options, initial, loading]);

    return (
      <Container className={className}>
        <Label disabled={disabled}>
          {children}
          {!async ? (
            <Input
              ref={ref}
              isDisabled={disabled}
              onChange={handleChange}
              name={name}
              options={options}
              value={isSelected}
              noOptionsMessage={() => noOptionMessage}
              placeholder={loading ? loadingMessage : placeholder}
              classNamePrefix="Select"
              isMulti={isMulti}
              closeMenuOnSelect={!isMulti}
              error={error ? true : false}
              {...otherProps}
            />
          ) : (
            <AsyncInput
              ref={ref}
              placeholder={loading ? loadingMessage : placeholder}
              classNamePrefix="Select"
              isMulti={isMulti}
              name={name}
              closeMenuOnSelect={!isMulti}
              error={error ? true : false}
              isDisabled={disabled}
              cacheOptions
              value={isSelected}
              loadOptions={loadOptions}
              defaultOptions
              onChange={handleChange}
              {...otherProps}
            />
          )}
        </Label>
        <Error error={error} />
      </Container>
    );
  },
);

const styles = css`
  width: 100%;
  margin-top: 1.4rem;
  margin-bottom: ${({ error }) => (error ? 0 : '2rem')};

  &:focus {
    outline: none;
  }

  & .Select {
    &__control {
      border-radius: 0.3rem;
      border: 0.1rem solid;
      border-color: ${({ theme, error, touched }) =>
        error
          ? theme.status.error
          : touched & !error
          ? theme.status.succes
          : theme.ui.outline};
      box-shadow: none;
      height: ${({ isMulti }) => (isMulti ? 'fit-content' : '4rem')};

      &:hover {
        border-color: ${({ theme }) => theme.ui.interactive};
      }
    }

    &__control--menu-is-open {
      &:hover {
        border-color: ${({ theme }) => theme.ui.interactive};
      }

      .Select__dropdown-indicator {
        & svg {
          transform: rotate(180deg);
          transition: 0.1s ease;
        }
      }
    }

    &__value-container {
      padding: 0.5em;
      font-size: 1.6rem;
    }

    &__single-value {
      color: black;
      overflow: visible;
      overflow: initial;
    }

    &__menu {
      font-size: 1.8rem;
      z-index: 999;
    }

    &__menu-list {
      max-height: 13rem;
      padding: 0;
    }

    &__menu-notice--no-options {
      text-align: left;
      font-size: 1.2rem;
    }

    &__option {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.ui.interactive};
      padding: 1rem;

      :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hover.secondary};
        color: ${({ theme }) => theme.brand.secondary};
      }

      &--is-focused {
        color: ${({ theme }) => theme.brand.secondary};
        background-color: ${({ theme }) => theme.hover.secondary};
      }

      &--is-selected {
        color: ${({ theme }) => theme.brand.primary};
        background-color: white;
      }
    }
    &__multi-value {
      background: rgba(255, 128, 0, 0.05);
      border: 1px solid ${({ theme }) => theme.brand.primary};
      box-sizing: border-box;
      border-radius: 3px;

      &__label {
        color: ${({ theme }) => theme.brand.primary};
        line-height: 1.6rem;
        padding: 0.2rem 0.2rem 0.2rem 0.4rem;
        box-sizing: border-box;
      }
      &__remove {
        cursor: pointer;

        & svg {
          fill: ${({ theme }) => theme.brand.primary};
        }

        &:hover {
          background-color: initial;
        }
      }
    }
    &__indicators {
      ${({ isMulti }) => (isMulti ? 'display: none' : null)};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  height: 9rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  transition: 0.2s;
  line-height: 1rem;
  color: ${({ theme, disabled }) =>
    disabled ? theme.ui.disabled : theme.typo.subTitle};
`;

const Input = styled(Select)`
  ${styles};
`;

const AsyncInput = styled(AsyncSelect)`
  ${styles};
`;

SearchSelectInput.displayName = 'SearchSelectInput';

SearchSelectInput.defaultProps = {
  async: false,
  disabled: false,
  loading: false,
  noOptionMessage: 'No options',
  options: [],
  loadingMessage: 'Loading...',
  placeholder: 'Choose your option',
  initial: null,
  isMulti: false,
  otherProps: {},
  value: null,
};

SearchSelectInput.propTypes = {
  async: bool,
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Returns name and value of selected */
  onSelected: func.isRequired,
  /** Sets name of inputfield */
  name: string.isRequired,
  /** if true input is disabled */
  disabled: bool,
  /** string with errormessage */
  error: string,
  /** label above the input */
  children: string.isRequired,
  /** array of objects {value: 'test', label: 'Test'} */
  options: arrayOf(
    shape({
      value: oneOfType([string, number]),
      label: string,
    }),
  ).isRequired,
  /** set true if options are loading */
  loading: bool,
  /** name that sets selected on load */
  loadOptions: func,

  initial: oneOfType([
    arrayOf(
      shape({
        value: oneOfType([string, number]),
        label: string,
      }),
    ),
    shape({
      value: oneOfType([string, number]),
      label: string,
    }),
  ]),
  /** Message to show when options are empty */
  noOptionMessage: string,
  /** Message to show when loading is true */
  loadingMessage: string,
  /** Message to show on load when no initial */
  placeholder: string,
  /** Defines if it can handle multiple tags */
  isMulti: bool,
  /** Adds extra props to the element */
  otherProps: object,
  /** Triggers when input is cleared */
  value: oneOfType([
    arrayOf(
      shape({
        value: oneOfType([string, number]),
        label: string,
      }),
    ),
    shape({
      value: oneOfType([string, number]),
      label: string,
    }),
  ]),
};

export default SearchSelectInput;
