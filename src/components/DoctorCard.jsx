import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function DoctorCard({ name, specialty, experience, price, imgurl }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectDoctor = () => {
    setIsSelected(true);
    console.log("Вибрано лікаря:", { name, specialty, experience, price, imgurl }); 
  };

  return (
    <Card className={`h-100 shadow-sm border-0 rounded-4 text-center overflow-hidden ${isSelected ? 'border border-success border-2' : ''}`}>
      <Card.Img 
        variant="top" 
        src={imgurl} 
        alt={name} 
        style={{ height: '220px', objectFit: 'cover' }} 
      />
      
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title className="fw-bold mb-2 text-dark">{name}</Card.Title>
        <Card.Subtitle className="mb-3 text-success">{specialty}</Card.Subtitle>
        
        <Card.Text className="text-muted flex-grow-1">
          Стаж: <strong>{experience} років</strong><br/>
          Вартість: <strong>{price} грн.</strong>
        </Card.Text>

        <div style={{ minHeight: '30px' }} className="mb-2">
          {isSelected && (
            <Badge bg="success" className="px-3 py-2 rounded-pill">
              ✔ Вибрано для запису
            </Badge>
          )}
        </div>

        <Button 
          variant={isSelected ? "secondary" : "success"} 
          className="mt-auto rounded-pill fw-bold"
          onClick={selectDoctor}
          disabled={isSelected}
        >
          {isSelected ? "Вже обрано" : "Обрати лікаря"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;