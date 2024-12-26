import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const Container = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  padding: 170px 170px;
  display: flex;
  flex-direction: row;
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

const Form = styled.form`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 6px;
`;

const ChipGroup = styled.div` 
  width: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: flex-start;
  gap: 4px; 
`; 

const ChipButton = styled.button` 
  width: 100%;
  flex: 1; 
  align-self: stretch;
  padding: 8px 12px;
  background: ${(props) => (props.cliked ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.05)')};
  color: ${(props) => (props.cliked ? 'white' : 'black')};
  border: none;
  border-radius: 6px; 
  cursor: pointer; 
  font-size: 14px; 

  &:hover { 
    background: rgba(0, 0, 0, 0.20); 
  }
  
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: row; 
  align-items: flex-start;
  gap: 8px; 
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid black;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 16px;
`;

const LogIn = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
     setClicked(!clicked);
  };

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
        <TopBar />
        <FormContainer>
          <Title>Log In</Title>
          <Form>
              <InputGroup>
                <label>Email</label>
                <Input type="email" placeholder="Enter your email" />
              </InputGroup>

              <InputGroup>
                <label>Password</label>
                <Input type="password" placeholder="Enter your password" />
              </InputGroup>

              <ChipGroup>
                <label>Job Type</label>
                <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    <ChipButton cliked={clicked} onClick={handleClick} className='accountType'>Worker</ChipButton>
                    <ChipButton cliked={clicked} onClick={handleClick} className='accountType'>Manager</ChipButton>
                </div>
              </ChipGroup>

              <ButtonGroup>
                <Button onClick={() => navigateTo('/signUp')}>Sign Up</Button>
                <Button primary onClick={() => navigateTo('/managerHome')}>Log In</Button>
              </ButtonGroup>
          </Form>
        </FormContainer>
    </Container>
  );
};

export default LogIn;
