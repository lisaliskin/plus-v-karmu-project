import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import LkSideBar from "../SideBar/LkSideBar";
import MessForm from "../MessForm/MessForm";

export default function ChatsPage() {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state);
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        {chats.map((el) => (
          <MessForm key={el.id} el={el} />
        ))}
      </div>
    </Row>
  );
}
