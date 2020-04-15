import React from 'react';
import { string, number } from 'prop-types';

const IconCompanyCar = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>IconCompanyCar</title>
      <path
        d="M39.2857 21.1429H35L31.1286 14.7C31.0026 14.4876 30.8238 14.3114 30.6095 14.1887C30.3951 14.0661 30.1527 14.001 29.9057 14H6.42857C6.04969 14 5.68633 14.1505 5.41842 14.4184C5.15051 14.6863 5 15.0497 5 15.4286V29.7143C5 30.0932 5.15051 30.4565 5.41842 30.7244C5.68633 30.9923 6.04969 31.1429 6.42857 31.1429H7.85714C7.85714 29.6273 8.45918 28.1739 9.53082 27.1022C10.6025 26.0306 12.0559 25.4286 13.5714 25.4286C15.087 25.4286 16.5404 26.0306 17.612 27.1022C18.6837 28.1739 19.2857 29.6273 19.2857 31.1429H29.2857C29.2857 29.6273 29.8878 28.1739 30.9594 27.1022C32.031 26.0306 33.4845 25.4286 35 25.4286C36.5155 25.4286 37.969 26.0306 39.0406 27.1022C40.1122 28.1739 40.7143 29.6273 40.7143 31.1429H43.5714C43.9503 31.1429 44.3137 30.9923 44.5816 30.7244C44.8495 30.4565 45 30.0932 45 29.7143V26.8571C45 25.3416 44.398 23.8882 43.3263 22.8165C42.2547 21.7449 40.8012 21.1429 39.2857 21.1429ZM13.2857 15.7143H13.3029H19.2857V21.1429H7C6.90432 21.1432 6.80881 21.1509 6.71429 21.1657V15.7143H13.2857ZM23.3629 23.8029C23.2268 23.9326 23.0451 24.0034 22.8571 24H21.4743C21.2894 24.005 21.1092 23.9411 20.9687 23.8207C20.8283 23.7004 20.7376 23.5321 20.7143 23.3486C20.7055 23.2496 20.7175 23.1499 20.7495 23.0559C20.7815 22.9618 20.8327 22.8755 20.8999 22.8023C20.9671 22.7292 21.0489 22.6709 21.1399 22.6311C21.2309 22.5914 21.3292 22.571 21.4286 22.5714H22.8114C22.9999 22.567 23.183 22.634 23.324 22.7591C23.465 22.8842 23.5534 23.0581 23.5714 23.2457C23.5784 23.3481 23.5633 23.4507 23.5274 23.5468C23.4914 23.6429 23.4353 23.7302 23.3629 23.8029V23.8029ZM27.8571 21.1429H20.7143V15.7143H27.8571V21.1429ZM29.2857 21.1429V15.7143H29.7429L33.0171 21.1429H29.2857Z"
        fill={color}
      />
      <path
        d="M17.8572 31.1429C17.8572 30.2952 17.6058 29.4666 17.1349 28.7618C16.664 28.0571 15.9946 27.5078 15.2115 27.1834C14.4284 26.859 13.5667 26.7741 12.7353 26.9395C11.904 27.1049 11.1403 27.513 10.541 28.1124C9.94161 28.7118 9.53344 29.4754 9.36807 30.3068C9.20271 31.1381 9.28758 31.9998 9.61195 32.7829C9.93633 33.566 10.4856 34.2354 11.1904 34.7063C11.8952 35.1772 12.7238 35.4286 13.5714 35.4286C14.7081 35.4286 15.7982 34.977 16.6019 34.1733C17.4056 33.3696 17.8572 32.2795 17.8572 31.1429ZM11.5714 31.1429C11.5714 30.7473 11.6887 30.3606 11.9085 30.0317C12.1283 29.7028 12.4406 29.4465 12.8061 29.2951C13.1715 29.1437 13.5737 29.1041 13.9616 29.1813C14.3496 29.2585 14.7059 29.4489 14.9856 29.7287C15.2654 30.0084 15.4558 30.3647 15.533 30.7527C15.6102 31.1406 15.5706 31.5428 15.4192 31.9082C15.2678 32.2737 15.0115 32.586 14.6826 32.8058C14.3537 33.0256 13.967 33.1429 13.5714 33.1429C13.041 33.1429 12.5323 32.9321 12.1572 32.5571C11.7822 32.182 11.5714 31.6733 11.5714 31.1429V31.1429Z"
        fill={color}
      />
      <path
        d="M35 35.4286C35.8476 35.4286 36.6762 35.1772 37.381 34.7063C38.0858 34.2354 38.6351 33.566 38.9595 32.7829C39.2839 31.9998 39.3687 31.1381 39.2034 30.3068C39.038 29.4754 38.6298 28.7118 38.0305 28.1124C37.4311 27.513 36.6675 27.1049 35.8361 26.9395C35.0048 26.7741 34.143 26.859 33.3599 27.1834C32.5768 27.5078 31.9075 28.0571 31.4366 28.7618C30.9656 29.4666 30.7143 30.2952 30.7143 31.1429C30.7143 32.2795 31.1658 33.3696 31.9695 34.1733C32.7733 34.977 33.8634 35.4286 35 35.4286ZM35 29.1429C35.3956 29.1429 35.7823 29.2602 36.1111 29.4799C36.44 29.6997 36.6964 30.012 36.8478 30.3775C36.9991 30.7429 37.0387 31.1451 36.9616 31.533C36.8844 31.921 36.6939 32.2774 36.4142 32.5571C36.1345 32.8368 35.7782 33.0273 35.3902 33.1044C35.0022 33.1816 34.6001 33.142 34.2346 32.9906C33.8692 32.8392 33.5568 32.5829 33.3371 32.254C33.1173 31.9251 33 31.5384 33 31.1429C33 30.6124 33.2107 30.1037 33.5858 29.7287C33.9609 29.3536 34.4696 29.1429 35 29.1429Z"
        fill={color}
      />
      <path
        d="M13.5714 18.2857V17.0343C13.5707 16.987 13.5514 16.942 13.5177 16.9088C13.484 16.8757 13.4387 16.8571 13.3914 16.8571H10.8914C10.8445 16.8571 10.7994 16.8758 10.7662 16.909C10.733 16.9422 10.7143 16.9873 10.7143 17.0343V18.2857H8.03429C7.98731 18.2857 7.94225 18.3044 7.90903 18.3376C7.87581 18.3708 7.85715 18.4159 7.85715 18.4629V21.1429H16.4286V18.4629C16.4278 18.4156 16.4085 18.3706 16.3749 18.3374C16.3412 18.3043 16.2958 18.2857 16.2486 18.2857H13.5714ZM11.4286 17.5714H12.8571V18.2857H11.4286V17.5714Z"
        fill={color}
      />
    </svg>
  );
};

IconCompanyCar.defaultProps = {
  color: 'black',
  size: 30,
};

IconCompanyCar.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconCompanyCar;