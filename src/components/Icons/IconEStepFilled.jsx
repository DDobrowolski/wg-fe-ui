import React from 'react';
import { string } from 'prop-types';

const IconEStepFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>E-Step</title>
      <path
        d="M40.5 29C39.2167 29 37.9622 29.3798 36.8944 30.0917C35.8267 30.8035 34.9936 31.8155 34.5 33H24.5C24.1119 33 23.7291 33.0904 23.382 33.2639C23.0348 33.4375 22.7329 33.6895 22.5 34H21.3C21.2065 33.999 21.1151 33.9724 21.0358 33.923C20.9564 33.8737 20.8921 33.8034 20.85 33.72L15.61 23.24L18.86 11.52C18.952 11.1741 18.999 10.8179 19 10.46V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H10.5C10.1022 8 9.72064 8.15804 9.43933 8.43934C9.15803 8.72064 8.99999 9.10218 8.99999 9.5C8.99999 9.89782 9.15803 10.2794 9.43933 10.5607C9.72064 10.842 10.1022 11 10.5 11H15.89L10.89 29.15C10.4338 29.0477 9.96751 28.9973 9.49999 29C7.96854 29.0007 6.48653 29.5422 5.31529 30.5288C4.14404 31.5155 3.35879 32.884 3.098 34.3931C2.83721 35.9022 3.11764 37.4549 3.88983 38.7774C4.66202 40.1 5.87637 41.1074 7.31876 41.622C8.76115 42.1366 10.3389 42.1255 11.7739 41.5904C13.2088 41.0554 14.4088 40.0309 15.1622 38.6976C15.9155 37.3642 16.1739 35.8077 15.8918 34.3025C15.6097 32.7973 14.8051 31.44 13.62 30.47L14.41 27.61L18.73 36.44C18.8117 36.6068 18.9383 36.7475 19.0954 36.8464C19.2526 36.9453 19.4343 36.9985 19.62 37H22.51C22.7429 37.3105 23.0448 37.5625 23.392 37.7361C23.7391 37.9096 24.1219 38 24.51 38H34.51C34.9625 39.086 35.7013 40.0288 36.6475 40.7279C37.5938 41.427 38.712 41.8562 39.883 41.9697C41.054 42.0832 42.2339 41.8767 43.2968 41.3723C44.3597 40.8679 45.2657 40.0845 45.9183 39.1056C46.5709 38.1266 46.9456 36.989 47.0024 35.8138C47.0592 34.6387 46.796 33.4702 46.2409 32.4329C45.6857 31.3956 44.8595 30.5285 43.8502 29.9239C42.8409 29.3193 41.6865 29 40.51 29H40.5ZM9.49999 38C9.00554 38 8.52219 37.8534 8.11107 37.5787C7.69995 37.304 7.37951 36.9135 7.1903 36.4567C7.00108 35.9999 6.95157 35.4972 7.04803 35.0123C7.14449 34.5273 7.3826 34.0819 7.73223 33.7322C8.08186 33.3826 8.52732 33.1445 9.01227 33.048C9.49722 32.9516 9.99989 33.0011 10.4567 33.1903C10.9135 33.3795 11.304 33.6999 11.5787 34.1111C11.8534 34.5222 12 35.0055 12 35.5C12 35.8283 11.9353 36.1534 11.8097 36.4567C11.6841 36.76 11.4999 37.0356 11.2678 37.2678C11.0356 37.4999 10.76 37.6841 10.4567 37.8097C10.1534 37.9353 9.8283 38 9.49999 38ZM40.5 38C40.0055 38 39.5222 37.8534 39.1111 37.5787C38.6999 37.304 38.3795 36.9135 38.1903 36.4567C38.0011 35.9999 37.9516 35.4972 38.048 35.0123C38.1445 34.5273 38.3826 34.0819 38.7322 33.7322C39.0819 33.3826 39.5273 33.1445 40.0123 33.048C40.4972 32.9516 40.9999 33.0011 41.4567 33.1903C41.9135 33.3795 42.304 33.6999 42.5787 34.1111C42.8534 34.5222 43 35.0055 43 35.5C43 36.163 42.7366 36.7989 42.2678 37.2678C41.7989 37.7366 41.163 38 40.5 38Z"
        fill={color}
      />
    </svg>
  );
};

IconEStepFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconEStepFilled.propTypes = {
  color: string,
  className: string,
};

export default IconEStepFilled;