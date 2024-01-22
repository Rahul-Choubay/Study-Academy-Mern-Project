import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { boardExamData, paidBatch } from "../data/Data";
import Navbar from '../myrou/Navbar';

const Classepage = () => {
  const { classId } = useParams();
  const [selectedClass, setSelectedClass] = useState(null);
  const [openLectures, setOpenLectures] = useState([]);
  const navigate = useNavigate();

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
      const foundPaidClass = paidBatch.find((course) => {
        return course.classes.some((cls) => cls.url === `/classpage/${classId}`);
      });

      if (foundPaidClass) {
        const auth = localStorage.getItem('user');
        if (auth) {
          // Display paidBatch class details only for logged-in users
          const selectedClass = foundPaidClass.classes.find((cls) => cls.url === `/classpage/${classId}`);
          if (selectedClass) {
            console.log('Selected class:', selectedClass);
            setSelectedClass(selectedClass);
          } else {
            console.error(`Class with id ${classId} not found in the selected course.`);
          }
        } else {
          // Redirect to the signup page if the user is not logged in
          navigate('/Signup');
        }
      } else {
        console.error(`Class with id ${classId} not found.`);
      }
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
    <div style={{ width: "98.5", overflowX: "hidden" }}>
      <Navbar />
      <div style={{ display: "flex", marginTop: "0.6rem", marginLeft: "0.8rem", width: "97vw", height: "auto", border: "1px solid black" }}>
        {selectedClass ? (
          <div>
            <h2>Class {classId} Details:</h2>

            <div>
              <h2>List of Lectures:</h2>
              {selectedClass.lectures && selectedClass.lectures.length > 0 ? (
                <ul>
                  {selectedClass.lectures.map((lecture) => (
                    <li key={lecture.id}>
                      <div style={{ display: "flex", flexDirection: "row", overflowX: "hidden" }}>
                        <div style={{ marginTop: '3rem' }}>
                          <button onClick={() => handleOpenLecture(lecture.id)} style={{ position: "absolute", left: "3rem", marginTop: "-2rem", width: "15vw", height: "6vh" }}>{lecture.title}</button>
                        </div>
                        <div>
                          {openLectures.includes(lecture.id) && <p style={{ position: "absolute", right: "10rem" }}>{lecture.description}</p>}
                        </div>
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
