import React from 'react';
import { string } from 'prop-types';

const IconDisabilityFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Disability</title>
      <path
        d="M29.9 36.88C29.3181 38.1168 28.4665 39.2076 27.4078 40.0722C26.3491 40.9367 25.1101 41.5531 23.7819 41.876C22.4537 42.1988 21.07 42.22 19.7325 41.938C18.395 41.656 17.1377 41.0779 16.053 40.2462C14.9683 39.4144 14.0837 38.3503 13.4642 37.1318C12.8447 35.9134 12.506 34.5716 12.4731 33.2051C12.4402 31.8386 12.7139 30.4821 13.274 29.2353C13.8342 27.9884 14.6666 26.8829 15.71 26C15.9101 25.8274 16.0722 25.6152 16.1861 25.3768C16.3 25.1383 16.3632 24.8788 16.3716 24.6147C16.3801 24.3506 16.3336 24.0877 16.2353 23.8424C16.1369 23.5972 15.9887 23.375 15.8 23.19C15.4662 22.8505 15.0176 22.648 14.5421 22.6221C14.0667 22.5962 13.5988 22.7488 13.23 23.05C11.7507 24.3035 10.5705 25.872 9.77588 27.6406C8.98126 29.4093 8.59234 31.3333 8.63761 33.2718C8.68287 35.2102 9.16118 37.1139 10.0375 38.8436C10.9138 40.5732 12.1659 42.0849 13.7021 43.268C15.2384 44.451 17.0198 45.2755 18.9159 45.6809C20.812 46.0863 22.7748 46.0625 24.6604 45.6111C26.5461 45.1597 28.307 44.2922 29.814 43.0722C31.321 41.8521 32.536 40.3104 33.37 38.56C33.542 38.2031 33.5988 37.8016 33.5326 37.411C33.4663 37.0204 33.2802 36.6601 33 36.38C32.7861 36.1575 32.5214 35.9902 32.2287 35.8923C31.9359 35.7945 31.6238 35.769 31.3191 35.8182C31.0143 35.8673 30.7261 35.9896 30.4789 36.1745C30.2318 36.3595 30.0331 36.6015 29.9 36.88Z"
        fill={color}
      />
      <path
        d="M22.52 11C24.1768 11 25.52 9.65685 25.52 8C25.52 6.34315 24.1768 5 22.52 5C20.8631 5 19.52 6.34315 19.52 8C19.52 9.65685 20.8631 11 22.52 11Z"
        fill={color}
      />
      <path
        d="M41.81 35.44L38.36 27.85C38.0993 27.2772 37.7072 26.7741 37.2154 26.3814C36.7237 25.9887 36.1462 25.7175 35.53 25.59L27.3 23.87L27.16 22H32C32.3978 22 32.7793 21.842 33.0606 21.5607C33.342 21.2794 33.5 20.8978 33.5 20.5C33.5 20.1022 33.342 19.7206 33.0606 19.4393C32.7793 19.158 32.3978 19 32 19H27L26.86 17C26.7981 15.9829 26.3753 15.0213 25.6677 14.2881C24.9602 13.5548 24.0142 13.0981 23 13C22.4317 12.9573 21.8606 13.0324 21.3227 13.2207C20.7847 13.4089 20.2914 13.7062 19.8737 14.0939C19.456 14.4816 19.1228 14.9514 18.895 15.4738C18.6672 15.9962 18.5498 16.5601 18.55 17.13V26C18.55 27.0609 18.9714 28.0783 19.7216 28.8284C20.4717 29.5786 21.4891 30 22.55 30H33.93C34.1072 30.0003 34.2811 30.0477 34.434 30.1373C34.5869 30.2269 34.7132 30.3555 34.8 30.51L38.54 37.23C38.6688 37.4651 38.8471 37.6693 39.0626 37.8287C39.2782 37.988 39.5258 38.0986 39.7883 38.1528C40.0508 38.2071 40.3219 38.2036 40.5829 38.1427C40.8439 38.0817 41.0886 37.9648 41.3 37.8C41.6305 37.5159 41.8592 37.1316 41.9513 36.7056C42.0434 36.2796 41.9937 35.8352 41.81 35.44Z"
        fill={color}
      />
    </svg>
  );
};

IconDisabilityFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDisabilityFilled.propTypes = {
  color: string,
  className: string,
};

export default IconDisabilityFilled;