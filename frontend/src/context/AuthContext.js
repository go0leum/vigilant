// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
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
      } catch (error) {
        alert('Error: ' + error.response.data.error);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        formData,
        errors,
        handleChange,
        handleRoleClick,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
