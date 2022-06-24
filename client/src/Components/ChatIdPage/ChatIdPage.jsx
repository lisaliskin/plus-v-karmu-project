import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button, Col, Container, Input, Row,
} from "reactstrap";
import { addMessage } from "../../Redux/Actions/messageAction";
import { useWsContext } from "../Context/Context";
import Message from "../Message/Message";

export default function ChatIdPage() {
  const { ws } = useWsContext();
  const { message } = useSelector((state) => state);
  const { userSignIn } = useSelector((state) => state);
  const { chats } = useSelector((state) => state);
  const { id } = useParams();
  console.log("------> чат id", id);
  const dispatch = useDispatch();
  const currentChat = chats.find((el) => el.id === Number(id));
  // console.log('_------> HAHAH',currentChat.messages[1].user_id,  'tvoi', userSignIn.id)
  const currentName = currentChat.messages.find(
    (el) => el.User.id !== userSignIn.id,
  );
  const { User } = currentName;
  console.log("----->Name", User);

  const [user_id, setUserId] = useState(userSignIn.id);
  const [messanger_id, changeMessengerId] = useState(Number(id));

  const [input, setInput] = useState({ user_id, messanger_id });
  console.log('input', input);

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
    //  dispatch(addMessage(input));
    ws.send(
      JSON.stringify({
        type: "SET_MESSAGE",
        payload: input,
      }),
    );
  };
  return (
    <Container>
      <h4 style={{ backgroundColor: 'white', border: '#7776BC' }}>{User.name}</h4>
      <div className="form-floating" style={{ backgroundColor: 'white' }}>
        {currentChat.messages.map((el) => {
          if (el.user_id === userSignIn.id) {
            return (
              <Message key={el.id} el={el} style={{ textAlign: "rigth" }} />
            );
          }
          return <Message key={el.id} el={el} style={{ textAlign: "left" }} />;
        })}
      </div>
      <div className="input-group mb-3">
        <input
          name="text"
          onChange={inputHandler}
          type="text"
          className="form-control"
          placeholder="введите сообщение"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          style={{
            color: "#FFEC51",
            backgroundColor: "#7776BC",
          }}
          onClick={messageHandler}
          type="button"
          id="button-addon2"
        >
          отправить
        </button>
      </div>
    </Container>
  );
}
