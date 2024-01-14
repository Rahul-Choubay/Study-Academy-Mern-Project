import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Sign from './Sign';
import Mainpage from './Mainpage';
import SignUp from './Signup';
import Login from './Login';
import Classepage from './Classepage';
import About from './About';
import Openai from './Openai';

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/classpage/:classId" element={<Classepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/openai" element={<Openai />} />
    </Routes>
  );
};

export default MyRoute;