import React, { useRef, useState } from 'react';
import { object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import UploadIcon from './../Icons/Upload';

function dragEnter(e, setFile) {
  e.preventDefault();
  setFile(true);
}

function dragLeave(e, setFile) {
  e.preventDefault();
  setFile(false);
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function dropFile(e, setFile, onClick) {
  e.preventDefault();
  // let reader = new FileReader();

  // reader.readAsText(file);
  // reader.onload = function() {
  //   console.log(reader, ref);
  //   ref.current.files[0] = reader.result;
  // };
  // reader.onerror = function() {
  //   console.log(reader.error);
  // };

  onClick(e.dataTransfer.files[0]);
  setFile(false);
}

const DropUploadButton = ({
  icon,
  name,
  multiple,
  onChange,
  onClick,
  text,
  ...otherProps
}) => {
  const ref = useRef();
  const [withFile, setWithFile] = useState(false);
  const handleChange = ({ target: { value } }) => onChange(value);

  return (
    <StyledButton
      ref={ref}
      withFile={withFile}
      onClick={onClick}
      onDragEnter={e => dragEnter(e, setWithFile)}
      onDragLeave={e => dragLeave(e, setWithFile)}
      onDragOver={e => dragOver(e, setWithFile)}
      onDrop={e => dropFile(e, setWithFile, onClick)}
      {...otherProps}
    >
      {icon}
      {withFile ? 'Drop file to upload' : text}
      <input
        type="file"
        name={name}
        multiple={multiple}
        onChange={handleChange}
      />
    </StyledButton>
  );
};

const StyledButton = styled.label`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
  line-height: 130%;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '52vw')};
  padding: 2vh 0;
  border: 0.5px solid;
  border-color: ${({ withFile }) =>
    withFile ? '#FF9B21' : key('colors.big-disabled')};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ withFile }) => (withFile ? '#FF9B21' : '#505050')};
  cursor: pointer;
  background-color: ${({ withFile }) =>
    withFile ? '#FFEFDC' : key('colors.big-disabled')};
  position: relative;

  svg {
    margin-bottom: 12px;

    path {
      fill: ${({ withFile }) => (withFile ? '#FF9B21' : '#C1C1C1')};
    }
  }

  input {
    position: absolute;
    opacity: 0;
  }
`;

StyledButton.displayName = 'StyledButton';

DropUploadButton.defaultProps = {
  multiple: false,
  icon: <UploadIcon />,
  name: 'label',
  text: 'Click here or drag file to upload',
  otherProps: {},
  fullwidth: false,
};

DropUploadButton.propTypes = {
  fullwidth: bool,
  icon: element,
  name: string.isRequired,
  multiple: bool,
  onChange: func.isRequired,
  onClick: func.isRequired,
  text: string,
  otherProps: object,
};

export default DropUploadButton;
