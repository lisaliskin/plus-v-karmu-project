import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Form,
  FormGroup, Input, Label, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import { loginModalAction, userSignIn } from '../../Redux/Actions/loginModalAction';

export default function LoginModal() {
  const [inputs, setInputs] = useState({});

  // const [loginModal, setLoginModal] = useState(false);
  const { loginModal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeHandler = () => {
    dispatch(loginModalAction(false));
  };
  const changeLoginModal = () => {
    dispatch(loginModalAction(true));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignIn(inputs));
    setInputs({});
  };

  return (
    <div>
      <Modal isOpen={loginModal} toggle={closeHandler}>
        <ModalHeader toggle={closeHandler}>LogIn</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="your email"
                value={inputs.email || ''}
                onChange={inputHandler}
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="your password"
                value={inputs.password || ''}
                onChange={inputHandler}
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
