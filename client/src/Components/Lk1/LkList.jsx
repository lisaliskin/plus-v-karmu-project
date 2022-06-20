import React from 'react';
import {
  Accordion, AccordionBody, AccordionHeader, AccordionItem,
} from 'reactstrap';

export default function LkList() {
  return (
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <strong>
          This is the first items accordion body.
        </strong>
        You can modify any of this with
        {' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
  );
}
