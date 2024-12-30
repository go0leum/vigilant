import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid black;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 16px;
`;

const Button = ({ label, primary, type, onClick}) => {
  return (
    <StyledButton primary={primary} type={type} onClick={onClick}>{label}</StyledButton>
  );
};

export default Button;