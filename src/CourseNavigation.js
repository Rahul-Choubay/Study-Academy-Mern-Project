// CourseNavigation.js
import React, { useState } from 'react';
import { courses } from './Data';

const CourseNavigation = () => {
  const [activeDropdowns, setActiveDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <nav
      aria-label="Courses"
      style={{
        width: '97vw',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginBottom:"2rem",
        
      }}
    >
      <div
        style={{
          width: '77vw',
          backgroundColor: '#8295ba',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          borderRadius:"10px"
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              marginLeft: '1rem',
              flex: '1 0 40%',
            }}
          >
            <button
              onClick={() => toggleDropdown(course.id)}
              style={{ width: '100%' , }}
            >
              <img
                src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png"
                width="45"
                height="45"
                alt={course.title}
              />
              {course.title}
            </button>
            <ul hidden={activeDropdowns[course.id]} style={{ listStyleType: 'none', padding: 0, }}>
              {course.links.map((link, index) => (
                <li 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '0.5rem' 
                  }}
                >
                  <a href={link.url} style={{ width: '50%', textAlign: 'center', display:"flex", flexDirection:"row" }}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CourseNavigation;
