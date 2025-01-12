import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import TopBar from '../components/layout/TopBar';
import BaseContainer from '../components/layout/BaseContainer';
import FormContainer from '../components/layout/FormContainer';
import ChipContainer from '../components/layout/ChipContainer';
import ButtonContainer from '../components/layout/ButtonContainer';

import Button from '../components/common/Button'
import Chip from '../components/common/Chip'
import Error from '../components/common/Error'
import Input from '../components/common/Input'
import Form from '../components/common/Form'
import NavigationButton from '../components/common/NavigationButton';

const LogIn = () => {

  const { formData, errors, handleChange, handleRoleClick, handleSubmit } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <BaseContainer>
      <TopBar>
        <NavigationButton label="LogIn" path="/LogIn"></NavigationButton>
        <NavigationButton label="About" path="/About"></NavigationButton>
      </TopBar>
      <FormContainer flexDirection="row" title="Log In">
        <Form onSubmit={handleSubmit}>
          <Input label="ID" id="userID" type="text" value={formData.userID} onChange={handleChange} required placeholder="Enter your ID"></Input>
          <Error visible={errors.userID}>ID is required.</Error>

          <Input label="Password" type="password" id="password" value={formData.password} onChange={handleChange} required placeholder="Enter password"></Input>
          <Error visible={errors.password}> Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters. </Error>

          <ChipContainer label="Job Type">
            <Chip label="Manager" selected={formData.role === "manager"} onClick={() => handleRoleClick('manager')}></Chip>
            <Chip label="Woker" selected={formData.role === "worker"} onClick={() => handleRoleClick('worker')}></Chip>
          </ChipContainer>
          <Error visible={errors.role}> Please select a role. </Error>

          <ButtonContainer>
            <Button label="Sign Up" onClick={() => navigateTo('/signUp')}></Button>
            <Button label="Log In" primary type="submit"></Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </BaseContainer>
  );
};

export default LogIn;
