import styled from 'styled-components';

const StyledContainer = styled.div`
  background: white;
  display: flex;
  width: 100%;
  padding-top: 80px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BaseContainer = ({ children }) => { 
    return <StyledContainer>{children}</StyledContainer>; 
}; 

export default BaseContainer;