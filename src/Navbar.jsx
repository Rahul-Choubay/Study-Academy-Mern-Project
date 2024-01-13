import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mathclasses, Physicclasses } from "./Data";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <StyledNav>
      <ul className="StyledUl">
        <StyledLi onClick={toggleDropdown}>
          <StyledLink>Courses</StyledLink>
          {showDropdown && (
  <DropdownMenu>
    <DropdownItem>
      <h2>Math Classes</h2>
      {mathclasses.map((math, index) => (
        <ul key={index}>
          <li>
            <a >{math.title}</a>
          </li>
        </ul>
      ))}
    </DropdownItem>
    <DropdownItem>
      <h2>Physic Classes</h2>
      {Physicclasses.map((Physic, index) => (
        <ul key={index}>
          <li>
          <a >{Physic.title}</a>
           
          </li>
        </ul>
      ))}
       
    </DropdownItem>
  </DropdownMenu>
)}
        </StyledLi>
        <StyledLi>
          <StyledLink to="">
            <input type="search" placeholder="search" />{" "}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/">
            {" "}
            <img src="logo.png" alt="Description" />
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about">Get AI Tutoring</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about">Donate</StyledLink>
        </StyledLi>
        <StyledLiRight>
          <StyledLink to="/login">Log in</StyledLink>
        </StyledLiRight>
        <StyledLiRight>
          <StyledLink to="/signup">Sign up</StyledLink>
        </StyledLiRight>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #333;
  height: 13vh;
  color: #fff;
  width: 100vw;
  overflow:hidden;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .StyledUl {
    list-style-type: none;
    display: flex;
    padding: 0;
  }
`;



const StyledLi = styled.li`
position: relative; // Add this line
  padding: 5px;
`;

const StyledLiRight = styled(StyledLi)`
  margin-left: auto; // This will push the last two items to the right side
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  img {
    width: 90%;
  }
  
`;
const DropdownMenu = styled.div`
  background-color: #333;
  position: absolute;
  top: 100%; // This ensures it starts just below the StyledLi
  left: 0;
  width: 200px; // or whatever width you prefer
  z-index: 1000; // Ensure it appears above other elements
`;
const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  z-index:1000;

    a{
    &:hover {
        text-decoration: underline;
        color:red;
      }
  }
  
`;
export default Navbar;
