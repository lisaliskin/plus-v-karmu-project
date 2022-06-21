import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row,
} from 'reactstrap';
import regModalAction from '../../Redux/Actions/regModalAction';
import { regUser } from '../../Redux/Actions/regUserAction';

export default function RegistrationModal({ onHide }) {
  const [inputs, setInputs] = useState({});
  // const [loginModal, setLoginModal] = useState(false);
  const { regModal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(regModalAction(false));
  };
  // const changeRegModal = () => {
  //   dispatch(regUser(true));
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(changePostAction(post));
    dispatch(regUser(inputs));
    dispatch(regModalAction(false));

    // dispatch(regModalAction(false));
  };

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Modal className="modal-dialog modalFullscreenXlDown" isOpen={regModal} toggle={closeHandler}>
        <ModalHeader toggle={closeHandler}>Регистрация</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Имя
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="..."
                  onChange={inputHandler}
                  value={inputs.name || ''}
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Номер телефона
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="..."
                  onChange={inputHandler}
                  value={inputs.phone || ''}
                  type="phone"
                />
              </FormGroup>
            </Col>
          </Row>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Введите ваш Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="..."
                onChange={inputHandler}
                value={inputs.email || ''}
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
                onChange={inputHandler}
                value={inputs.password1 || ''}
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
                onChange={inputHandler}
                value={inputs.password2 || ''}
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="role"
                name="role"
                onChange={inputHandler}
                value={inputs.role || 'USER'}
                type="hidden"
              />
            </FormGroup>
            <Row xs={2} className="row justify-content-md-center">
              <Button
                onClick={submitHandler}
                // data-dismiss="modal-dialog"
                className="fst-italic col-5"
                style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}
              >
                Зарегистрироваться
              </Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
