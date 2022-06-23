import React from "react";
import { Row } from "reactstrap";
import { useSelector } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";
import LkSideBar from "../SideBar/LkSideBar";

export default function AccountPage() {
  const { tasks } = useSelector((state) => state);
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <h4>Мои невыполненные добрые дела</h4>
        {tasks.map((el) => <TaskForm key={el.id} el={el} />)}
      </div>
    </Row>
  );
}
