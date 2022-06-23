import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button, Col, Container, Input, Row,
} from "reactstrap";
import { addMessage } from "../../Redux/Actions/messageAction";
import { useWsContext } from "../Context/Context";
import Message from "../Message/Message";

export default function ChatIdPage() {
  const { ws } = useWsContext();
  const { message } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(1);
  const [messangerId, changeMessengerId] = useState(1);

  const [input, setInput] = useState({ userId, messangerId });

  // useEffect(() => {
  //   if (ws.readyState === 1) {
  //     ws.send(JSON.stringify({
  //       type:'SET_MESSAGE',
  //       payload: input
  //     }))
  //     ws.onmessage = function (input) {
  //       console.log(`[message] Данные получены с сервера: ${input}`)
  //     };
  //   }
  //   console.log(ws);
  // }, []);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const messageHandler = (e) => {
    ws.send(JSON.stringify({
      type: 'SET_MESSAGE',
      payload: input,

    }));

    dispatch(addMessage(input));
  };
  return (
    <Container>
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} />
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="введите сообщение" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">отправить</button>
      </div>
      {message.map((el) => (
        <Message key={el.id} el={el} />
      ))}
      <Row>
        <Col>
          <Input
            name="text"
            onChange={inputHandler}
            placeholder="input text"
          />
        </Col>
        <Col>
          <Button
            type="submit"
            onClick={messageHandler}
          >
            Отправить
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
