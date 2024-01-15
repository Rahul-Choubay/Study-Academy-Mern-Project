import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
function JoinPage() {
  return (
    <Div>
    <div className="home-page">
      <h1>Join Study Academy today</h1>
      <button><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Student</Link></button>
              <button><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Teacher</Link></button>
              <button><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Parents</Link></button> 
      <a href="/signup" className="button">
        Give today <span className="amount">1999</span>
        <span className="so">・</span>
        <span className="goal">92%</span>
        <span className="goal-text">& of 5000 goal</span>
      </a>
    </div>
    </Div>
  );
}
const Div = styled.div`
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  button{
    width:15vw;
    height:6vh;
    margin-bottom:0.4rem;
    background-color: #1865f2;
    border-radius: 8px;
    color:white;
  }
}

.home-page h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.home-page p {
  font-size: 24px;
  margin-bottom: 50px;
}

.home-page .highlight {
  color: #000;
  font-weight: bold;
}

.home-page .button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: #000;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 30px;
}

.home-page .amount {
  font-size: 36px;
  font-weight: bold;
  margin: 0 10px;
}

.home-page .so {
  margin: 0 10px;
}

.home-page .goal {
  font-size: 36px;
  font-weight: bold;
  margin: 0 10px;
}

.home-page .goal-text {
  font-size: 24px;
  margin-left: 10px;
}

`;
export default JoinPage;