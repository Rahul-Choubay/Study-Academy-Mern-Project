import React, { useState } from 'react';
import MyAccount from './MyAccount';
import Progress from './Progress';
import Profile from './Profile';
import Teachers from './Teachers';
import Navbar from '../myrou/Navbar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('myAccount');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myAccount':
        return <MyAccount />;
      case 'progress':
        return <Progress />;
      case 'profile':
        return <Profile />;
      case 'teachers':
        return <Teachers />;
      default:
        return null;
    }
  };

  return (
    <div style={{width:"98.5vw", overflow:"hidden"}}>
        <Navbar />
        <div style={{display:"flex", flexDirection:"row" , width:"98.5vw"  , marginTop:"1rem"}}>
      <div style={{display:"flex", flexDirection:"row" , width:"98.5vw" , marginTop:"1rem"}}>
        <div>User Name</div>
        <div style={{display:"flex", flexDirection:"column" , marginTop:"1rem"}}>
            <div style={{display:"flex", flexDirection:"column" , marginTop:"4rem"}}>
        <button onClick={() => setActiveTab('myAccount')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>My Account</button>
        <button onClick={() => setActiveTab('progress')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Progress</button>
        <button onClick={() => setActiveTab('profile')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Profile</button>
        <button onClick={() => setActiveTab('teachers')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Teachers</button>
        <button onClick={() => setActiveTab('teachers')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Your Course</button>
        </div>
        </div>
      </div>
      <div style={{position:"absolute", top:"10rem", right:"20rem"}}>
      {renderTabContent()}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
