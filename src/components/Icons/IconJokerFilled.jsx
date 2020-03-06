import React from 'react';
import { string } from 'prop-types';

const IconJokerFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Joker</title>
      <path
        d="M28.68 44C28.7501 44.0004 28.8195 43.986 28.8836 43.9578C28.9478 43.9296 29.0053 43.8882 29.0525 43.8363C29.0996 43.7845 29.1353 43.7233 29.1573 43.6567C29.1793 43.5902 29.187 43.5197 29.18 43.45C28.87 40.45 26.74 25.67 14.41 22.82C12.6153 22.4245 10.7716 22.2998 8.94 22.45C8.81061 21.7666 8.44781 21.1495 7.91365 20.7041C7.37949 20.2586 6.70716 20.0127 6.01167 20.0082C5.31618 20.0037 4.64075 20.241 4.1009 20.6795C3.56106 21.118 3.19034 21.7305 3.05217 22.4121C2.914 23.0938 3.01696 23.8022 3.34344 24.4164C3.66991 25.0305 4.19962 25.5121 4.84196 25.7788C5.48429 26.0455 6.19933 26.0807 6.86478 25.8785C7.53022 25.6762 8.10472 25.249 8.49 24.67C15 30.2 15.09 41 15 43.49C14.9987 43.5565 15.0106 43.6226 15.0352 43.6844C15.0597 43.7462 15.0963 43.8025 15.1429 43.85C15.1894 43.8975 15.245 43.9353 15.3063 43.961C15.3676 43.9868 15.4335 44 15.5 44H28.68Z"
        fill={color}
      />
      <path
        d="M44.47 20C43.6881 19.8788 42.89 20.0715 42.2495 20.536C41.6089 21.0004 41.1778 21.6992 41.05 22.48C39.6864 22.5229 38.3302 22.697 37 23C34 23.7 30.58 25.45 27.13 29.66C27.0649 29.7503 27.0299 29.8587 27.0299 29.97C27.0299 30.0813 27.0649 30.1897 27.13 30.28C29.68 33.77 31.24 38.72 31.95 43.58C31.9689 43.6966 32.0285 43.8028 32.1182 43.8796C32.2078 43.9565 32.3219 43.9992 32.44 44H35.59C35.7111 43.9985 35.8275 43.953 35.9177 43.8721C36.0078 43.7911 36.0655 43.6803 36.08 43.56C36.99 36.56 38.75 30.21 42.63 25.64C43.0524 25.8652 43.5215 25.9884 44 26C44.7956 26.0623 45.5835 25.806 46.1901 25.2875C46.7968 24.769 47.1727 24.0306 47.235 23.235C47.2973 22.4394 47.041 21.6515 46.5225 21.0448C46.0039 20.4382 45.2656 20.0623 44.47 20ZM33.89 38.26C33.1707 35.458 32.074 32.7667 30.63 30.26C32.4896 28.1715 34.9249 26.679 37.63 25.97C37.93 25.9 38.3 25.83 38.7 25.77C36.3059 29.584 34.6725 33.8253 33.89 38.26Z"
        fill={color}
      />
      <path
        d="M32 8C32 7.20435 31.6839 6.44129 31.1213 5.87868C30.5587 5.31607 29.7956 5 29 5C28.2044 5 27.4413 5.31607 26.8787 5.87868C26.3161 6.44129 26 7.20435 26 8C26.0068 8.67789 26.2429 9.33351 26.67 9.86C25.4234 11.248 24.321 12.7591 23.38 14.37C21.819 16.9572 20.6782 19.7755 20 22.72C19.9622 22.8685 19.9697 23.025 20.0213 23.1693C20.073 23.3136 20.1665 23.4392 20.29 23.53C22.1825 24.7018 23.8882 26.1513 25.35 27.83C25.3955 27.881 25.4509 27.9224 25.5127 27.9516C25.5746 27.9808 25.6417 27.9973 25.71 28C25.7795 27.9978 25.8476 27.9806 25.9098 27.9496C25.9719 27.9185 26.0266 27.8743 26.07 27.82C27.3794 26.1687 28.9381 24.7314 30.69 23.56C30.8269 23.4508 30.923 23.2986 30.9629 23.1281C31.0028 22.9576 30.9842 22.7786 30.91 22.62C29.3847 18.9488 28.807 14.9529 29.23 11C29.9851 10.9419 30.6904 10.6004 31.2041 10.044C31.7179 9.48753 32.0022 8.75736 32 8ZM25.65 23.83C24.9125 23.1501 24.1344 22.5156 23.32 21.93C23.9379 19.8263 24.8218 17.81 25.95 15.93L26.18 15.56C26.349 17.8026 26.8061 20.0141 27.54 22.14C26.8809 22.6699 26.25 23.234 25.65 23.83Z"
        fill={color}
      />
    </svg>
  );
};

IconJokerFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconJokerFilled.propTypes = {
  color: string,
  className: string,
};

export default IconJokerFilled;