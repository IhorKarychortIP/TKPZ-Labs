import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DoctorCard({ name, specialty, experience, onGreeting }) {
  return (
    <Card className="h-100 shadow-sm border-0 rounded-4 text-center">
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title className="fw-bold mb-2 text-dark">{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-success">{specialty}</Card.Subtitle>
        <Card.Text className="text-muted flex-grow-1">
          Стаж роботи: <strong>{experience} років</strong>
        </Card.Text>
        
        <Button 
          variant="outline-success" 
          className="mt-auto rounded-pill fw-bold"
          onClick={() => onGreeting(name)}
        >
          Привітатися з лікарем
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;