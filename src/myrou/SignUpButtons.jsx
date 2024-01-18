import React from 'react';
import styled from 'styled-components';

// Create styled button component
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const SignUpButtons = ({ setRole }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button onClick={() => setRole('student')}>Student</Button>
      <Button onClick={() => setRole('teacher')}>Teacher</Button>
      <Button onClick={() => setRole('parent')}>Parent</Button>
    </div>
  );
};

export default SignUpButtons;
