import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'reactstrap';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import LoginModal from './Components/LoginModal/LoginModal';
import RegistrationModal from './Components/RegistrationModal/RegistrationModal';
import MainPage from './Components/MainPage/MainPage';
import loginModalAction from './Redux/Actions/loginModalAction';
import TaskModal from './Components/TaskModal/TaskModal';
import Lk1 from './Components/Lk1/Lk1';
import NavBar from './Components/Navbar/NavBar';
import AccountPage from './Components/AccountPage/AccountPage';
import MainPageUser from './Components/MainPageUser/MainPageUser';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPageUser />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/registration" element={<RegistrationModal />} />
          <Route path="/account" element={<Lk1 />} />
          <Route path="/newTask" element={<TaskModal />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
