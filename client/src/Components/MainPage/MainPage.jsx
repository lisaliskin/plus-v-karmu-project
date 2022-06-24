/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardGroup, Col, Container, Row,
} from 'reactstrap';
import { catAction } from '../../Redux/Actions/categoriesAction';
import { subCatAction } from '../../Redux/Actions/subCatAction';
import { getAllTasksAction1 } from '../../Redux/Actions/tasksAction';
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

  const { tasks, chosenSubCat } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTasksAction());
    console.log('1234567');
    // if (!tasks.length) {
    //   console.log(tasks)
    // }
  }, [chosenSubCat]);

  // console.log(tasks[0])
  return (
    <div>
      <Container>
        <Row className="justify-content-start" style={{ color: '#7776BC' }}>
          <CategoriesBlock />
          <Col className="col-9">
            <h3>Добрые делишки</h3>
            <CardGroup>
              {chosenSubCat.id
                ? (tasks.filter((el) => el.subcategory_id === chosenSubCat.id).length
                  ? (tasks.filter((el) => el.subcategory_id === chosenSubCat.id)
                    .map((el) => <MainPageCard key={el.id} el={el} />))
                  : <div>Пока нет вариантов по данной категории</div>)
                : (tasks.length && tasks
                  .map((el) => <MainPageCard key={el.id} el={el} />))}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
