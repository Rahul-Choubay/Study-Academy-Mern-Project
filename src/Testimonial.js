import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled from 'styled-components';

const Testimonial = () => {
 return (
    <Div>
    <Card >
        <div style={{display:"flex", flexDirection:"row" }}>
        <div style={{width:"40%"}} >
            <img src="assets1.jpg" alt="Description" style={{width:'100%'}}/>
          </div>
          <div style={{width:"50%"}} >
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
        <Button color="primary">Teachers, start here</Button>
      </CardBody>
      </div>
      </div>
    </Card>
    </Div>
 );
};
const Div = styled.div`
width: 97vw;
height:100vh;
overflow:hidden;
`;

export default Testimonial;