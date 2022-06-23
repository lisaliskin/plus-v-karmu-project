import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoriesBlock from '../CategoriesBlock/CategoriesBlock';

export default function MainPageUser() {
  return (
    <div>
      <Container>
        <Row className="justify-content-start" style={{ color: '#7776BC' }}>
          <CategoriesBlock />
          <Col className="col-9">
            здесь должна быть отфильтрованная таска
          </Col>
        </Row>
      </Container>
    </div>
  );
}
