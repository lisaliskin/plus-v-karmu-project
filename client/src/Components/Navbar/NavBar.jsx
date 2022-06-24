import React, { useEffect } from "react";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarText,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import regModalAction from "../../Redux/Actions/regModalAction";
import taskModalAction from "../../Redux/Actions/taskModalAction";
// import { userLogOut } from "../../Redux/Actions/regUserAction";
import loginModalAction from "../../Redux/Actions/loginModalAction";
import { getAllChats } from "../../Redux/Actions/chatAction";
import { logOut } from "../../Redux/Actions/logUserAction";
import logo from '../../icons/logoPlusKkarme.png';
import lk from '../../icons/user.png';
import message from '../../icons/envelope.png';

export default function NavBar() {
  const { userSignIn, user } = useSelector((state) => state);
  // const id = userSignIn.id;
  const dispatch = useDispatch();

  const changeLoginModal = () => {
    console.log('hello');
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
    dispatch(getAllChats(userSignIn));
  }, [userSignIn]);

  return (
    <div>
      <Navbar expand="sm">
        <Link to="/">
          <img src={logo} alt="logo" height={70} id="logo" />
        </Link>
        <Row>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              {userSignIn?.id ? (
                // <>
                <div className="justify-content-md-start">
                  <Link to="/account">
                    <img src={lk} alt="lk" height={40} id="icon" />
                  </Link>
                  <Link to="/account/chats">
                    <img src={message} alt="message" height={40} id="icon" />
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
                  <Button
                    onClick={changeRegModal}
                    className="btn"
                    style={{
                      marginRight: '50px',
                      color: "#FFEC51",
                      backgroundColor: "#7776BC",
                    }}
                  >
                    Зарегистрироваться
                  </Button>
                  <Button
                    onClick={changeLoginModal}
                    className="btn"
                    style={{
                      marginRight: '50px',
                      color: "#FFEC51",
                      backgroundColor: "#7776BC",
                    }}
                  >
                    Логин
                  </Button>
                </>
              )}
            </Nav>
          </Collapse>
        </Row>
      </Navbar>
    </div>
  );
}
