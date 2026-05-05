import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorCard from './DoctorCard';

function DoctorsList({ doctors }) {
  return (
    <div className="py-4">
      <Container>
        <h2 className="mb-4 text-start fw-bold text-dark">Наші спеціалісти</h2>
        <Row className="g-4">
          {doctors.map((doctor) => (
            <Col xs={12} sm={6} md={4} lg={3} key={doctor.id}>
              <DoctorCard {...doctor} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DoctorsList;