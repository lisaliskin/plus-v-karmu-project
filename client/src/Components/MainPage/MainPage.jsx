import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { catAction } from '../../Redux/Actions/categoriesAction';
import { getAllTasksAction } from '../../Redux/Actions/tasksGet';

export default function MainPage() {
  const dispatch = useDispatch();
  // const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(catAction());
  }, []);

  const { tasks } = useSelector((state) => state);
  // useEffect(() => {
  //   if (!tasks.length) {
  //     dispatch(getAllTasksAction());
  //   }
  // }, []);
  return (
    <div className="container">
      <h1>Все о проекте</h1>
      <p>здесь будет описание нашего проекта, для кого и с какой целью он создан</p>
      <div className="containerExample">
        <h3>Примеры добрых дел</h3>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text
              </CardText>
              <Button style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                Button
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text
              </CardText>
              <Button style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                Button
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text
              </CardText>
              <Button style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                Button
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
