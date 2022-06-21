import React from 'react';
import {
  Button, Collapse, Container, Nav, Navbar, NavbarText, Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import regModalAction from '../../Redux/Actions/regModalAction';
import taskModalAction from '../../Redux/Actions/taskModalAction';
import { userLogOut } from '../../Redux/Actions/regUserAction';
import loginModalAction from '../../Redux/Actions/loginModalAction';

export default function NavBar() {
  const logo = 'logoPlusKkarme.png';
  const { userSignIn, user } = useSelector((state) => state);
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
    dispatch(userLogOut());
  };

  return (
    <div>
      <Navbar
        expand="sm"
      >
        <Link to="/">
          <img src={logo} alt="logo" height={70} className="logo" />
        </Link>
        <Row>
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              {userSignIn?.id ? (
                <>
                  <Link to="/account">
                    <Button outline style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                      Личный кабинет
                    </Button>
                  </Link>
                  <Link to="/newTask">
                    <Button outline onClick={changeTaskModal} className="registerBtn" style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                      Создать задачу
                    </Button>
                  </Link>
                  <Link to="/">
                    Выйти
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/registration">
                    <Button outline onClick={changeRegModal} className="registerBtn" style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                      Зарегистрироваться
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button outline onClick={changeLoginModal} className="loginBtn" style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}>
                      Логин
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
            <NavbarText onClick={logOutHAndler}>
              {userSignIn.name ? `Привет, ${userSignIn.name}` : 'Login please'}
            </NavbarText>
          </Collapse>
        </Row>
      </Navbar>
    </div>
  );
}
