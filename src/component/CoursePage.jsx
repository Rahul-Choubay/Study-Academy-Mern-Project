import React, { useState } from 'react';
import Progress from './Progress';

const CoursePage = () => {
  const [completedCourses, setCompletedCourses] = useState(0);
  const totalCourses = 10; // Set the total number of courses

  const handleCourseCompletion = () => {
    if (completedCourses < totalCourses) {
      setCompletedCourses(completedCourses + 1);
    }
  };

  return (
    <div>
      <h2>Course Page</h2>
      <p>Welcome to the course page! Mark courses as completed to see your progress.</p>

      <button onClick={handleCourseCompletion}>
        Mark Course as Completed
      </button>

      <Progress completedCourses={completedCourses} totalCourses={totalCourses} />
    </div>
  );
};

export default CoursePage;
