import { Card } from "react-bootstrap";
const CardDescription = ({ itemsHeader, iconToDisplay, description }) => {
  return (
    <>
      <Card className="shadow rounded historyOfIllnessCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body className="cardDescriptionBody scrollable">
          <small>
            {description}
          </small>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardDescription;
