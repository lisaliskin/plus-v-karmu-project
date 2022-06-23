import React from "react";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import LkSideBar from "../SideBar/LkSideBar";
import TaskForm from "../TaskForm/TaskForm";

export default function AccountPage() {
  const { tasks } = useSelector((state) => state);
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <h4>Мои невыполненные добрые дела</h4>
        {tasks.length && tasks.map((el) => <TaskForm key={el.id} el={el} />)}
      </div>
    </Row>
  );
}
