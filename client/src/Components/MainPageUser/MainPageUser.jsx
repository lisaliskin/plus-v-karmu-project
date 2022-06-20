import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export default function MainPageUser() {
  return (
    <div>
      <Container>
        <Row className="justify-content-start" style={{ color: '#7776BC' }}>
          <Col className="col-3">
            <h2>Категории добрых дел</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
