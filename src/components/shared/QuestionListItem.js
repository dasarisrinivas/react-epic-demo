import React, { useState, useEffect } from "react";
import {
  ListGroup,
  ToggleButtonGroup,
  ToggleButton,
  Row,
  Col,
  Container
} from "react-bootstrap";

import {useDispatch} from "react-redux";

import {updateWellnessOptions} from "../../modules/fhir-data";
const QuestionListItem = ({
  questionDescription,
  value,
  setValue,
  yesLabel,
  id1,
  id2,
  questionKey
}) => {

  const dispatch = useDispatch();

  const [buttonNoClass, setButtonNoClass] = useState("");
  const [buttonYesClass, setButtonYesClass] = useState("");

  useEffect(() => {
    if (value === undefined) {
      setButtonYesClass("toggleButtonNotSelected");
      setButtonNoClass("toggleButtonNotSelected");
    } else if (value) {
      setButtonYesClass("toggleButtonActive");
      setButtonNoClass("toggleButtonInactive");
    } else {
      setButtonYesClass("toggleButtonInactive");
      setButtonNoClass("toggleButtonActive");
    }
  }, [value]);

  const updateValue = (newKey) => {
    dispatch(updateWellnessOptions(newKey, !value));
    setValue(!value);
  }

  return (
    <ListGroup.Item className="questionListItem">
      <Container fluid>
        <Row>
          <Col xs={6} md={9}>
            <div className="d-flex justify-content-between">
              <label className="questionLabel">{questionDescription}</label>
              { value === undefined && <div className="alert alert-danger"> Please choose <strong>YES/NO</strong></div>}
            </div>
          </Col>
          <Col xs={6} md={3}>
          
              <ToggleButtonGroup
                type="radio"
                name={id1}
                value={value}
                defaultValue={value}
                className="questionButtonGroup"
                onChange={() =>  updateValue(questionKey)}
              >
                <ToggleButton id={id1} value={false} className={buttonNoClass}>
                  No 0
                </ToggleButton>
                <ToggleButton id={id2} value={true} className={buttonYesClass}>
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
