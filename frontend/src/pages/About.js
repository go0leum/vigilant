import React, {useState} from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const Container = styled.div`
  background: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const About = () => {
    return (
        <Container>
            About
        </Container>
    );
};

export default About;