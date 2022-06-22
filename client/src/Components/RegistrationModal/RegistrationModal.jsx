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
                  // value={post.title || ''}
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
                  // value={post.title || ''}
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
            <Row xs={2} className="row justify-content-md-center">
              <Button
                color="success"
                outline
                onClick={submitHandler}
                className="fst-italic col-5"
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
