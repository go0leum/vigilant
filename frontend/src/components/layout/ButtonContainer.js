import styled from 'styled-components';

const ButtonGroup = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: row; 
  align-items: flex-start;
  gap: 8px; 
`;

const ButtonContainer = ({ children }) => {
    return (
      <ButtonGroup>
          {children}
      </ButtonGroup>
    );
  };
  
  export default ButtonContainer;