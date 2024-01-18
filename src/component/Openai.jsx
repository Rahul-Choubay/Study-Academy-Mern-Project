import React, { useState } from 'react';
import Navbar  from '../myrou/Navbar';
import { dummyData } from '../data/Data'

const Openai = () => {
  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = () => {
    // Filter data based on user input
    const results = dummyData.filter(item =>
      item.question.toLowerCase().includes(userInput.toLowerCase())
    );

    setSearchResults(results);
  };

  return (<>
  <div style={{overflow:"hidden"}}>
    <Navbar />
    <div style={{ display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", textAlign:"center"}}>
    <div style={{display:"flex", flexDirection:"column",alignItems:"center" , justifyContent:"center", textAlign:"center"}}>
      <h1>Search Your Question Related To This Application</h1>
      <input
      style={{width:"30vw", height:"8vh", justifyContent:"center", textAlign:"center"}}
        type="text"
        placeholder="Enter your question"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button  style={{width:"20vw", marginTop:"2rem",height:"6vh", backgroundColor:"black", color:"white", justifyContent:"center", textAlign:"center"}} onClick={handleSearch}>Search</button>

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <strong>{result.question}</strong> - {result.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    
    </div>
    </>
  );
};

export default Openai;
