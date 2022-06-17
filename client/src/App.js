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
import ChatsPage from './Components/ChatsPage/ChatsPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logIn" element={<LoginModal />} />
        <Route path="/registration" element={<RegistrationModal />} />
        <Route path="/chats" element = {<ChatsPage />} />
      </Routes>
      {/* <LoginModal />
      <RegistrationModal /> */}
    </Container>
  );
}

export default App;
