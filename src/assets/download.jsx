import React from 'react';
import { string } from 'prop-types';
const Download = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.97215 7.28859C4.37918 8.69386 5.71587 10.0289 6.94702 11.2585C8.21335 9.99373 9.55004 8.67629 10.8867 7.35885C10.148 7.35885 9.33898 7.35885 8.38923 7.35885C8.38923 6.62108 8.38923 5.93601 8.38923 5.25095C8.38923 4.1443 8.38923 3.02008 8.38923 1.91343C8.38923 1.29862 8.09024 1.00001 7.47466 1.00001C7.17566 1.00001 6.89426 1.01757 6.59526 1.00001C5.83898 0.947307 5.55757 1.33376 5.55757 2.05396C5.57516 3.77541 5.55757 5.49687 5.55757 7.28859C4.67818 7.28859 3.83396 7.28859 2.97215 7.28859Z"
        fill="#505050"
      />
      <path
        d="M14 15C14 14.5608 14 14.1744 14 13.7352C9.35678 13.7352 4.71357 13.7352 0 13.7352C0 14.1217 0 14.5433 0 15C4.6608 15 9.32161 15 14 15Z"
        fill="#505050"
      />
    </svg>
  );
};

Download.propTypes = {
  className: string.isRequired,
};
export default Download;