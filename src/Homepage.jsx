import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Div>
      <div className="maindiv">
        <div className="divmain">
            <div className="img">
          <div >
            <img  src="assets.webp" alt="Description" />
          </div>
          </div>
          <div className="Contentdiv">
          <div >
            <h2>For every student, every classroom. Real results..</h2>
            <p>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
            <div className="btndiv">
              <button>Student</button>
              <button>Teacher</button>
              <button>Parents</button> {/* Corrected spelling from 'Perents' to 'Parents' */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  overflow:hidden;
  width: 97vw;
  height:100vh;

  .maindiv {
    display: flex;
    flex-direction: row;
    width: 97%;

    .divmain {
      display: flex;
      align-items: center; /* Added to vertically center the img and Contentdiv */
      .img {
        width: 40%;
        height: auto; 
       margin-left: 2rem;
        img{
            width: 100%;
        }
      }

      .Contentdiv {
        width: 60%; 
        padding-left: 20px; 
        button{
            background-color: #1865f2;
            border:none;
            width: 9vw;
            height:6.5vh;
            color:white;
            border-radius:10px;
            margin-left:1rem;

        }
      }
    }
  }
`;

export default Homepage;
