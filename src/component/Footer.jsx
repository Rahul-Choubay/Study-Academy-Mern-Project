import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2024 Study Application. All rights reserved.</p>
        </StyledFooter>
    );
};

export default Footer;
