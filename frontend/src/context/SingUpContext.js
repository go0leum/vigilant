import React, { createContext, useState } from 'react';
import axios from 'axios';

// 컨텍스트 객체 생성
const SignUpContext = createContext();

// 프로바이더 컴포넌트
const SignUpProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    birthYear: '', 
    birthMonth: '', 
    birthDay: '',
    userID: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    userName: false,
    phoneNumber: false,
    userID: false,
    password: false,
    confirmPassword: false,
    role: false,
    birthDate: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value === '' });
  };

  const handleDateChange = (e) => { 
    const { id, value } = e.target; 
    setFormData({ ...formData, [id]: value }); 
    setErrors({ ...errors, birthDate: !formData.birthYear || !formData.birthMonth || !formData.birthDay }); 
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setFormData({ ...formData, password: value });
    setErrors({ ...errors, password: !passwordPattern.test(value) });
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, confirmPassword: value });
    setErrors({ ...errors, confirmPassword: value !== formData.password });
  };

  const handleRoleClick = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
    setErrors({ ...errors, role: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      formData.userName &&
      formData.birthYear && 
      formData.birthMonth && 
      formData.birthDay &&
      formData.phoneNumber &&
      formData.userID &&
      passwordPattern.test(formData.password) &&
      formData.password === formData.confirmPassword &&
      formData.role
    ) {
      try {
        const response = await axios.post('http://your-django-api-url/register', {
          userName: formData.userName,
          birthDate: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
          phoneNumber: formData.phoneNumber,
          userID: formData.userID,
          password: formData.password,
          role: formData.role,
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    } else {
      setMessage('Please fill out all fields correctly.');
    }
    setLoading(false);
  };

  return (
    <SignUpContext.Provider
      value={{
        formData,
        errors,
        loading,
        message,
        handleChange,
        handleDateChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleRoleClick,
        handleSubmit,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export { SignUpContext, SignUpProvider };
