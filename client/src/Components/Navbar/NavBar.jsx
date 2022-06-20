import React from 'react';
import {
  Button, Collapse, Nav, Navbar, NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalAction } from '../../Redux/Actions/loginModalAction';
import { regModalAction, regUser, userLogOut } from '../../Redux/Actions/regModalAction';
import taskModalAction from '../../Redux/Actions/taskModalAction';

export default function NavBar() {
  const logo = 'logoPlusKkarme.png';
  const { user } = useSelector((state) => state);
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

  // const logOutHAndler = () => {
  //   dispatch(userLogOut());
  // };

  return (
    <div>
      <Navbar
        expand="sm"
      >
        <Link to="/">
          <img src={logo} alt="logo" height={70} className="logo" />
        </Link>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <Link to="/lk">
              <Button>
                lk
              </Button>
            </Link>
            <Link to="/newTask">
              <Button outline onClick={changeTaskModal} className="registerBtn">
                Создать задачу
              </Button>
            </Link>
            <Link to="/registration">
              <Button outline onClick={changeRegModal} className="registerBtn">
                Зарегистрироваться
              </Button>
            </Link>
            <Link to="/login">
              <Button outline onClick={changeLoginModal} className="loginBtn">
                Логин
              </Button>
            </Link>
          </Nav>
          {/* <NavbarText onClick={logOutHAndler}>
            {user.name ? `Hi, ${user.name}` : 'Login please'}
          </NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
