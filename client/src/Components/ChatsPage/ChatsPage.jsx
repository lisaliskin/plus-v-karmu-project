import React from "react";
import { Col, Row } from "reactstrap";
import ChatForm from "../ChatForm/ChatForm";
import LkSideBar from "../SideBar/lkSideBar";

export default function ChatsPage() {
  return (
    <Row>
      <Col md-2>
        <LkSideBar />
      </Col>
      <Col md-10>
        <ChatForm />
        <ChatForm />
        <ChatForm />
        <ChatForm />
      </Col>
    </Row>
  );
}
