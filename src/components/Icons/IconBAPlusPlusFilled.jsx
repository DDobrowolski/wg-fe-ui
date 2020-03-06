import React from 'react';
import { string } from 'prop-types';

const IconBAPlusPlusFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>BAPlusPlus</title>
      <path
        d="M42.31 26C41.4012 26.0827 40.5566 26.5038 39.9435 27.1798C39.3305 27.8558 38.9937 28.7374 39 29.65V35.46C39 35.5926 39.0527 35.7198 39.1464 35.8135C39.2402 35.9073 39.3674 35.96 39.5 35.96H41V45.46C41 45.5926 41.0527 45.7198 41.1464 45.8135C41.2402 45.9073 41.3674 45.96 41.5 45.96H43.5C43.6326 45.96 43.7598 45.9073 43.8536 45.8135C43.9473 45.7198 44 45.5926 44 45.46V36H45.5C45.6326 36 45.7598 35.9473 45.8536 35.8535C45.9473 35.7598 46 35.6326 46 35.5V29.5C45.9993 29.0244 45.9019 28.5538 45.7137 28.117C45.5256 27.6801 45.2506 27.2861 44.9055 26.9587C44.5604 26.6314 44.1524 26.3776 43.7062 26.2128C43.26 26.048 42.785 25.9756 42.31 26Z"
        fill={color}
      />
      <path
        d="M36 29.62C35.9113 29.4111 35.7745 29.2261 35.6007 29.0801C35.4269 28.9341 35.2211 28.8313 35 28.78L32.91 28.33L16.69 24.81C16.359 24.7446 16.0655 24.555 15.87 24.28L12.15 19.28C12.0368 19.1423 11.8827 19.0443 11.71 19L8.49 18.4C7.56 18.24 6.63 18.08 5.69 17.96C5.60345 17.9485 5.51544 17.9558 5.43193 17.9813C5.34843 18.0068 5.27136 18.0499 5.20595 18.1077C5.14054 18.1655 5.0883 18.2367 5.05277 18.3165C5.01724 18.3962 4.99925 18.4827 5 18.57V40H18C18 41.7239 18.6848 43.3772 19.9038 44.5962C21.1228 45.8152 22.7761 46.5 24.5 46.5C26.2239 46.5 27.8772 45.8152 29.0962 44.5962C30.3152 43.3772 31 41.7239 31 40H35.51C35.7566 39.7967 35.9317 39.5199 36.01 39.21C36.5152 37.2369 36.8893 35.2325 37.13 33.21C36.9197 31.9672 36.5394 30.7592 36 29.62ZM24.5 43C23.6522 43.0087 22.8301 42.7093 22.1864 42.1576C21.5426 41.6058 21.1211 40.8391 21 40C20.9848 39.8337 20.9848 39.6663 21 39.5C21 38.5717 21.3687 37.6815 22.0251 37.0251C22.6815 36.3687 23.5717 36 24.5 36C25.4283 36 26.3185 36.3687 26.9749 37.0251C27.6313 37.6815 28 38.5717 28 39.5C28.0152 39.6663 28.0152 39.8337 28 40C27.8789 40.8391 27.4574 41.6058 26.8136 42.1576C26.1699 42.7093 25.3478 43.0087 24.5 43Z"
        fill={color}
      />
      <path
        d="M42.05 13.32C41.8111 13.0753 41.4971 12.9178 41.1581 12.8725C40.8192 12.8272 40.4748 12.8967 40.18 13.07L34.49 16.39L32 8.58C31.9031 8.24378 31.6947 7.95057 31.4089 7.74864C31.1232 7.54671 30.7772 7.4481 30.4279 7.46906C30.0787 7.49001 29.747 7.62928 29.4874 7.86393C29.2279 8.09858 29.056 8.41461 29 8.76L27.32 17.33L21.86 14.14C21.5568 13.9613 21.2014 13.8926 20.8534 13.9454C20.5055 13.9982 20.1865 14.1694 19.95 14.43C19.7137 14.6911 19.5707 15.0233 19.5436 15.3744C19.5164 15.7255 19.6066 16.0757 19.8 16.37L24 22.79C24.1093 22.9634 24.2526 23.113 24.4212 23.2296C24.5898 23.3462 24.7803 23.4275 24.9811 23.4687C25.182 23.5098 25.3891 23.5098 25.59 23.4688C25.7908 23.4278 25.9813 23.3466 26.15 23.23C26.4894 22.9949 26.724 22.637 26.8042 22.232C26.8845 21.8271 26.8041 21.4068 26.58 21.06L26 20.18L27.66 21.18C27.8721 21.3049 28.1116 21.3757 28.3575 21.3862C28.6034 21.3966 28.8481 21.3464 29.07 21.24C29.2946 21.1359 29.4914 20.9802 29.6443 20.7855C29.7973 20.5909 29.902 20.3628 29.95 20.12L30.95 15.25L32.25 19.25C32.3173 19.4756 32.4352 19.6829 32.5946 19.8562C32.754 20.0295 32.9508 20.1641 33.17 20.25C33.3835 20.3332 33.6129 20.3675 33.8414 20.3502C34.0698 20.3328 34.2915 20.2644 34.49 20.15L36.91 18.73L35.52 21.22C35.3283 21.563 35.2713 21.965 35.36 22.3477C35.4488 22.7305 35.677 23.0664 36 23.29C36.2328 23.4287 36.499 23.5013 36.77 23.5C37.0456 23.4978 37.3158 23.4226 37.5529 23.2821C37.7901 23.1416 37.9857 22.9407 38.12 22.7L42.31 15.2C42.4745 14.9003 42.5381 14.5556 42.4913 14.217C42.4444 13.8783 42.2897 13.5638 42.05 13.32Z"
        fill={color}
      />
    </svg>
  );
};

IconBAPlusPlusFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconBAPlusPlusFilled.propTypes = {
  color: string,
  className: string,
};

export default IconBAPlusPlusFilled;