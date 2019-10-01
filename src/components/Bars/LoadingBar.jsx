import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';

const getActiveId = (active, stages) => {
    return stages ? stages.findIndex(item => item.key === active) : null;
}

const ProgressTrack = styled.div`
  position: absolute;
  width: 100%;
  min-width: 574px;
  height: ${({ height }) => height || '5px'};
  background-color: #C4C4C4;
  @media (max-width: 1200px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: ${({ height }) => height || '5px'};
    background-color: #FF8000;
    width: ${({ activeId, stages }) => (stages ? `${activeId * (100/stages.length)}%` : '0')};
  }
`;

const LoadingBar = ({ active, stages, height }) => {
    const activeId = getActiveId(active, stages) + 1;
  return (
      <ProgressTrack activeId={activeId} stages={stages} height={height} />
  );
};

LoadingBar.defaultProps = {
  activeId: 1,
  stages: [
    { 
      key: 'start', 
      name: 'start', 
      id: 1 
    },
    {
      key: 'middle',
      name: 'middle',
      id: 2
    },
    {
      key: 'end',
      name: 'end',
      id: 3
    }
  ]
}

export default LoadingBar;
