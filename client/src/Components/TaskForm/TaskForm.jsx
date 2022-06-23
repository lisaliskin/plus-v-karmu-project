import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskForm() {
  const chooseBtn = 'icons/check-mark.png';
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
          <p>Здесь должна быть таска</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link to="/account/chat" style={{ marginRight: 'unset' }}>
            <img src={chooseBtn} alt="done" height={40} className="done" />
          </Link>
        </div>
      </div>
    </div>
  );
}
