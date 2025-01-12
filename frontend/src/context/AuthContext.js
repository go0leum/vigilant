import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 임포트
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userID: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    userID: false,
    password: false,
    role: false,
  });

  const [user, setUser] = useState({
    name: '',
    jobType: '',
    imageUrl: '',
  });

  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value === '' });
  };

  const handleRoleClick = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
    setErrors({ ...errors, role: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.userID && formData.password && formData.role) {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          userID: formData.userID,
          password: formData.password,
          role: formData.role,
        });
        alert(response.data.message);
        // 로그인 후 사용자 정보 설정
        setUser({
          name: response.data.name,
          jobType: response.data.jobType,
          imageUrl: response.data.imageUrl,
        });
        navigate('/managerHome');  // 로그인 후 ManagerHome 페이지로 이동
      } catch (error) {
        alert('Error: ' + error.response.data.error);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout/');
      // 로그아웃 후 사용자 정보 초기화
      setUser({
        name: '',
        jobType: '',
        imageUrl: '',
      });
      alert('Logged out successfully');
      navigate('/logIn');  // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        formData,
        errors,
        user,
        handleChange,
        handleRoleClick,
        handleSubmit,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
