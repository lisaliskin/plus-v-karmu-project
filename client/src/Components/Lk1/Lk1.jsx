import React, { useState } from 'react';
import {
  Accordion,
  Row,
} from 'reactstrap';
import lkSideBar from '../SideBar/lkSideBar';
import LkList from './LkList';

export default function Lk1() {
  const [togle1, setTogle1] = useState('0');

  const changeToggleFunc = (num) => {
    if (togle1 === '0') {
      setTogle1('1');
    } else {
      setTogle1('0');
    }
    // const num1 = num;

    // if (num1 === '0') {
    //   return '1';
    // }
    // return '0';
  };
  return (
    <Row sm={2}>
      <lkSideBar />
      <div className="col-8">
        <Row>
          <Accordion open={`${togle1}`} toggle={changeToggleFunc}>
            <div className="col">
              <LkList />
            </div>
          </Accordion>
        </Row>
      </div>
    </Row>
  );
}
