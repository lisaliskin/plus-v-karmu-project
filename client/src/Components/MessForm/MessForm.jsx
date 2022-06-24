import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import chooseBtn from '../../icons/unCheck.png';

export default function MessForm({ el }) {
  return (
    <div className="container overflow-hidden p-3 bg-light shadow">
      <div className="row gx-5">
        <div className="col-2">
          <div className="p-3 bg-light">
            <img
              className="avatar rounded-circle col-8"
              src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-8 d-flex align-items-center justify-content-center">
          <p>{el.messages[el.messages.length - 1].text}</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link to={`/account/chats/chat/${el.id}`} style={{ marginRight: 'unset' }}>
            <Button
              style={{
                color: "#FFEC51",
                backgroundColor: "#7776BC",
                marginRight: '30px',
              }}
            >
              Перейти
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
