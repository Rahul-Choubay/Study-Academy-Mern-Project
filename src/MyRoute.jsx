import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Sign from './Sign';
import Mainpage from './Mainpage';
import SignUp from './Signup';
import Login from './Login';
import Classepage from './Classepage';

const MyRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/classpage" element={<Classepage />} />
    </Routes>
  );
};

export default MyRoute;

