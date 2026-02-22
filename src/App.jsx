import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import About from './components/About';
import Menu from './components/Menu';
import PatientCard from './components/PatientCard';

const AppWrapper = styled.div`
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4fbf8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  padding: 40px 0;
  flex: 1;
`;

const ToggleButton = styled.button`
  background-color: ${props => props.$active ? "#dc3545" : "#20c997"};
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

  const toggleMessage = () => {
    setIsHello(!isHello); 
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {isHello ? <Hello /> : <Goodbye />}
          <ToggleButton onClick={toggleMessage} $active={!isHello}>
            {isHello ? "Попрощатися" : "Привітатися знову"}
          </ToggleButton>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper>
        <Navbar expand="lg" style={{ backgroundColor: '#20c997' }} variant="dark" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">MedClinic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Головна</Nav.Link>
                <Nav.Link as={Link} to="/about">Про нас</Nav.Link>
                <Nav.Link as={Link} to="/patient">Кабінет пацієнта</Nav.Link>
              </Nav>
              <Menu />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ContentArea>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/patient" element={<PatientCard />} />
          </Routes>
        </ContentArea>
      </AppWrapper>
    </Router>
  );
}

export default App;