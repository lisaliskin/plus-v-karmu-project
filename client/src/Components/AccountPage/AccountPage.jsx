import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";
import LkSideBar from "../SideBar/LkSideBar";
import { getAllTasksAction } from "../../Redux/Actions/tasksGet";
// import { getAllTasksAction } from "../../Redux/Actions/tasksAction";

export default function AccountPage() {
  const {
    tasks, taskModal, chosenSubCat, userSignIn,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasksAction());
    // if (!tasks.length) {
    //   console.log(tasks)
    // }
  }, [taskModal]);
  // const mySubTasks = tasks.filter((el) => el.podpisan_id === userSignIn.id);
  // const myTasks = tasks.filter((el) => el.creator_id === userSignIn.id);
  return (
    <Row xs={8}>
      <div className="mt-10 col">
        <LkSideBar />
      </div>
      <div className="col-8">
        <h4>Мои подписанные таски</h4>
        {tasks.length && tasks.filter((el) => el.podpisan_id === userSignIn.id)
          .map((el) => <TaskForm key={el.id} el={el} />)}
      </div>
      <div className="col-8">
        <h4>Мои созданные таски</h4>
        {tasks.length && tasks.filter((el) => el.creator_id === userSignIn.id)
          .map((el) => <TaskForm key={el.id} el={el} />)}
      </div>
    </Row>
  );
}
