import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Form,
  FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row,
} from 'reactstrap';
import loginModalAction from '../../Redux/Actions/loginModalAction';

export default function LoginModal() {
  // const [loginModal, setLoginModal] = useState(false);
  const { loginModal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(loginModalAction(false));
  };
  const changeLoginModal = () => {
    dispatch(loginModalAction(true));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(changePostAction(post));
    dispatch(loginModalAction(false));
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
                // value={post.title || ''}
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
                // value={post.body || ''}
                type="password"
              />
            </FormGroup>
            <Row xs={4} className="row justify-content-md-center">
              <Button
                onClick={submitHandler}
                style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}
              >
                Войти
              </Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
