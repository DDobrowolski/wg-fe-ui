import React from 'react';
import { string } from 'prop-types';

const IconConstructionFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Construction</title>
      <path
        d="M38.93 12.78C38.676 12.159 38.3647 11.5631 38 11C36.4971 8.70925 34.1935 7.06178 31.54 6.38C30.7735 6.18082 29.9901 6.0536 29.2 6H19.5C19.3674 6 19.2402 6.05268 19.1464 6.14645C19.0527 6.24021 19 6.36739 19 6.5V8H17V6.5C17 6.36739 16.9473 6.24021 16.8536 6.14645C16.7598 6.05268 16.6326 6 16.5 6H14.5C14.3674 6 14.2402 6.05268 14.1464 6.14645C14.0527 6.24021 14 6.36739 14 6.5V13.5C14 13.6326 14.0527 13.7598 14.1464 13.8536C14.2402 13.9473 14.3674 14 14.5 14H16.5C16.6326 14 16.7598 13.9473 16.8536 13.8536C16.9473 13.7598 17 13.6326 17 13.5V12H19V13.5C19 13.6326 19.0527 13.7598 19.1464 13.8536C19.2402 13.9473 19.3674 14 19.5 14H22.61V25H21.61L20.83 41.32C20.753 42.4504 21.1141 43.5671 21.8384 44.4385C22.5627 45.3099 23.5945 45.869 24.72 46C25.3303 46.0566 25.9456 45.9814 26.5244 45.7796C27.1031 45.5778 27.6318 45.254 28.0746 44.8302C28.5173 44.4064 28.8639 43.8924 29.0909 43.323C29.3178 42.7537 29.4198 42.1422 29.39 41.53L28.61 25H27.61V14H31.5C31.6326 14 31.7598 13.9473 31.8536 13.8536C31.9473 13.7598 32 13.6326 32 13.5V10.34C34.4754 10.3883 36.849 11.3335 38.68 13C38.7092 13.0332 38.7503 13.0534 38.7944 13.0562C38.8385 13.059 38.8818 13.0442 38.915 13.015C38.9482 12.9858 38.9684 12.9447 38.9712 12.9006C38.974 12.8565 38.9592 12.8132 38.93 12.78Z"
        fill={color}
      />
    </svg>
  );
};

IconConstructionFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconConstructionFilled.propTypes = {
  color: string,
  className: string,
};

export default IconConstructionFilled;