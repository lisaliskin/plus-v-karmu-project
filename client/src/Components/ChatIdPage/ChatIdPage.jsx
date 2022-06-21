import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button, Col, Container, Row,
} from "reactstrap";
import { addMessage } from "../../Redux/Actions/messageAction";
import { useWsContext } from "../Context/Context";
import Message from "../Message/Message";


export default function ChatIdPage() {
  const { ws } = useWsContext();
  const { message } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [user_id, setUserId] = useState(1);
  const [messanger_id, changeMessengerId] = useState(1);

  const [input, setInput] = useState({ user_id, messanger_id });

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
      type:'SET_MESSAGE',
      payload: input
    }))

    dispatch(addMessage(input));
  };
  return (
    <Container>
      {message.map((el) => (
        <Message key={el.id} el={el} />
      ))}
      <Row>
        <Col>
          <input name="text" placeholder="input text" onChange={inputHandler} />
        </Col>
        <Col>
          <Button type="submit" onClick={messageHandler}>
            Отправить
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
