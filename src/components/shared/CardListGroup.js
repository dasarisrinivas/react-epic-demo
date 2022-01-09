import {
  Card,
  ListGroup
} from "react-bootstrap";
const CardListGroup = ({
  itemsHeader,
  itemList,
  iconToDisplay
}) => {

  return (
    <>
      <Card className="shadow rounded progressNotesCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}<strong>{itemsHeader}</strong>
        </Card.Header>
        <div className="scrollable" id="scrollableCard">
          <ListGroup variant="flush" as="ol" numbered>
            {itemList.map((item) => (
              <ListGroup.Item key={item} className="data cardListitem" as="li">
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Card>
    </>
  );
};

export default CardListGroup;
