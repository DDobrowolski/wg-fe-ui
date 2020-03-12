import React from 'react';
import { string } from 'prop-types';

const IconBlindSpotFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>BlindSpot</title>
      <path
        d="M23 23.85C21.2954 23.8495 19.6326 24.377 18.24 25.36C18.1607 25.4131 18.1051 25.4947 18.0846 25.5879C18.0641 25.6811 18.0803 25.7786 18.13 25.86L19.46 28.05C19.4883 28.0936 19.5249 28.131 19.5679 28.1602C19.6108 28.1894 19.6591 28.2097 19.71 28.22C19.8036 28.2544 19.9064 28.2544 20 28.22C20.9137 27.591 22.002 27.2651 23.111 27.2885C24.22 27.3118 25.2936 27.6831 26.18 28.35C26.242 28.4011 26.3197 28.4294 26.4 28.43H26.47C26.57 28.4089 26.6589 28.352 26.72 28.27L28.13 26.13C28.1817 26.0509 28.2011 25.9551 28.1844 25.8621C28.1676 25.7692 28.116 25.6861 28.04 25.63C26.6045 24.4931 24.8311 23.8668 23 23.85Z"
        fill={color}
      />
      <path
        d="M31.23 21.55C28.9608 19.7055 26.1389 18.6747 23.215 18.6221C20.2912 18.5695 17.4341 19.4983 15.1 21.26C15.0236 21.3179 14.9711 21.4018 14.9527 21.4959C14.9342 21.59 14.9511 21.6876 15 21.77L16.4 23.91C16.4263 23.9552 16.4624 23.994 16.5057 24.0234C16.549 24.0528 16.5983 24.0722 16.65 24.08C16.7521 24.096 16.8564 24.0708 16.94 24.01C18.731 22.6618 20.9214 21.9511 23.1629 21.991C25.4043 22.0308 27.568 22.8189 29.31 24.23C29.3721 24.2886 29.4546 24.3209 29.54 24.32H29.59C29.6414 24.3146 29.6911 24.2984 29.7359 24.2726C29.7807 24.2467 29.8195 24.2118 29.85 24.17L31.31 22.07C31.3663 21.9897 31.3895 21.8908 31.3745 21.7939C31.3596 21.697 31.3078 21.6096 31.23 21.55Z"
        fill={color}
      />
      <path
        d="M45.46 18.39H42.76C42.4744 18.3926 42.2012 18.5072 41.9992 18.7092C41.7972 18.9112 41.6826 19.1844 41.68 19.47V20.55C41.6813 21.1168 41.5708 21.6784 41.3548 22.2024C41.1388 22.7265 40.8215 23.2028 40.4212 23.6041C40.0208 24.0054 39.5452 24.3237 39.0217 24.541C38.4981 24.7582 37.9368 24.87 37.37 24.87V20.55C37.37 18.5476 36.5746 16.6272 35.1587 15.2113C33.7428 13.7954 31.8224 13 29.82 13H21.18C16.8896 13.0026 12.7757 14.7082 9.74194 17.7419C6.70817 20.7757 5.00265 24.8896 5 29.18V30.26C5 30.6855 5.0838 31.1068 5.24663 31.4999C5.40946 31.893 5.64811 32.2502 5.94897 32.551C6.24984 32.8519 6.60701 33.0905 7.00011 33.2534C7.3932 33.4162 7.81452 33.5 8.24 33.5H37.37C37.9368 33.5 38.4981 33.6118 39.0217 33.829C39.5452 34.0463 40.0208 34.3646 40.4212 34.7659C40.8215 35.1672 41.1388 35.6435 41.3548 36.1676C41.5708 36.6916 41.6813 37.2532 41.68 37.82V40C41.68 40.2864 41.7938 40.5611 41.9963 40.7637C42.1989 40.9662 42.4736 41.08 42.76 41.08H45.46C45.5313 41.0814 45.6021 41.0683 45.6682 41.0417C45.7344 41.015 45.7944 40.9753 45.8449 40.9249C45.8953 40.8744 45.935 40.8144 45.9617 40.7482C45.9883 40.6821 46.0014 40.6113 46 40.54V18.93C46 18.7868 45.9431 18.6494 45.8418 18.5482C45.7406 18.4469 45.6032 18.39 45.46 18.39ZM34.13 30.26H8.24V29.18C8.25578 25.753 9.62417 22.4708 12.0475 20.0475C14.4708 17.6242 17.753 16.2558 21.18 16.24H29.82C30.9631 16.24 32.0593 16.6941 32.8676 17.5024C33.6759 18.3107 34.13 19.4069 34.13 20.55V30.26Z"
        fill={color}
      />
    </svg>
  );
};

IconBlindSpotFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconBlindSpotFilled.propTypes = {
  color: string,
  className: string,
};

export default IconBlindSpotFilled;
