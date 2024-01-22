import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 4px;
  margin-top: 10px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #4caf50;
  border-radius: 4px;
`;

const ProgressText = styled.div`
  margin-top: 10px;
`;

const Progress = ({ completedCourses, totalCourses }) => {
  const progress = (completedCourses / totalCourses) * 100;

  return (
    <Container>
      <ProgressText>
        {`Progress: ${completedCourses} out of ${totalCourses} courses completed`}
      </ProgressText>
      <ProgressBarContainer>
        <ProgressBarFill progress={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default Progress;
