import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { getAllTasksAction } from '../../Redux/Actions/tasksGet';
import MainPageCard from '../MainPageCard/MainPageCard';

export default function MainPage() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTasksAction());
    // if (!tasks.length) {
    //   console.log(tasks)
    // }
  }, []);

  // console.log(tasks[0])
  return (
    <div className="container">
      <h1>Все о проекте</h1>
      <p>здесь будет описание нашего проекта, для кого и с какой целью он создан</p>
      <div className="containerExample">
        <h3>Примеры добрых дел</h3>
        <CardGroup>
          { tasks.map((el) => <MainPageCard el={el} key={el.id} />) }
        </CardGroup>
      </div>
    </div>
  );
}
