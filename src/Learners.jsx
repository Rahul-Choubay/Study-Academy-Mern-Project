import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Learners() {
  return (
    <Div>
    <div className="learners-container">
      <div className="content">
        <h1>LEARNERS AND STUDENTS</h1>
        <p>You can learn anything. Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</p>
        <button ><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Learners, start here</Link></button>
      </div>
      <div className="image-container">
        <img src="assets2.jpg" alt="Description" className="image" />
      </div>
    </div>
    </Div>
  );
}
const Div = styled.div`
.learners-container {
  display: flex;
  justify-content: space-between;  /* To push the content and image to the edges */
  align-items: center;  /* To vertically align content and image */
  padding: 20px;  /* Optional: Add some padding for spacing */
}

.content {
  flex: 1;  /* To make content take up available space */
  padding-right: 20px;  /* Optional: Add some right padding for spacing */
  button{
    width: 15vw;
    height: 6vh;
    background-color: #1865f2;
    border-radius: 8px;
    color:white;
  }

}

.image-container {
  flex: 1;  /* To make image container take up available space */
}

.image {
  max-width: 100%;  /* Ensure the image does not exceed its container */
  height: auto;  /* Maintain aspect ratio */
  display: block;  /* Remove any inline spacing or margins */
}



`;

export default Learners;
