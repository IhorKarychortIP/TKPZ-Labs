import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import About from './components/About';

const AppWrapper = styled.div`
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  background-color: #282c34;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const ContentArea = styled.div`
  padding: 40px;
  flex: 1; /* Щоб контент займав вільний простір */
`;

const ToggleButton = styled.button`
  background-color: ${props => props.$active ? "#ff4757" : "#2ed573"};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 4px 0 rgba(0,0,0,0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

function Home() {
  const [isHello, setIsHello] = useState(true);
  const [count, setCount] = useState(0);
  

  const toggleMessage = () => {
    setIsHello(!isHello); 
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {isHello ? <Hello /> : <Goodbye />}
      <ToggleButton onClick={toggleMessage} $active={!isHello}>
        {isHello ? "Попрощатися" : "Привітатися знову"}
        <span style={{ marginLeft: '10px' }}>{count}</span>
      </ToggleButton>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppWrapper>
        <NavBar>
          <StyledLink to="/">Головна</StyledLink>
          <StyledLink to="/about">Про нас</StyledLink>
        </NavBar>

        <ContentArea>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentArea>
      </AppWrapper>
    </Router>
  );
}

export default App;