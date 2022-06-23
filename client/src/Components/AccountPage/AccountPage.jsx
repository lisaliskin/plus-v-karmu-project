import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";
import LkSideBar from "../SideBar/LkSideBar";
import { getAllTasksAction } from "../../Redux/Actions/tasksGet";
// import { getAllTasksAction } from "../../Redux/Actions/tasksAction";

export default function AccountPage() {
  const { tasks, taskModal } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasksAction());
    // if (!tasks.length) {
    //   console.log(tasks)
    // }
  }, [taskModal]);
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
