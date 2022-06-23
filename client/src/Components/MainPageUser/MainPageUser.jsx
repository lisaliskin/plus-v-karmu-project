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
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true">
              <div id="item-1">
                <h4>помощь по дому</h4>
              </div>
              <div id="item-1-1">
                <h5>Item 1-1</h5>
                <p>...</p>
              </div>
              <div id="item-1-2">
                <h5>Item 1-2</h5>
                <p>...</p>
              </div>
              <div id="item-2">
                <h4>Item 2</h4>
                <p>...</p>
              </div>
              <div id="item-3">
                <h4>Item 3</h4>
                <p>...</p>
              </div>
              <div id="item-3-1">
                <h5>Item 3-1</h5>
                <p>...</p>
              </div>
              <div id="item-3-2">
                <h5>Item 3-2</h5>
                <p>...</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
