import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { boardExamData } from './Data';
import Navbar from './Navbar';

const Classepage = () => {
  const { classId } = useParams();
  const [selectedClass, setSelectedClass] = useState(null);
  const [openLectures, setOpenLectures] = useState([]);

  const fetchClassData = () => {
    const foundClass = boardExamData.find((course) => {
      return course.classes.some((cls) => cls.url === `/classpage/${classId}`);
    });

    if (foundClass) {
      const selectedClass = foundClass.classes.find((cls) => cls.url === `/classpage/${classId}`);
      if (selectedClass) {
        console.log('Selected class:', selectedClass);
        setSelectedClass(selectedClass);
      } else {
        console.error(`Class with id ${classId} not found in the selected course.`);
      }
    } else {
      console.error(`Class with id ${classId} not found.`);
    }
  };

  const handleOpenLecture = (lectureId) => {
    setOpenLectures((prevOpenLectures) => {
      const isOpen = prevOpenLectures.includes(lectureId);
      return isOpen ? prevOpenLectures.filter((id) => id !== lectureId) : [...prevOpenLectures, lectureId];
    });
  };

  useEffect(() => {
    fetchClassData();
  }, [classId]);

  return (
    <div style={{width:"98.5",overflowX:"hidden"}}>
        <Navbar />
    <div>
      {selectedClass ? (
        <div>
          <h2>Class {classId} Details:</h2>

          <div>
            <h2>List of Lectures:</h2>
            {selectedClass.lectures && selectedClass.lectures.length > 0 ? (
              <ul>
                {selectedClass.lectures.map((lecture) => (
                  <li key={lecture.id}>
                    <div>
                      <button onClick={() => handleOpenLecture(lecture.id)}>{lecture.title}</button>
                      {openLectures.includes(lecture.id) && <p>{lecture.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No lectures available for this class.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default Classepage;
