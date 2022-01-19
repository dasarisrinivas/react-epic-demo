import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
const AccordionItemList = ({
  itemsHeader,
  eventKey,
  listItems,
  isExpanded,
  iconToDisplay,
}) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header className="medflowAccodionHeader">
        {iconToDisplay}
        <strong >{itemsHeader}</strong>
          <FontAwesomeIcon
                icon={isExpanded ? faMinusCircle : faPlusCircle}
                className="headerIcon mx-2"
                size="lg"
              />
        
      </Accordion.Header>
      {isExpanded && (
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
      )}
    </Accordion.Item>
  );
};

export default AccordionItemList;
