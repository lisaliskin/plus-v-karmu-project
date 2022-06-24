import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  CardText,
  Row,
} from "reactstrap";
import { createChat, getAllChats } from "../../Redux/Actions/chatAction";

export default function MainPageCard({ el }) {
  const navigate = useNavigate();
  const doBtn = "icons/checkbox.png";
  const message = "icons/envelope.png";
  const dispatch = useDispatch();
  const { userSignIn } = useSelector((state) => state);
  const { chats } = useSelector((state) => state);
  const currentChat = chats[0];
  console.log('Выбранный чат', currentChat)
  
  // useEffect(() => {
  //   currentChat && navigate(`/account/chats/chat/${currentChat.id}`);
  // }, [chats])
  
  const messageHandler = (e) => {
    // const response = await axios.post('/chat/new', value);
    // getAllChats(response.data)
   dispatch(createChat({ el, userSignIn }));
  //  navigate(`/`);
  
  };
  // useEffect(() => {

  //   console.log('use effect chats --->',chats)
  //   // navigate(`/account/chats/chat/${currentChat.id}`);
  // }, [chats])
  return (
    <div className="container overflow-hidden p-3 bg-light shadow">
      <div className="row gx-5">
        <div className="col-2">
          <div className="p-3 bg-light">
            <img
              className="avatar rounded-circle col-8"
              src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-8">
          <Row className="d-flex align-items-center justify-content-center">
            <h4>{el.Subcategory.Category.name}</h4>
            {el.Subcategory.name}
            {el.description}
            <CardText>{el.name}</CardText>
          </Row>
        </div>
        <div className="col-2">
          <Row className="d-flex align-items-center justify-content-center">
            {/* <div className="d-flex align-items-center justify-content-center"> */}
            <Link to="/account/task" style={{ marginRight: "unset" }}>
              <img src={doBtn} alt="done" height={40} className="done" />
            </Link>
            <a to={`/account/chats/chat/${currentChat}`} onClick={messageHandler}>
              <img
                src={message}
                alt="message"
                height={40}
                className="message"
              />
            </a>
            {/* </div> */}
          </Row>
        </div>
      </div>
    </div>
  );
}
