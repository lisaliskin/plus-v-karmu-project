import React from 'react';
import { Col } from 'reactstrap';

export default function CategoriesBlock() {
  return (
    <Col className="col-3">
      <nav id="navbar-example3" className="navbar flex-column align-items-stretch p-3">
        <a className="navbar-brand" href="#">
          <h5>Категории добрых дел</h5>
          <hr />
        </a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link" href="#item-1">помощь по дому</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-1-1">уборка</a>
            <a className="nav-link ms-3 my-1" href="#item-1-2">готовка</a>
            <a className="nav-link ms-3 my-1" href="#item-1-3">ремонт</a>
          </nav>
          <a className="nav-link" href="#item-2">няньки/сиделки</a>
          <a className="nav-link" href="#item-3">животные</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-3-1">выгул</a>
            <a className="nav-link ms-3 my-1" href="#item-3-2">передержка</a>
          </nav>
          <a className="nav-link" href="#item-4">одолжить</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-4-1">навсегда</a>
            <a className="nav-link ms-3 my-1" href="#item-4-2">временно</a>
          </nav>
          <a className="nav-link" href="#item-5">репетиторство</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-5-1">помощь с д/з</a>
            <a className="nav-link ms-3 my-1" href="#item-5-2">профессиональные задачи</a>
            <a className="nav-link ms-3 my-1" href="#item-5-3">иностранные языки</a>
          </nav>
          <a className="nav-link" href="#item-6">транспорт</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-6-1">транспорт</a>
            <a className="nav-link ms-3 my-1" href="#item-6-2">ремонт транспорта(велосипед и тд)</a>
            <a className="nav-link ms-3 my-1" href="#item-6-3">такси</a>
          </nav>
          <a className="nav-link" href="#item-7">общение</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-7-1">психолог</a>
            <a className="nav-link ms-3 my-1" href="#item-7-2">просто поговорить</a>
          </nav>
          <a className="nav-link" href="#item-8">красота и здоровье</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ms-3 my-1" href="#item-8-1">макияж</a>
            <a className="nav-link ms-3 my-1" href="#item-8-2">прически/стрижки</a>
            <a className="nav-link ms-3 my-1" href="#item-8-3">массаж</a>
            <a className="nav-link ms-3 my-1" href="#item-8-4">спорт</a>
          </nav>
          <a className="nav-link" href="#item-9">фотосессии/видеосъемка</a>
        </nav>
      </nav>
    </Col>
  );
}
