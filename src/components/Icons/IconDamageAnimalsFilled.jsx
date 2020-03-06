import React from 'react';
import { string } from 'prop-types';

const IconDamageAnimalsFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>DamageAnimals</title>
      <path
        d="M26.59 41.77L29.68 42.12V42.49C29.6808 42.7476 29.5896 42.997 29.4227 43.1932C29.2558 43.3894 29.0244 43.5195 28.77 43.56L26.93 43.86C25.7946 44.05 24.6354 44.05 23.5 43.86L21.67 43.56C21.4147 43.5197 21.182 43.39 21.0135 43.194C20.845 42.998 20.7516 42.7485 20.75 42.49V42.12L23.85 41.77C24.7606 41.67 25.6794 41.67 26.59 41.77Z"
        fill={color}
      />
      <path
        d="M30.43 31.94L26.77 31.47C25.741 31.3366 24.699 31.3366 23.67 31.47L20 31.94C18.9776 32.0829 18.0467 32.6062 17.3932 33.4054C16.7398 34.2046 16.4119 35.2209 16.475 36.2513C16.5382 37.2817 16.9877 38.2504 17.7338 38.9639C18.48 39.6773 19.4678 40.083 20.5 40.1L23.82 39.73C24.7406 39.63 25.6694 39.63 26.59 39.73L29.92 40.1C30.9522 40.083 31.94 39.6773 32.6862 38.9639C33.4323 38.2504 33.8818 37.2817 33.945 36.2513C34.0081 35.2209 33.6802 34.2046 33.0268 33.4054C32.3733 32.6062 31.4424 32.0829 30.42 31.94H30.43ZM21 37C20.8022 37 20.6089 36.9414 20.4444 36.8315C20.28 36.7216 20.1518 36.5654 20.0761 36.3827C20.0004 36.2 19.9806 35.9989 20.0192 35.8049C20.0578 35.6109 20.153 35.4327 20.2929 35.2929C20.4327 35.153 20.6109 35.0578 20.8049 35.0192C20.9989 34.9806 21.2 35.0004 21.3827 35.0761C21.5654 35.1518 21.7216 35.28 21.8315 35.4444C21.9414 35.6089 22 35.8022 22 36C22 36.2652 21.8946 36.5196 21.7071 36.7071C21.5196 36.8946 21.2652 37 21 37ZM29 37C28.8022 37 28.6089 36.9414 28.4444 36.8315C28.28 36.7216 28.1518 36.5654 28.0761 36.3827C28.0004 36.2 27.9806 35.9989 28.0192 35.8049C28.0578 35.6109 28.153 35.4327 28.2929 35.2929C28.4327 35.153 28.6109 35.0578 28.8049 35.0192C28.9989 34.9806 29.2 35.0004 29.3827 35.0761C29.5654 35.1518 29.7216 35.28 29.8315 35.4444C29.9414 35.6089 30 35.8022 30 36C30 36.2652 29.8946 36.5196 29.7071 36.7071C29.5196 36.8946 29.2652 37 29 37Z"
        fill={color}
      />
      <path
        d="M42.84 15.16L36.5 12.63C35.9716 12.4303 35.3884 12.4303 34.86 12.63L33.39 13.17C33.5551 12.4584 33.639 11.7305 33.64 11C33.5456 9.18184 32.8611 7.44401 31.69 6.05C31.6717 6.02538 31.6462 6.00697 31.6171 5.99727C31.5879 5.98757 31.5565 5.98705 31.5271 5.99577C31.4976 6.0045 31.4716 6.02205 31.4524 6.04605C31.4333 6.07006 31.422 6.09936 31.42 6.13C31.3471 7.49953 31.0603 8.8492 30.57 10.13C30.1412 11.1153 29.5306 12.0109 28.77 12.77H28.4H22H21.5C20.7373 12.0089 20.1264 11.1096 19.7 10.12C19.1954 8.84254 18.9016 7.49163 18.83 6.12C18.8287 6.09146 18.8187 6.064 18.8013 6.04131C18.7839 6.01862 18.76 6.00179 18.7328 5.99308C18.7056 5.98437 18.6764 5.9842 18.6491 5.99259C18.6217 6.00098 18.5976 6.01752 18.58 6.04C17.3988 7.44745 16.7136 9.20448 16.63 11.04C16.633 11.7979 16.7236 12.5529 16.9 13.29L15.1 12.64C14.5716 12.4403 13.9884 12.4403 13.46 12.64L7.15 15.16C7.11114 15.1757 7.07707 15.2013 7.05117 15.2342C7.02528 15.2672 7.00846 15.3063 7.00239 15.3478C6.99632 15.3893 7.00122 15.4316 7.01659 15.4706C7.03196 15.5096 7.05727 15.5438 7.09 15.57L9.82 17.87C10.915 18.7899 12.2999 19.2928 13.73 19.29H15.67L15.31 19.89C14.831 20.7131 14.5191 21.6225 14.3921 22.5663C14.2651 23.5101 14.3256 24.4696 14.57 25.39L16.21 31.59C17.0849 30.8699 18.1458 30.4122 19.27 30.27L23.32 29.75C24.5816 29.59 25.8584 29.59 27.12 29.75L31.12 30.27C32.2465 30.4146 33.31 30.8719 34.19 31.59L35.83 25.39C36.0737 24.4686 36.1319 23.5079 36.0015 22.5638C35.871 21.6197 35.5544 20.7108 35.07 19.89L34.72 19.29H36.22C37.6527 19.2909 39.0402 18.7883 40.14 17.87L42.87 15.57C42.9038 15.5461 42.9308 15.5139 42.9485 15.4765C42.9661 15.4391 42.9738 15.3978 42.9708 15.3565C42.9678 15.3153 42.9541 15.2755 42.9312 15.2411C42.9083 15.2066 42.8769 15.1787 42.84 15.16ZM20.27 25C19.9193 24.9996 19.5748 24.9071 19.2712 24.7315C18.9675 24.556 18.7154 24.3037 18.54 24C18.7158 23.6969 18.9682 23.4454 19.2718 23.2705C19.5754 23.0956 19.9196 23.0035 20.27 23.0035C20.6204 23.0035 20.9646 23.0956 21.2682 23.2705C21.5718 23.4454 21.8242 23.6969 22 24C21.8246 24.3037 21.5725 24.556 21.2688 24.7315C20.9652 24.9071 20.6207 24.9996 20.27 25ZM29.73 25C29.3793 24.9996 29.0348 24.9071 28.7312 24.7315C28.4275 24.556 28.1754 24.3037 28 24C28.1758 23.6969 28.4282 23.4454 28.7318 23.2705C29.0354 23.0956 29.3796 23.0035 29.73 23.0035C30.0804 23.0035 30.4246 23.0956 30.7282 23.2705C31.0318 23.4454 31.2842 23.6969 31.46 24C31.2846 24.3037 31.0325 24.556 30.7288 24.7315C30.4252 24.9071 30.0807 24.9996 29.73 25Z"
        fill={color}
      />
    </svg>
  );
};

IconDamageAnimalsFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDamageAnimalsFilled.propTypes = {
  color: string,
  className: string,
};

export default IconDamageAnimalsFilled;