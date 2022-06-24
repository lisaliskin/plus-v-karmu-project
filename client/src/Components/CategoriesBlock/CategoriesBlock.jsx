import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import CatAndSubCat from './CategoryBlock';

export default function CategoriesBlock() {
  const { categories, subCat } = useSelector((state) => state);
  return (
    <Col className="col-3">
      <h5>Категории добрых дел</h5>
      <hr />

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {categories.map((el) => (
          <CatAndSubCat
            key={el.id}
            el={el}
          />
        ))}
        {/* {subCat.map((el) => (
          <SubCatBlock
            key={el.id}
            el={el}
          />
        ))} */}
      </div>
    </Col>
  );
}
