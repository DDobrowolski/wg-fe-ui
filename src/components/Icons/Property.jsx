import React from 'react';
import { string, number } from 'prop-types';

const Plane = ({ className, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path d="M63 20.5389V63.7133C63 64.4282 62.4307 65 61.7191 65H38.7583C38.5211 65 38.3313 64.857 38.2364 64.7141C38.189 64.6188 38.1416 64.5235 38.1416 64.3805V44.8424C38.1416 44.1276 37.5723 43.5557 36.8607 43.5557H26.0919C25.8547 43.5557 25.6175 43.651 25.4277 43.7463C25.0956 43.9846 24.8584 44.3658 24.8584 44.8424V64.3328C24.8584 64.6664 24.5738 64.9523 24.2417 64.9523H1.23343C0.901356 64.9523 0.616717 64.857 0.426958 64.6664C0.142319 64.4282 0 64.0946 0 63.7133V20.5389C0 20.11 0.237199 19.6811 0.569277 19.4428L19.4029 7.52933L20.7312 6.67155L28.7011 1.66789L30.9782 0.23827C31.1679 0.047654 31.4051 0 31.6423 0C31.8795 0 32.1167 0.047654 32.3065 0.190616L34.9157 1.8585L43.3125 7.2434L44.1664 7.81525L45.0203 8.3871V2.85924C45.0203 2.14443 45.5896 1.57258 46.3012 1.57258H52.6107C52.8953 1.57258 53.18 1.66789 53.4172 1.8585C53.7018 2.09677 53.8916 2.43035 53.8916 2.85924V14.0579L62.3833 19.4905C62.7628 19.7287 63 20.11 63 20.5389Z" />
    </svg>
  );
};

Plane.defaultProps = {
  width: 63,
  height: 65,
};

Plane.propTypes = {
  width: number,
  height: number,
  className: string,
};

export default Plane;
