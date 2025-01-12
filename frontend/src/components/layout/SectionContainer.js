import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  padding: 170px 170px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: center;
  justify-content: center;
  gap: 60px 60px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 40%;
  height: 100%;
  font-size: 32px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const FormContainer = ({ flexDirection, title, children }) => { 
    return (
        <StyledSectionContainer flexDirection={flexDirection}>
            <Title>{title}</Title>
            {children}
        </StyledSectionContainer>
    );
}; 

export default FormContainer;