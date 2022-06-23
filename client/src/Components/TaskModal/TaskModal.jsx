import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import taskModalAction from '../../Redux/Actions/taskModalAction';

export default function TaskModal() {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }
  const { taskModal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(taskModalAction(false));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(changePostAction(post));
    dispatch(taskModalAction(false));
  };
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <Modal isOpen={taskModal} toggle={closeHandler}>
        <ModalHeader>
          Cоздать задачу
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <div>Дата события</div>
              <Input
                placeholder="Дата события..."
                type="date"
                id="date"
                name="date"
                // value={inputHandler && `${formatDate(new Date())}`}
                min={`${formatDate(new Date())}`}
                max="2023-12-31"
              />
            </FormGroup>
            <FormGroup>
              <div>Категория помощи</div>
              <Input
                id="category"
                name="category"
                type="select"
              >
                <option value="30">
                  ...
                </option>
                <option value="помощь по дому">
                  помощь по дому
                </option>
                <option value="няньки/сиделки">
                  няньки/сиделки
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Суть задачи..."
                rows={5}
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label>Количество людей, если они нужны</Label>
              <Input
                id="number"
                name="number"
                type="select"
              >
                <option value="num">
                  ...
                </option>
                <option value="3">
                  1-3
                </option>
                <option value="7">
                  4-7
                </option>
                <option value="15">
                  7-15
                </option>
                <option value="many">
                  больше 15-ти
                </option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{ color: '#FFEC51', backgroundColor: '#7776BC', fontFamily: 'Menlo' }}
            onClick={submitHandler}
          >
            Создать
          </Button>
          {' '}
          <Button
            onClick={closeHandler}
            style={{ color: '#7776BC', backgroundColor: '#FFEC51', fontFamily: 'Menlo' }}
          >
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
