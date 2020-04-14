import React from 'react';
import { string, number } from 'prop-types';

const IconCloseFamily = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconCloseFamily</title>
      <path
        d="M36.6 16C38.3 16 39.6 14.7 39.6 13C39.6 11.8 38.9 10.7 37.8 10.3C37.9 10 38 9.8 38 9.5C38 8.7 37.3 8 36.5 8C35.7 8 35 8.7 35 9.5C35 9.8 35.1 10.1 35.2 10.3C34.2 10.8 33.5 11.8 33.5 13C33.6 14.7 34.9 16 36.6 16Z"
        fill={color}
      />
      <path
        d="M45.8 26.1L40.9 17.7C40.8 17.6 40.7 17.5 40.6 17.4C40.4 17.2 40.1 17 39.8 17H39.5C38.7 17.6 37.6 18 36.5 18C35.4 18 34.3 17.6 33.5 17H33.1C32.8 17 32.5 17.1 32.3 17.4C32.2 17.5 32 17.6 32 17.7L27.1 26.1C26.7 26.8 26.9 27.7 27.6 28.1C28.3 28.5 29.2 28.3 29.6 27.6L32.5 22.6L32.8 25.5C32.8 25.8 32.8 26.1 32.7 26.4L30.3 33.7C30.1 34.4 30.6 35 31.3 35H33V41.5C33 42.3 33.7 43 34.5 43C35.3 43 36 42.3 36 41.5V35H37V41.5C37 42.3 37.7 43 38.5 43C39.3 43 40 42.3 40 41.5V35H41.6C42.3 35 42.8 34.3 42.6 33.7L40.2 26.4C40 26.1 40 25.8 40 25.6L40.3 22.7L43.1 27.6C43.5 28.3 44.4 28.6 45.1 28.1C46 27.7 46.2 26.8 45.8 26.1Z"
        fill={color}
      />
      <path
        d="M18 18.2V29.5C18 30.3 17.3 31 16.5 31C16.3 31 16.2 31 16 30.9V41.5C16 42.3 15.3 43 14.5 43C13.7 43 13 42.3 13 41.5V33C13 32.4 12.5 32 12 32C11.5 32 11 32.4 11 33V41.5C11 42.3 10.3 43 9.5 43C8.7 43 8 42.3 8 41.5V30.9C7.8 31 7.6 31 7.5 31C6.6 31 6 30.3 6 29.5V18.2C6 17.1 6.9 16.1 8 16H10L11.6 17.6C11.8 17.8 12.1 17.8 12.3 17.6L14 16H16C17.1 16.1 18 17.1 18 18.2Z"
        fill={color}
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        fill={color}
      />
      <path
        d="M24.5 24C25.8807 24 27 22.8807 27 21.5C27 20.1193 25.8807 19 24.5 19C23.1193 19 22 20.1193 22 21.5C22 22.8807 23.1193 24 24.5 24Z"
        fill={color}
      />
      <path
        d="M21 33.9V41.5C21 42.3 21.7 43 22.5 43C23.3 43 24 42.3 24 41.5V35H25V41.5C25 42.3 25.7 43 26.5 43C27.3 43 28 42.3 28 41.5V33.9C28.6 33.7 29 33.1 29 32.5V27C29 25.9 28.1 25 27 25L24.9 25.9C24.7 26 24.4 26 24.2 25.9L22 25C20.9 25 20 25.9 20 27V32.5C20 33.1 20.4 33.7 21 33.9Z"
        fill={color}
      />
    </svg>
  );
};

IconCloseFamily.defaultProps = {
  color: 'black',
  size: 30,
};

IconCloseFamily.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconCloseFamily;