import React from "react";
import { Row } from "reactstrap";
import LkSideBar from "../SideBar/lkSideBar";
import TaskForm from "../TaskForm/TaskForm";

export default function AccountPage() {
  return (
    <Row>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <TaskForm />
        <TaskForm />
        <TaskForm />
        <TaskForm />
      </div>
    </Row>
  );
}
