import React, { useState } from 'react';
import { Card, Button, Badge, Container, Row, Col, Modal } from 'react-bootstrap';
import styled from 'styled-components';

const PatientWrapper = styled.div`
  padding: 20px 0;
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(32, 201, 151, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(32, 201, 151, 0.3);
  }
`;

const ClinicButton = styled(Button)`
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 10px 20px;
  border-color: #20c997;
  color: #20c997;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover, &:active, &:focus {
    background-color: #20c997 !important;
    border-color: #20c997 !important;
    color: white !important;
    box-shadow: 0 4px 10px rgba(32, 201, 151, 0.4) !important;
  }
`;

const CustomBadge = styled(Badge)`
  font-size: 0.85em;
  padding: 8px 12px;
  border-radius: 10px;
`;

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 15px;
    border: none;
  }
  .modal-header {
    background-color: #20c997;
    color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

const patientsData = [
  { id: "4815162342", name: "Олександр Петренко", doctor: "д-р Коваленко", date: "20 лютого 2026", status: "Здоровий", type: "Плановий огляд", details: "Скарг немає. Тиск 120/80. Наступний огляд через рік." },
  { id: "1234567890", name: "Марія Іваненко", doctor: "д-р Лисенко", date: "22 лютого 2026", status: "Лікування", type: "Консультація", details: "Призначено курс антибіотиків. Повторний візит через 7 днів." },
  { id: "9876543210", name: "Іван Сидоренко", doctor: "д-р Коваленко", date: "23 лютого 2026", status: "Обстеження", type: "Аналізи", details: "Очікування результатів аналізу крові." },
  { id: "5556667778", name: "Олена Ткачук", doctor: "д-р Мельник", date: "24 лютого 2026", status: "Здоровий", type: "Вакцинація", details: "Проведено планову вакцинацію. Реакція нормальна." }
];

function PatientCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleShow = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  return (
    <PatientWrapper>
      <Container>
        <h2 className="mb-4 text-start fw-bold" style={{ color: '#282c34' }}>База пацієнтів</h2>
        <Row className="g-4">
          {patientsData.map((patient, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <StyledCard>
                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="fs-4 fw-bold text-dark mb-1">{patient.name}</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">ID: #{patient.id}</Card.Subtitle>
                  <Card.Text className="lh-lg flex-grow-1">
                    <strong>Останній візит:</strong> {patient.date}<br/>
                    <strong>Лікуючий лікар:</strong> {patient.doctor}
                  </Card.Text>
                  <div className="mb-4 mt-3">
                    <CustomBadge bg={patient.status === "Здоровий" ? "success" : "warning"} className="me-2">
                      {patient.status}
                    </CustomBadge>
                    <CustomBadge bg="info">{patient.type}</CustomBadge>
                  </div>
                  <ClinicButton className="w-100 mt-auto" onClick={() => handleShow(patient)}>
                    Переглянути медичну карту
                  </ClinicButton>
                </Card.Body>
              </StyledCard>
            </Col>
          ))}
        </Row>

        <StyledModal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>Медична карта: {selectedPatient?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4 lh-lg">
            <p><strong>ID пацієнта:</strong> {selectedPatient?.id}</p>
            <p><strong>Лікуючий лікар:</strong> {selectedPatient?.doctor}</p>
            <p><strong>Дата візиту:</strong> {selectedPatient?.date}</p>
            <hr />
            <p><strong>Висновок лікаря:</strong></p>
            <p>{selectedPatient?.details}</p>
          </Modal.Body>
          <Modal.Footer className="border-top-0 pb-4 pe-4">
            <Button variant="secondary" onClick={handleClose} style={{ borderRadius: '25px' }}>
              Закрити
            </Button>
          </Modal.Footer>
        </StyledModal>
      </Container>
    </PatientWrapper>
  );
}

export default PatientCard;