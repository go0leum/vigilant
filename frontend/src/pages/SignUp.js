import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const Container = styled.div`
  background: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const Error = styled.span` 
  color: red; 
  margin-bottom: 10px; 
  display: ${(props) => (props.visible ? 'block' : 'none')}; 
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

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid black;
  background: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 16px;
`;

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [role, setRole] = useState('');
    const [roleError, setRoleError] = useState(false);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPasswordError(!passwordPattern.test(newPassword));
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setConfirmPasswordError(newConfirmPassword !== password);
    };

    const handleRoleClick = (selectedRole) => { 
        setRole(selectedRole); 
        setRoleError(false); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (passwordPattern.test(password) && password === confirmPassword) {
            alert('Password is valid and matches!');
        } else {
            if (!passwordPattern.test(password)) {
                alert('Password does not meet the requirements.');
            } else {
                alert('Passwords do not match.');
            }
        }
    };

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <TopBar />
            <FormContainer>
                <Title>Sign Up</Title>
                <Form>
                    <InputGroup>
                        <label>Name</label>
                        <Input type="name" id="name" required placeholder="Enter your name" />
                    </InputGroup>
                    <InputGroup>
                        <label>Phone Number</label>
                        <Input type="tel" id="phoneNumber" required placeholder="Enter your phone number" />
                    </InputGroup>
                    <InputGroup>
                        <label>ID</label>
                        <Input type="text" id="userID" required placeholder="Enter your ID" />
                    </InputGroup>
                    <InputGroup>
                        <label>Password</label>
                        <Input type="password" id="password" value={password} onChange={handlePasswordChange} required placeholder="Enter your password" />
                        <Error visible={passwordError}>Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters.</Error>
                        <Input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required placeholder="Enter your password" />
                        <Error visible={confirmPasswordError}>Password do not match.</Error>
                    </InputGroup>

                    <ChipGroup>
                        <label>Job Type</label>
                        <div>
                            <Chip selected={role === "manager"} onClick={() => handleRoleClick('manager')}>Manager</Chip>
                            <Chip selected={role === "worker"} onClick={() => handleRoleClick('worker')}>Worker</Chip>
                        </div>
                    </ChipGroup>
                    <Error visible={roleError}> Please select a role. </Error>

                    <Button primary type="submit" onClick={() => navigateTo('/logIn')}>Create Account</Button>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default SignUp;