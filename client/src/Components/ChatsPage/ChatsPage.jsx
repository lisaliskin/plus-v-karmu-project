import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ChatForm from "../ChatForm/ChatForm";
import LkSideBar from "../SideBar/lkSideBar";

export default function ChatsPage() {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state)
  return (
    <Row>
      <Col md-2>
        <LkSideBar />
      </Col>
      <Col md-10>
        {chats.map(el => <ChatForm key={el.id} el={el} />)}
      </Col>
    </Row>
  );
}
