import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #2e86de;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  
  &:hover {
    color: #54a0ff;
    cursor: default;
  }
`;

function Hello() {
  return <Title>Привіт, React!</Title>;
}

export default Hello;