import styled from 'styled-components';

const Group = styled.div` 
  width: 100%;
  display: flex; 
  flex-direction: column; s
  align-items: flex-start;
  gap: 4px; 

  & > div { 
    width: 100%;
    flex: 1; 
    align-self: stretch;
    display: flex;
    flex-direction: row; 
    gap: 10px; 
  }
`;

const DropdownContainer = ({ label, children }) => {
  return (
    <Group>
        <label>{label}</label>
        <div>{children}</div>
    </Group>
  );
};

export default DropdownContainer;
