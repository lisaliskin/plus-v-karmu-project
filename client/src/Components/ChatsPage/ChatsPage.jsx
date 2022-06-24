import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import LkSideBar from "../SideBar/LkSideBar";
import MessForm from "../MessForm/MessForm";
import { nullCount } from "../../Redux/Actions/countAction";

export default function ChatsPage() {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state);
  const count = useSelector((state) => state.count);
  const allChats = chats.filter((el) => el.messages.length > 0);
  // console.log("Полученные чаты с сообщениями", allChats);

  useEffect(()=>{
    dispatch(nullCount())
  },[count])

  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        {allChats.map((el) => (
          <MessForm key={el.id} el={el} />
        ))}
      </div>
    </Row>
  );
}
