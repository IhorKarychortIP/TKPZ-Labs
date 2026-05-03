import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorCard from '../components/DoctorCard';
import { LOCALSTORE_APPOINTMENTS } from '../models/constants';

const doctorsData = [
  { id: 1, name: "Олександр Коваленко", specialty: "Терапевт", experience: 15, price: 450, imgurl: "/imgs/doctors/doc1.jpg" },
  { id: 2, name: "Марія Лисенко", specialty: "Кардіолог", experience: 10, price: 600, imgurl: "/imgs/doctors/doc2.jpg" },
  { id: 3, name: "Іван Мельник", specialty: "Педіатр", experience: 8, price: 500, imgurl: "/imgs/doctors/doc3.jpg" },
  { id: 4, name: "Олена Ткачук", specialty: "Невролог", experience: 12, price: 550, imgurl: "/imgs/doctors/doc4.jpg" }
];

function DoctorsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getLocalStore = () => {
      let localData = window.localStorage.getItem(LOCALSTORE_APPOINTMENTS);
      localData = localData ? JSON.parse(localData) : [];
      if (localData && Array.isArray(localData) && localData.length > 0) {
        setAppointments(localData);
      }
    };
    getLocalStore();
  }, []); 

  const addAppointment = (doctor) => {
    const isAlreadyAdded = appointments.some(item => item.id === doctor.id);
    if (!isAlreadyAdded) {
      const updatedAppointments = [...appointments, doctor];
      setAppointments(updatedAppointments);
      window.localStorage.setItem(LOCALSTORE_APPOINTMENTS, JSON.stringify(updatedAppointments));
    }
  };

  return (
    <div className="py-4">
      <Container>
        <h2 className="mb-4 text-start fw-bold text-dark">Наші спеціалісти</h2>
        <Row className="g-4">
          {doctorsData.map((doctor) => (
            <Col xs={12} sm={6} md={4} lg={3} key={doctor.id}>
              <DoctorCard 
                doctor={doctor} 
                onSelect={addAppointment} 
                isSelected={appointments.some(item => item.id === doctor.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DoctorsPage;