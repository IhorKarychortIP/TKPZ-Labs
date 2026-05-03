import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import About from './components/About';
import Menu from './components/Menu';
import PatientCard from './components/PatientCard';
import DoctorsList from './components/DoctorsList'; 

function Home() {
  const [isHello, setIsHello] = useState(true);

  const toggleMessage = () => {
    setIsHello(!isHello); 
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          {isHello ? <Hello /> : <Goodbye />}
          <Button 
            variant={isHello ? "danger" : "success"} 
            className="px-4 py-2 mt-4 fw-bold shadow-sm rounded-3"
            onClick={toggleMessage}
          >
            {isHello ? "Попрощатися" : "Привітатися знову"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f4fbf8', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        
        <Navbar expand="lg" style={{ backgroundColor: '#20c997' }} variant="dark" className="shadow-sm py-3">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">MedClinic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-3">
                <Nav.Link as={Link} to="/" className="text-white fw-semibold">Головна</Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white fw-semibold">Про нас</Nav.Link>
                <Nav.Link as={Link} to="/patient" className="text-white fw-semibold">Кабінет пацієнта</Nav.Link>
                <Nav.Link as={Link} to="/doctors" className="text-white fw-semibold">Наші лікарі</Nav.Link>
              </Nav>
              <Menu />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="py-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/patient" element={<PatientCard />} />
            <Route path="/doctors" element={<DoctorsList />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;