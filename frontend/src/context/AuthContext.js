// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        setUser(savedUser);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (userID, password, role) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        userID,
        password,
        role,
      });
      const userData = { userID, role, token: response.data.access };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
