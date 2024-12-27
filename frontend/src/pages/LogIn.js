import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
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

  /* Flexbox 추가 */ 
  & > div { 
    width: 100%;
    flex: 1; 
    align-self: stretch;
    display: flex;
    flex-direction: row; 
    gap: 10px; 
    }
`;


const Chip = styled.div` 
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

const Error = styled.span` 
  color: red; 
  margin-bottom: 10px; 
  display: ${(props) => (props.visible ? 'block' : 'none')}; 
`;

const LogIn = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [roleError, setRoleError] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRoleClick = (selectedRole) => { 
        setRole(selectedRole); 
        setRoleError(false); 
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(userID, password, role);
        navigate('/')
    };

    return (
        <Container>
            <TopBar />
            <FormContainer>
                <Title>Log In</Title>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <label>ID</label>
                        <Input type="text" id="userID" value={userID} onChange={(e) => setUserID(e.target.value)} required placeholder="Enter your ID" />
                    </InputGroup>

                    <InputGroup>
                        <label>Password</label>
                        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                    </InputGroup>

                    <ChipGroup>
                        <label>Job Type</label>
                        <div>
                            <Chip selected={role === "manager"} onClick={() => handleRoleClick('manager')}>Manager</Chip>
                            <Chip selected={role === "worker"} onClick={() => handleRoleClick('worker')}>Worker</Chip>
                        </div>
                    </ChipGroup>
                    <Error visible={roleError}> Please select a role. </Error>

                    <ButtonGroup>
                        <Button onClick={() => navigateTo('/signUp')}>Sign Up</Button>
                        <Button primary type="submit">Log In</Button>
                    </ButtonGroup>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default LogIn;
