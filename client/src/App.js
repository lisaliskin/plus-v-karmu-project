import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar } from 'reactstrap';
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

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logIn" element={<LoginModal />} />
        <Route path="/lk" element={<Lk1 />} />
        <Route path="/newTask" element={<TaskModal />} />
        <Route path="/registration" element={<RegistrationModal />} />
      </Routes>
      {/* <LoginModal />
      <RegistrationModal /> */}
    </Container>
  );
}

export default App;
