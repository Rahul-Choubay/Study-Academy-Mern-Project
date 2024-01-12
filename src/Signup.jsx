import React, { useState } from 'react';
import styled from 'styled-components';
import StudentSignUp from './StudentSignUp';
import TeacherSignUp from './TeacherSignUp';
import ParentSignUp from './ParentSignUp';

// Create a styled container to display items in a row
const Containerr = styled.div`
  display: flex;
  flex-direction: row;
  height: 83vh;
  align-items: center;
  background-color:#005987;
  gap: 20px;
  margin-top: 20px;
  width: 99vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

// Create styled button component
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const SignUp = () => {
  const [role, setRole] = useState(null);

  return (
    <Containerr>
        
      <div style={{width:"50%", backgroundColor:"#0a2a66", color:"white"}}>
        <h1>Sign up</h1>
        <p>
          A world-class education for anyone, anywhere. 100% free.
          Join Study Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.
          By signing up for Study Academy, you agree to our Terms of use and Privacy Policy.
        </p>
      </div>
      
      {/* Use flexbox to arrange content in a row */}
      <Container>
        <h1>Join Studey Academy as a</h1>
        
        {/* Buttons are in the same row */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button onClick={() => setRole('student')}>Student</Button>
          <Button onClick={() => setRole('teacher')}>Teacher</Button>
          <Button onClick={() => setRole('parent')}>Parent</Button>
        </div>
        
   
      
      {/* Render the respective sign-up component based on the selected role */}
      {role === 'student' && <StudentSignUp />}
      {role === 'teacher' && <TeacherSignUp />}
      {role === 'parent' && <ParentSignUp />}
      </Container>
    </Containerr>  
  );
};

export default SignUp;
