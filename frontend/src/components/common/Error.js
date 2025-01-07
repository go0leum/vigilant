import styled from 'styled-components';

const StyledError = styled.span` 
  color: red; 
  margin-bottom: 10px; 
  display: ${(props) => (props.visible ? 'block' : 'none')}; 
`;

const Error = ({ visible, children }) => {
  return <StyledError visible={visible}>{children}</StyledError>;
};

export default Error;