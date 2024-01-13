import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const About = () => {
    return (
        <AboutContainer>
            <h2>About Study Application</h2>
            <p>This is a ReactJS application created for the purpose of learning and demonstration.</p>
        </AboutContainer>
    );
};

export default About;
