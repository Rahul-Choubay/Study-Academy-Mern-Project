// CourseNavigation.js
import React, { useState } from 'react';
import {courses} from './Data'

const CourseNavigation = () => {
  const [activeDropdowns, setActiveDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  return (
    <nav aria-label="Courses" style={{width: "97vw", overflow:"hidden"}}>
      {courses.map((course) => (
        <div key={course.id}>
          <button onClick={() => toggleDropdown(course.id)}>
            <img
              src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
              width="45"
              height="45"
              alt={course.title}
            />
            {course.title}
          </button>
          <ul hidden={!activeDropdowns[course.id]}>
            {course.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default CourseNavigation;