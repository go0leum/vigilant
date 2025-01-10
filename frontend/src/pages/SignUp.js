import React, { useContext } from 'react';
import { SignUpContext, SignUpProvider } from '../context/SingUpContext';

import TopBar from '../components/layout/TopBar';
import BaseContainer from '../components/layout/BaseContainer';
import FormContainer from '../components/layout/FormContainer';
import ChipContainer from '../components/layout/ChipContainer';
import DropdownContainer from '../components/layout/ChipContainer';

import Form from '../components/common/Form'
import Button from '../components/common/Button'
import Chip from '../components/common/Chip'
import Error from '../components/common/Error'
import Input from '../components/common/Input'
import Dropdown from '../components/common/Dropdown';

const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); 
const months = Array.from({ length: 12 }, (_, i) => i + 1); 
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const SignUpForm = () => {
  const { formData, errors, handleChange, handleDateChange, handlePasswordChange, handleConfirmPasswordChange, handleRoleClick, handleSubmit, } = useContext(SignUpContext);

  return (
    <BaseContainer>
      <TopBar />
      <FormContainer flexDirection="row" title="Sign Up">
        <Form onSubmit={handleSubmit}>

          <Input label="Name" id="userName" type="name" value={formData.userName} onChange={handleChange} required placeholder="Enter your name"></Input>
          <Error visible={errors.userName}>Name is required.</Error>

          <DropdownContainer label="Date of Birth">
            <Dropdown label="year" id="birthYear" options={years} value={formData.birthYear} onChange={handleDateChange} required placeholder="Year"></Dropdown>
            <Dropdown label="month" id="birthMonth" options={months} value={formData.birthMonth} onChange={handleDateChange} required placeholder="Month"></Dropdown>
            <Dropdown label="day" id="birthDay" options={days} value={formData.birthDay} onChange={handleDateChange} required placeholder="Day"></Dropdown>
          </DropdownContainer>

          <Input label="Phone Number" id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required placeholder="Enter your phone number"></Input>
          <Error visible={errors.phoneNumber}>Phone number is required.</Error>

          <Input label="ID" id="userID" type="text" value={formData.userID} onChange={handleChange} required placeholder="Enter your ID"></Input>
          <Error visible={errors.userID}>ID is required.</Error>

          <Input label="Password" type="password" id="password" value={formData.password} onChange={handlePasswordChange} required placeholder="Enter password"></Input>
          <Error visible={errors.password}> Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special characters. </Error>

          <Input label="Confirm Password" id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleConfirmPasswordChange} required placeholder="Enter password again"></Input>
          <Error visible={errors.confirmPassword}> Password do not match. </Error>

          <ChipContainer label="Job Type">
            <Chip label="Manager" selected={formData.role === "manager"} onClick={() => handleRoleClick('manager')}></Chip>
            <Chip label="Worker" selected={formData.role === "worker"} onClick={() => handleRoleClick('worker')}></Chip>
          </ChipContainer>
          <Error visible={errors.role}> Please select a role. </Error>

          <Button label="Create Account" primary type="submit"></Button>

        </Form>
      </FormContainer>
    </BaseContainer>
  );
};

const SignUp = () => {
  return (
    <SignUpProvider> <SignUpForm /> </SignUpProvider>
  );
};

export default SignUp;