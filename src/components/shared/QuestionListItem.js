import React from "react";
import {
  ListGroup,
  ToggleButtonGroup,
  ToggleButton,
  Row,
  Col,
  Container,
} from "react-bootstrap";
const QuestionListItem = ({
  questionDescription,
  value,
  setValue,
  yesLabel,
  id1,
  id2,
}) => {
  return (
    <ListGroup.Item className="questionListItem">
      <Container fluid>
        <Row>
          <Col xs={6} md={8}>
            <label className="questionLabel">{questionDescription}</label>
          </Col>
          <Col xs={6} md={4}>
            <ToggleButtonGroup
              type="radio"
              name={id1}
              value={value}
              defaultValue={value}
              className="questionButtonGroup"
              onChange={() => setValue(!value)}
            >
              <ToggleButton id={id1} value={false} className={ !value ? "toggleButtonActive": "toggleButtonInactive"}>
                No 0
              </ToggleButton>
              <ToggleButton id={id2} value={true} className={ value ? "toggleButtonActive": "toggleButtonInactive"}>
                Yes +{yesLabel}
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default QuestionListItem;
