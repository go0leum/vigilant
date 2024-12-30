import styled from 'styled-components';

const StyledForm = styled.form`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

const From = ({ children, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
  );
};

export default From