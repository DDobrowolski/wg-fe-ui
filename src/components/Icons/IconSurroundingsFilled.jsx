import React from 'react';
import { string } from 'prop-types';

const IconSurroundingsFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Surroundings</title>
      <path
        d="M11.84 35.57V31.92L15.4 28.35L14.18 27.14L11.84 29.48V25.82C13.277 25.5775 14.5824 24.8358 15.5263 23.7255C16.4702 22.6151 16.9921 21.2073 17 19.75C16.9929 18.3355 16.4945 16.9675 15.59 15.88C15.45 15.72 15.33 15.54 15.17 15.38C15.01 15.22 14.82 15.09 14.65 14.95C13.748 14.2157 12.6558 13.7531 11.5008 13.6164C10.3458 13.4796 9.17572 13.6742 8.12719 14.1775C7.07865 14.6808 6.19494 15.472 5.57923 16.4587C4.96353 17.4454 4.64124 18.587 4.65 19.75C4.65596 21.2079 5.17712 22.6167 6.12136 23.7274C7.0656 24.8382 8.37213 25.5794 9.81 25.82V34.73C9.33524 34.6142 8.84866 34.5538 8.36 34.55C6.66169 34.5632 5.03805 35.2499 3.84559 36.4592C2.65314 37.6685 1.98935 39.3017 2 41H14.79C14.7967 39.9195 14.5296 38.8548 14.0138 37.9054C13.498 36.9559 12.7501 36.1525 11.84 35.57Z"
        fill={color}
      />
      <path
        d="M47.47 41H44.47C44.3374 41 44.2102 40.9473 44.1164 40.8536C44.0227 40.7598 43.97 40.6326 43.97 40.5V36.76C43.97 36.6797 43.9894 36.6006 44.0264 36.5294C44.0635 36.4582 44.1171 36.397 44.1829 36.3509C44.2486 36.3048 44.3244 36.2752 44.404 36.2646C44.4836 36.254 44.5645 36.2627 44.64 36.29C45.5322 36.592 46.321 37.1399 46.9154 37.8706C47.5099 38.6013 47.8858 39.485 48 40.42C48.0104 40.4943 48.0043 40.57 47.982 40.6417C47.9598 40.7134 47.922 40.7792 47.8714 40.8346C47.8208 40.89 47.7586 40.9336 47.6892 40.9622C47.6198 40.9907 47.545 41.0037 47.47 41Z"
        fill={color}
      />
      <path
        d="M41.56 18.56L38 16.17V10.81C38 10.5448 37.8946 10.2904 37.7071 10.1029C37.5196 9.91536 37.2652 9.81 37 9.81H33C32.7348 9.81 32.4804 9.91536 32.2929 10.1029C32.1054 10.2904 32 10.5448 32 10.81V12.15L27.55 9.15C27.3867 9.04248 27.1955 8.98517 27 8.98517C26.8045 8.98517 26.6133 9.04248 26.45 9.15L17.54 15.15C18.4886 16.4965 18.9985 18.1029 19 19.75C19.0078 20.9642 18.7421 22.1645 18.2228 23.262C17.7035 24.3595 16.9438 25.3261 16 26.09L16.84 26.94L18.12 28.21C18.1394 28.2278 18.1549 28.2494 18.1655 28.2735C18.1761 28.2976 18.1815 28.3237 18.1815 28.35C18.1815 28.3763 18.1761 28.4024 18.1655 28.4265C18.1549 28.4506 18.1394 28.4722 18.12 28.49L16.84 29.77L13.9 32.68C13.8623 32.7169 13.8407 32.7673 13.84 32.82V34.48C13.8388 34.5088 13.8445 34.5374 13.8567 34.5635C13.8689 34.5896 13.8872 34.6124 13.91 34.63C14.8198 35.4223 15.548 36.4015 16.0451 37.5008C16.5421 38.6 16.7962 39.7936 16.79 41H19V31C19 30.7348 19.1054 30.4804 19.2929 30.2929C19.4804 30.1054 19.7348 30 20 30H25C25.2652 30 25.5196 30.1054 25.7071 30.2929C25.8946 30.4804 26 30.7348 26 31V41H41C41.2652 41 41.5196 40.8946 41.7071 40.7071C41.8946 40.5196 42 40.2652 42 40V19.4C42.0019 19.2345 41.9627 19.0711 41.8859 18.9245C41.8091 18.7779 41.6971 18.6527 41.56 18.56Z"
        fill={color}
      />
    </svg>
  );
};

IconSurroundingsFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconSurroundingsFilled.propTypes = {
  color: string,
  className: string,
};

export default IconSurroundingsFilled;