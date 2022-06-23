import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './TaskModal.css';
import {
  Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import taskModalAction from '../../Redux/Actions/taskModalAction';
import Optionss from './options';
import { getOneTasksAction } from '../../Redux/Actions/tasksAction';

export default function TaskModal() {
  const [inputs, setInputs] = useState({});
  const { categories, subCat } = useSelector((state) => state);
  const [currentCat, setCurrentCat] = useState(categories[0]?.id || null);
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

  const memoSubCat = useMemo(() => subCat
    .filter((el) => el.category_id === currentCat), [currentCat]);

  const closeHandler = () => {
    dispatch(taskModalAction(false));
  };
  useEffect(() => {
    console.log(currentCat);
  }, [currentCat]);
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      ...inputs, subcategory_id: memoSubCat.find((el) => el.name === inputs.subcategory_id).id,
    };
    dispatch(getOneTasksAction(formData));
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
                id="name"
                name="name"
                onChange={inputHandler}
                value={inputs.name || ''}
                // value={`${formatDate(new Date())}`}
                min={`${formatDate(new Date())}`}
                max="2023-12-31"
              />
            </FormGroup>
            <FormGroup>
              <div>Категория помощи</div>
              {categories.map((el) => (
                <div
                  className={currentCat === el.id && '_active'}
                  onClick={
                    () => setCurrentCat(el.id)
                  }
                >
                  {el.name}
                </div>
              ))}
            </FormGroup>
            <FormGroup>
              <div>Подкатегория помощи</div>
              <Input
                id="subcategory_id"
                name="subcategory_id"
                type="select"
                onChange={inputHandler}
                value={inputs.subcategory_id || ''}
              >
                {memoSubCat.map((el) => (
                  <Optionss
                    key={el.id}
                    el={el}
                  />
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                id="description"
                name="description"
                onChange={inputHandler}
                value={inputs.description || ''}
                placeholder="Суть задачи..."
                rows={5}
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label>Количество людей, если они нужны</Label>
              <Input
                id="img"
                name="img"
                onChange={inputHandler}
                value={inputs.img || ''}
                type="text"
              />
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
