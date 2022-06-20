import React from 'react';
import { Col, Row } from 'reactstrap';
import ChatForm from '../ChatForm/ChatForm';
import lkSideBar from '../SideBar/lkSideBar';

export default function ChatsPage() {
  return (
    <Row>
      <Col md-2>
      <lkSideBar />
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
