import React from 'react';
import styled from 'styled-components';

const GoodbyeTitle = styled.h1`
  color: #e55039;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  
  &:hover {
    color: #eb2f06;
    cursor: pointer;
  }
`;

function Goodbye() {
  return <GoodbyeTitle>До побачення, React!</GoodbyeTitle>;
}

export default Goodbye;