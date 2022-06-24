import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { taskModal, userSignIn } = useSelector((state) => state);
  const dispatch = useDispatch();

  const memoSubCat = useMemo(() => subCat
    .filter((el) => el.category_id === currentCat), [currentCat]);

  // console.log('_______', memoSubCat);

  const closeHandler = () => {
    dispatch(taskModalAction(false));
  };
  useEffect(() => {
    // console.log(currentCat);
  }, [currentCat]);
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO написать обработчик события
    if (!inputs.subcategory_id) {
      return;
    }
    console.log('sdafsadf', inputs);
    console.log('sdafsadf', inputs.subcategory_id);
    console.log('sdafsadf=============', memoSubCat.find((el) => el.name === inputs.subcategory_id).id);
    const formData = {
      ...inputs,
      subcategory_id: memoSubCat.find((el) => el.name === inputs.subcategory_id).id,
      user_id: userSignIn.id,
    };
    dispatch(getOneTasksAction(formData));
    dispatch(taskModalAction(false));
  };

  const inputHandler = (e) => {
    console.log('inputHandler', e.target.name, e.target.value);
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
            {/* <FormGroup>
              <Input
                // type="hidden"
                id="user_id"
                name="user_id"
                onChange={inputHandler}
                value={`${userSignIn.id}`}
              />
            </FormGroup> */}
            <FormGroup>
              <div>Дата события</div>
              <Input
                placeholder="Дата события..."
                type="date"
                id="name"
                name="name"
                onChange={inputHandler}
                value={inputs.name || ''}
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
                <option id={99} value="" hidden disable>
                  выберите
                </option>
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
