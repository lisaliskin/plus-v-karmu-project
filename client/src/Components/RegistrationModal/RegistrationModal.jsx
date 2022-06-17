import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Form,
  FormGroup, Input, Label, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import regModalAction from '../../Redux/Actions/regModalAction';

export default function RegistrationModal() {
  // const [loginModal, setLoginModal] = useState(false);
  const { regModal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(regModalAction(false));
  };
  const changeRegModal = () => {
    dispatch(regModalAction(true));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(changePostAction(post));
    dispatch(regModalAction(false));
  };

  return (
    <div>
      <Button onClick={changeRegModal}>
        Зарегистрироваться
      </Button>
      <Modal isOpen={regModal} toggle={closeHandler}>
        <ModalHeader toggle={closeHandler}>Регистрация</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Имя
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="..."
                // value={post.title || ''}
                type="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Введите ваш номер телефона
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="..."
                // value={post.title || ''}
                type="phone"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Введите ваш Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="..."
                // value={post.title || ''}
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Придумайте пароль
              </Label>
              <Input
                id="password1"
                name="password1"
                placeholder="new password"
                // value={post.body || ''}
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Повторите пароль
              </Label>
              <Input
                id="password2"
                name="password2"
                placeholder="repeat new password"
                // value={post.body || ''}
                type="password"
              />
            </FormGroup>
            <Button
              color="success"
              outline
              onClick={submitHandler}
            >
              Войти
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
