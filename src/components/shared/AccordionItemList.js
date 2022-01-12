import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
const AccordionItemList = ({
  itemsHeader,
  eventKey,
  listItems,
  iconToDisplay,
}) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header className="progressNotesCardHeader">
        {iconToDisplay}
        <strong>{itemsHeader}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <div className="scrollable" id="scrollableCard">
          <ListGroup variant="flush" as="ol" numbered>
            {listItems.map((item) => (
              <ListGroup.Item key={item} className="data" as="li">
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItemList;
