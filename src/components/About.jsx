import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 0 auto; /* Центрування по горизонталі */
`;

const Heading = styled.h2`
  color: #333;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
`;

function About() {
  return (
    <AboutContainer>
      <Heading>Про нас</Heading>
      <Text>
        Ми вивчаємо React та маршрутизацію! 
      </Text>
    </AboutContainer>
  );
}

export default About;