import React, { useState } from "react";
import { Link } from "react-router-dom";
import { boardExamData, paidBatch } from "../data/Data";

const CourseNavigation = ({ onSelectClass }) => {
  const [activeDropdowns, setActiveDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleClassClick = (selectedClass) => {
    toggleDropdown(selectedClass.id);
    if (typeof onSelectClass === 'function') {
      onSelectClass(selectedClass);
    } else {
      console.error('onSelectClass is not a function');
    }
  };

  const combinedData = [...boardExamData, ...paidBatch];

  return (
    <nav
      aria-label="Courses"
      style={{
        width: "97vw",
        textAlign: "center",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "77vw",
          backgroundColor: "#8295ba",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        {combinedData.map((course) => (
          <div
            key={course.id}
            style={{
              marginLeft: "1rem",
              flex: "1 0 40%",
            }}
          >
            <button
              onClick={() => handleClassClick(course)}
              style={{ width: "98%", height: "7vh", marginTop: "0.4rem", marginRight: "0.3rem", borderRadius: "0.8rem" }}
            >
              {course.title}
            </button>
            <ul
              hidden={activeDropdowns[course.id]}
              style={{ listStyleType: "none", padding: 0 }}
            >
              {course.classes.map((classItem) => (
                <li
                  key={classItem.title}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem",
                  }}
                >
                  <Link to={classItem.url}>{classItem.title}</Link>
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
