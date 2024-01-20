import React, { useState } from 'react';
import MyAccount from './MyAccount';
import Progress from './Progress';

import Navbar from '../myrou/Navbar';
import ManagementTeem from './ManagementTeem';
import YourCourse from './YourCourse';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('myAccount');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myAccount':
        return <MyAccount />;
      case 'progress':
        return <Progress />;
      case 'managementTeem':
        return <ManagementTeem />;
      case 'yourcourse':
        return <YourCourse />;
      default:
        return null;
    }
  };

  return (
    <div style={{width:"100vw", overflow:"hidden"}}>
        <Navbar />
        <div style={{display:"flex", flexDirection:"row" , width:"98.5vw"  , marginTop:"1rem"}}>
      <div style={{display:"flex", flexDirection:"row" , width:"98.5vw" , marginTop:"1rem"}}>
        <div style={{display:"flex", flexDirection:"column" , marginTop:"0.1rem", border:"1px solid black", width:"22vw",maxHeight:"auto" , minHeight:"70vh", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column" , marginTop:"4rem"}}>
        <button onClick={() => setActiveTab('myAccount')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>My Account</button>
        <button onClick={() => setActiveTab('progress')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Progress</button>
        <button onClick={() => setActiveTab('managementTeem')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Request and Feedback</button>
        <button onClick={() => setActiveTab('yourcourse')} style={{marginBottom:"1rem" , width:"14vw", height:"6vh"}}>Your Course</button>
        </div>
        </div>
      </div>
      <div style={{position:"absolute", width:"70vw", top:"7rem",border:"1px solid black", right:"2rem", maxHeight:"auto" , minHeight:"70vh",}}>
      {renderTabContent()}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
