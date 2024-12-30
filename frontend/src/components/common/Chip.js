import styled from 'styled-components';


const StyledChip = styled.div` 
  padding: 8px 12px;
  background: ${(props) => (props.selected ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.05)')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: none;
  border-radius: 6px; 
  cursor: pointer; 
  font-size: 14px; 

  &:hover { 
    background: ${(props) => (props.selected ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.20)')};
  }
  
`;

const Chip = ({ label, selected, onClick }) => {
    return <StyledChip selected={selected} onClick={onClick}>{label}</StyledChip>; 
};

export default Chip;