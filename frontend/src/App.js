import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ManagerHome from './pages/ManagerHome';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/managerHome" element={<ManagerHome />} />
      </Routes>
    </Router>
  );
};

export default App;
