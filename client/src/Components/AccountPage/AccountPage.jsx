import React from "react";
import { Row } from "reactstrap";
import TaskForm from "../TaskForm/TaskForm";
import LkSideBar from "../SideBar/LkSideBar";

export default function AccountPage() {
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <h4>Мои невыполненные добрые дела</h4>
        <TaskForm />
        <TaskForm />
      </div>
    </Row>
  );
}
