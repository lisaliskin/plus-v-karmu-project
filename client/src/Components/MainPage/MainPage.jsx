import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardGroup, Col, Container, Row,
} from 'reactstrap';
import { catAction } from '../../Redux/Actions/categoriesAction';
import { subCatAction } from '../../Redux/Actions/subCatAction';
import { getAllTasksAction } from '../../Redux/Actions/tasksGet';
import CategoriesBlock from '../CategoriesBlock/CategoriesBlock';
import MainPageCard from '../MainPageCard/MainPageCard';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catAction());
  }, []);
  useEffect(() => {
    dispatch(subCatAction());
  }, []);

  const { tasks } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTasksAction());
    // if (!tasks.length) {
    //   console.log(tasks)
    // }
  }, []);

  // console.log(tasks[0])
  return (
    <div>
      <Container>
        <Row className="justify-content-start" style={{ color: '#7776BC' }}>
          <CategoriesBlock />
          <Col className="col-9">
            <h3>Добрые делишки</h3>
            <CardGroup>
              { tasks.length && tasks.map((el) => <MainPageCard el={el} key={el.id} />) }
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
