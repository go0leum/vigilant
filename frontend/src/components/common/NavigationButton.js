import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigationButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  border: none;
  background: none;
`;

const NavigationButton = ({ label, path }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(path);
  };

  return (
    <StyledNavigationButton onClick={navigateTo}>{label}</StyledNavigationButton>
  );
};

export default NavigationButton;