import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import {
  Routes,
  Route,
} from 'react-router-dom';
import LoginModal from './Components/LoginModal/LoginModal';
import RegistrationModal from './Components/RegistrationModal/RegistrationModal';
import MainPage from './Components/MainPage/MainPage';
import TaskModal from './Components/TaskModal/TaskModal';
import NavBar from './Components/Navbar/NavBar';
import ChatsPage from './Components/ChatsPage/ChatsPage';
import AccountPage from './Components/AccountPage/AccountPage';
import MainPageUser from './Components/MainPageUser/MainPageUser';
import ChatIdPage from './Components/ChatIdPage/ChatIdPage';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPageUser />} />
          {/* <Route path="/login" element={<LoginModal />} /> */}
          {/* <Route path="/registration" element={<RegistrationModal />} /> */}
          <Route path="/account" element={<AccountPage />} />
          <Route path="/newtask" element={<TaskModal />} />
          <Route path="/account/chats" element={<ChatsPage />} />
          <Route path="/chats/chat/1" element={<ChatIdPage />} />
        </Routes>
        <LoginModal />
        <RegistrationModal />
        <TaskModal />
      </Container>
    </>
  );
}

export default App;
