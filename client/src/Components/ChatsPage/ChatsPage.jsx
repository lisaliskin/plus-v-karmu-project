import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Col, Row } from "reactstrap";
import LkList from "../AccountPage/LkList";
import ChatForm from "../ChatForm/ChatForm";
import LkSideBar from "../SideBar/LkSideBar";
import ChatIdPage from "../ChatIdPage/ChatIdPage";

export default function ChatsPage() {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state);
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <Row>
          <ChatIdPage />
        </Row>
      </div>
    </Row>
  );
}
