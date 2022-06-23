import React, { useEffect } from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarText,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import regModalAction from "../../Redux/Actions/regModalAction";
import taskModalAction from "../../Redux/Actions/taskModalAction";
import { userLogOut } from "../../Redux/Actions/regUserAction";
import loginModalAction from "../../Redux/Actions/loginModalAction";
import { getAllChats } from "../../Redux/Actions/chatAction";
import { logOut } from "../../Redux/Actions/logUserAction";

export default function NavBar() {
  const logo = "logoPlusKkarme.png";
  const { userSignIn, user } = useSelector((state) => state);
  // const id = userSignIn.id;
  const dispatch = useDispatch();
  const changeLoginModal = () => {
    dispatch(loginModalAction(true));
  };
  const changeRegModal = () => {
    dispatch(regModalAction(true));
  };
  const changeTaskModal = () => {
    dispatch(taskModalAction(true));
  };

  const logOutHAndler = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getAllChats(userSignIn))
  }, [userSignIn])

  return (
    <div>
      <Navbar expand="sm">
        <Link to="/">
          <img src={logo} alt="logo" height={70} className="logo" />
        </Link>
        <Row>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              {userSignIn?.id ? (
                // <>
                <div className="justify-content-md-start">
                  <Link to="/account">
                    <Button
                      style={{
                        color: "#FFEC51",
                        backgroundColor: "#7776BC",
                      }}
                    >
                      Личный кабинет
                    </Button>
                  </Link>
                  <Link to="/newTask">
                    <Button
                      onClick={changeTaskModal}
                      className="taskBtn"
                      style={{
                        color: "#FFEC51",
                        backgroundColor: "#7776BC",
                      }}
                    >
                      Создать задачу
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      style={{
                        color: "#FFEC51",
                        backgroundColor: "#7776BC",
                      }}
                      onClick={logOutHAndler}
                    >
                      Выйти
                    </Button>
                  </Link>
                </div>
                // </>
              ) : (
                <>
                  <Link to="/registration">
                    <Button
                      onClick={changeRegModal}
                      className="registerBtn"
                      style={{
                        color: "#FFEC51",
                        backgroundColor: "#7776BC",
                      }}
                    >
                      Зарегистрироваться
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      onClick={changeLoginModal}
                      className="loginBtn"
                      style={{
                        color: "#FFEC51",
                        backgroundColor: "#7776BC",
                      }}
                    >
                      Логин
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
            <NavbarText>
              {userSignIn?.name ? `Привет, ${userSignIn.name}` : ''}
            </NavbarText>
          </Collapse>
        </Row>
        {/* <NavbarText onClick={logOutHAndler}>
            {user.name ? `Hi, ${user.name}` : 'Login please'}
          </NavbarText> */}
      </Navbar>
    </div>
  );
}
