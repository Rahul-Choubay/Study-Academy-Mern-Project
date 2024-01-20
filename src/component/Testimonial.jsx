import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Testimonial = () => {
 return (
    <Div style={{justifyContent:"center", textAlign:"left"}}>
    <Card >
        <div style={{display:"flex", flexDirection:"row" }}>
        <div style={{width:"40%" , marginLeft:"2rem"}} >
            <img src="assets1.jpg" alt="Description" style={{width:'100%'}}/>
          </div>
          <div style={{width:"60%" , marginLeft:"2rem"}} >
      <CardBody>
        <CardTitle tag="h5">
          TEACHERS
          <div style={{ display: 'inline-block', marginLeft: '10px' }}>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarBorder />
            <MdStarBorder />
          </div>
        </CardTitle>
        <CardText>
          "I'm finally able to truly differentiate my classroom. This has been priceless for my students' engagement."
        </CardText>
        <CardText tag="h6">
       Rahul Chaubey
        </CardText>
        <Button color="primary" style={{ width:"14vw", height:"6vh", borderRadius:"10px", backgroundColor:"#1865f2", color:"white"}}><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Teachers, start here</Link></Button>
      </CardBody>
      </div>
      </div>
    </Card>
    </Div>
 );
};
const Div = styled.div`
width: 97vw;
height:70vh;
overflow:hidden;
`;

export default Testimonial;