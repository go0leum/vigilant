import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'NanumSquare'; 
  color: ${({ selected }) => (selected ? 'rgba(0, 0, 0)' : 'rgba(0, 0, 0, 0.50)')};  /* 선택 시 폰트 색상 변경 */
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Option = styled.option`
    font-size: 14px; 
    color: rgba(0, 0, 0, 0.50); 
    font-family: 'NanumSquare'; 
    font-weight: 400; 
    line-height: 20px; 
`;

const Dropdown = ({ label, id, options, value, onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleSelectChange = (e) => {
    onChange(e);
    setSelected(e.target.value !== '');
  };

  return (
    <Select id={id} value={value} onChange={handleSelectChange} selected={selected}>
      <Option value="">{label}</Option>
      {options.map(option => (
        <Option key={option} value={option}>{option}</Option>
     ))}
    </Select>
  );
};

export default Dropdown;
