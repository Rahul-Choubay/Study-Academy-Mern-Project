import React, { useState } from "react";

const Classepage = () => {
    // Define a state to hold the selected lecture's description
    const [selectedLecture, setSelectedLecture] = useState(null);

    // Dummy lecture data for demonstration
    const dummyLectures = [
        { id: 1, title: 'Introduction to React', description: 'Basics of React and its importance.' },
        { id: 2, title: 'Component Lifecycle', description: 'Understanding the lifecycle of React components.' },
        { id: 3, title: 'State and Props', description: 'Deep dive into React state and props.' },
        { id: 4, title: 'Hooks in React', description: 'Understanding useState, useEffect, and custom hooks.' },
        { id: 5, title: 'Routing in React', description: 'Exploring React Router and its features.' },
    ];

    // Function to handle lecture selection
    const handleLectureSelect = (lecture) => {
        setSelectedLecture(lecture);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {/* List of lecture titles as buttons */}
                <div style={{ marginRight: '50px' }}>
                    <h2>List of Lectures:</h2>
                    <ul>
                        {dummyLectures.map((lecture) => (
                            <li key={lecture.id}>
                                <button onClick={() => handleLectureSelect(lecture)}>
                                    {lecture.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Display selected lecture's description */}
                <div>
                    <h2>Lecture Description:</h2>
                    {selectedLecture ? (
                        <div>
                            <h3>{selectedLecture.title}</h3>
                            <p>{selectedLecture.description}</p>
                        </div>
                    ) : (
                        <p>Select a lecture to view its description.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Classepage;

