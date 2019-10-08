import React from 'react';
import { string } from 'prop-types';

const Opened = ({ className, width = 15, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        d="M3.35336 9.30683V9.80683H3.85336H13.9469V19.04H0.5V9.80683H1.92774H2.42774V9.30683V4.42936C2.42774 2.26306 4.1908 0.5 6.35709 0.5H8.09037C10.2567 0.5 12.0197 2.26306 12.0197 4.42936C12.0197 4.68482 11.8124 4.89217 11.5569 4.89217C11.3014 4.89217 11.0941 4.68482 11.0941 4.42936C11.0941 2.77234 9.74672 1.42562 8.09037 1.42562H6.35709C4.70008 1.42562 3.35336 2.77301 3.35336 4.42936V9.30683ZM8.55073 16.4127V15.4699C9.17409 15.0456 9.58541 14.3305 9.58541 13.5169C9.58541 12.2123 8.52759 11.1552 7.22373 11.1552C5.91925 11.1552 4.86205 12.2124 4.86205 13.5169C4.86205 14.3303 5.2728 15.0455 5.8962 15.4699V16.4127C5.8962 17.146 6.49049 17.7403 7.22373 17.7403C7.95665 17.7403 8.55073 17.1458 8.55073 16.4127Z"
        fill="#5B5550"
        stroke="#5B5550"
      />
    </svg>
  );
};

Opened.propTypes = {
  className: string
};

export default Opened;