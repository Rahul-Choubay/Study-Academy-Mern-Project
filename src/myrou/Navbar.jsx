import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { boardExamData, paidBatch } from "../data/Data";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear('user');
      navigate('/signup')
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  const handleScroll = () => {
    setShowDropdown(false);
  };


  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const combinedData = [...boardExamData, ...paidBatch];
  return (
    <Navbarstyles>
      <nav>
      {auth ?    
           <ul className="StyledUl">
        <li className="StyledLi" onClick={toggleDropdown} ref={dropdownRef}>
            <Link className="StyledLink">Course</Link>
            {showDropdown && (
              <div className="DropdownMenu">
                <div className="DropdownItem">
                  {combinedData.map((course, index) => (
                    <div key={index}>
                      <h3 style={{margin:"1.2rem"}}>{course.title}</h3>
                      <ul>
                        {course.classes.map((cls, clsIndex) => (
                          <li key={clsIndex}>
                            <Link className="linkk" to={cls.url}>{cls.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          {/* Other Navbar items */}
          <li className="StyledLi">
            <Link className="StyledLink" to="">
              <input type="search" placeholder="search" />
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/" style={{backgroundColor:"white" , height:"20vh" , color:"black"}}>
              Study Academy
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/openai">
              Get AI Tutoring
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/donation">
              Donate
            </Link>
          </li>
      <li className="StyledLi">
      <Link onClick={logout} className="StyledLink" to="/signup">
        Logout ({JSON.parse(auth).username})
      </Link>
    </li>
    <li className="StyledLi">
      <Link  className="StyledLink" to="/Dashboard">
        Dashboard
      </Link>
    </li>
      </ul>
    :
    <ul className="StyledUl">
        <li className="StyledLi" onClick={toggleDropdown} ref={dropdownRef}>
            <Link className="StyledLink">Course</Link>
            {showDropdown && (
              <div className="DropdownMenu">
                <div className="DropdownItem">
                  {combinedData.map((course, index) => (
                    <div key={index}>
                      <h3 style={{margin:"1.2rem"}}>{course.title}</h3>
                      <ul>
                        {course.classes.map((cls, clsIndex) => (
                          <li key={clsIndex}>
                            <Link className="linkk" to={cls.url}>{cls.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          {/* Other Navbar items */}
          <li className="StyledLi">
            <Link className="StyledLink" to="">
              <input type="search" placeholder="search" />
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/" style={{backgroundColor:"white" , height:"20vh" , color:"black"}}>
              Study Academy
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/openai">
              Get AI Tutoring
            </Link>
          </li>
          <li className="StyledLi">
            <Link className="StyledLink" to="/donation">
              Donate
            </Link>
          </li>
          <li className="StyledLi">
        <Link className="StyledLink" to="/login">
          Log in
        </Link>
      </li>
      <li className="StyledLi">
        <Link className="StyledLink" to="/signup">
          Sign up
        </Link>
      </li>
    
    </ul>
  }   </nav>
    </Navbarstyles>
  );
};


const Navbarstyles = styled.div`
  /* Navbar styles */
  nav {
    background-color: #333;
    height: 12vh;
    color: #fff;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    position: relative;
    z-index: 2; /* Set a z-index for the Navbar */
  }

  .StyledUl {
    list-style-type: none;
    display: flex;
    padding: 0;
  }

  .StyledLi {
    position: relative;
    padding: 5px;
    margin-left: 1rem;
    z-index: 1; /* Ensure the dropdown is above other content in the page */
  }

  .DropdownMenu {
    position: fixed; /* Position the dropdown fixed to the viewport */
    top: 30%; /* Center it vertically */
    left: 0%; /* Center it horizontally */
    transform: translate(-0%, -39%); /* Center it precisely */
    background-color: #333; /* Match Navbar background color */
    display: flex;
    flex-direction: row;
    z-index: 3;
     /* Set a higher z-index than the Navbar */
     .DropdownItem{
      display: flex;
    flex-direction: row;
    margin-left:1rem;
    .linkk{
      color:white;
    }
     }
  }

  .DropdownItem {
    padding: 10px;
  }

  .StyledLiRight {
    margin-left: auto;
  }

  .StyledLink {
    color: #fff;
    text-decoration: none;
  }

  .StyledLinkk {
    color: #fff;
    width:20vw;
    text-decoration: none;
  }
 
`;


export default Navbar;
