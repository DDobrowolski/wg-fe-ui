import React from 'react';
import { string } from 'prop-types';

const IconActionPhone = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Phone</title>
      <path
        d="M38.25 38.54L31.89 32.78C31.7891 32.6954 31.6617 32.649 31.53 32.649C31.3983 32.649 31.2709 32.6954 31.17 32.78L28.56 34.78C28.1575 35.0745 27.6596 35.208 27.1638 35.1543C26.668 35.1007 26.2101 34.8638 25.88 34.49L23.93 32.15C21.7078 29.4867 20.1089 26.3606 19.25 23L18.49 20.07C18.3679 19.5862 18.4411 19.0737 18.6937 18.6433C18.9463 18.213 19.358 17.8993 19.84 17.77L23.04 16.89C23.1651 16.8572 23.2742 16.7807 23.3476 16.6742C23.421 16.5678 23.4538 16.4386 23.44 16.31L22.5 7.89C22.4863 7.77339 22.4349 7.66442 22.3537 7.57961C22.2725 7.4948 22.1659 7.43877 22.05 7.42C20.8729 7.14586 19.6686 7.00497 18.46 7C17.3853 7.32931 16.3718 7.83266 15.46 8.49C14.08 9.49 11.6 12.65 12.03 18.81C12.41 24.28 15.57 30.56 15.57 30.56C15.57 30.56 18.84 36.79 23.1 40.34C27.88 44.34 31.97 44.25 33.57 43.72C34.6489 43.4013 35.6641 42.8971 36.57 42.23C37.2886 41.2755 37.8958 40.2422 38.38 39.15C38.4241 39.0474 38.4353 38.9336 38.412 38.8243C38.3887 38.7151 38.3321 38.6157 38.25 38.54Z"
        fill={color}
      />
    </svg>
  );
};

IconActionPhone.defaultProps = {
  color: 'black',
  size: 30,
};

IconActionPhone.propTypes = {
  color: string,
  className: string,
};

export default IconActionPhone;