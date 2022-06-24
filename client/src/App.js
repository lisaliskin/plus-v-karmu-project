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
import ChatIdPage from './Components/ChatIdPage/ChatIdPage';
import ChatPage from './Components/ChatPage/ChatsPage';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/account" element={<AccountPage />} />
          {/* <Route path="/newtask" element={<TaskModal />} /> */}
          <Route path="/account/chats" element={<ChatsPage />} />
          <Route path="/account/chats/chat/:id" element={<ChatPage />} />
        </Routes>
        <LoginModal />
        <RegistrationModal />
        <TaskModal />
      </Container>
    </>
  );
}

export default App;
