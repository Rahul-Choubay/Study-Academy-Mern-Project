import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../component/Homepage';
import Sign from './Sign';
import Mainpage from '../component//Mainpage';
import SignUp from './Signup';
import Login from './Login';
import Classepage from '../component/Classepage';
import Openai from '../component/Openai';
import DonationPage from '../component/DonationPage';
import Dashboard from '../component/Dashboard';
import CoursePage from '../component/CoursePage';

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/classpage/:classId" element={<Classepage />} />
      <Route path="/openai" element={<Openai />} />
      <Route path="/donation" element={<DonationPage />} /> 
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<CoursePage />} />
    </Routes>
  );
};

export default MyRoute;