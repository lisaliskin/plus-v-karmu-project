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
import NavBar from './Components/Navbar/NavBar';
import AccountPage from './Components/AccountPage/AccountPage';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/register" element={<RegistrationModal />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
