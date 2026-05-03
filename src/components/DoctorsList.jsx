import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorCard from './DoctorCard';

const doctorsData = [
  { name: "Олександр Коваленко", specialty: "Терапевт", experience: 15 },
  { name: "Марія Лисенко", specialty: "Кардіолог", experience: 10 },
  { name: "Іван Мельник", specialty: "Педіатр", experience: 8 },
  { name: "Олена Ткачук", specialty: "Невролог", experience: 12 }
];

function DoctorsList() {
  const handleGreeting = (doctorName) => {
    alert(`Привіт, ${doctorName}!`);
  };

  return (
    <div className="py-4">
      <Container>
        <h2 className="mb-4 text-start fw-bold text-dark">Наші спеціалісти</h2>
        <Row className="g-4">
          {doctorsData.map((doctor, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <DoctorCard 
                name={doctor.name} 
                specialty={doctor.specialty} 
                experience={doctor.experience} 
                onGreeting={handleGreeting} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DoctorsList;