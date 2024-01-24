import React, { useState } from 'react';
import CustomModal from './CustomModal';

const YourCourse = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{display:'flex', FlexDirection:"row"}}>
      <div style={{width:"50%", borderRight:"1px solid black" , minHeight:"70vh"}}>Your Course Content</div>
      <button onClick={handleButtonClick} style={{marginLeft:"2rem", width:"14vw",height:"6vh", borderRight:"1px solid black"}}>Add Other Course</button>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default YourCourse;
