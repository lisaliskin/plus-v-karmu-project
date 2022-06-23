import React from 'react';
import { Col } from 'reactstrap';

export default function CategoriesBlock() {
  return (
    <Col className="col-3">
      <h5>Категории добрых дел</h5>
      <hr />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              помощь по дому
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">уборка</li>
              <li className="mb-1">готовка</li>
              <li className="mb-1">ремонт</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              няньки/сиделки
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">посидеть с ребенком</li>
              <li className="mb-1">позаботиться о пожилом человеке</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              животные
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">выгул собаки</li>
              <li className="mb-1">передержка котика</li>
              <li className="mb-1">передержка пёсика</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              одолжить
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">отдать даром</li>
              <li className="mb-1">дать погонять</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              репетиторство
            </button>
          </h2>
          <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">помощь с д/з</li>
              <li className="mb-1">профессиональные задачи</li>
              <li className="mb-1">иностранные языки</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              транспорт
            </button>
          </h2>
          <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">переезд</li>
              <li className="mb-1">ремонт(велик, скейт и тд)</li>
              <li className="mb-1">подвезти</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
              общение
            </button>
          </h2>
          <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">психологическая помощь</li>
              <li className="mb-1">просто поговорить</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
              красота и здоровье
            </button>
          </h2>
          <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">прически/стрижка</li>
              <li className="mb-1">массаж</li>
              <li className="mb-1">макияж</li>
              <li className="mb-1">спорт</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
              фотосессии/видеосъемка
            </button>
          </h2>
          <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
            <ul className="accordion-body list-unstyled">
              <li className="mb-1">фотосессии</li>
              <li className="mb-1">видеосъемка</li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
}
