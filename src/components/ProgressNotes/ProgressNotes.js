import React, { useState } from "react";
import { Row, Col, Button, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faPills,
  faBookMedical,
  faQuestionCircle,
  faHistory,
  faCalendarCheck,
  faFastForward,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import HistoryIllness from "./HistoryIllness";
import AccordionItemList from "../shared/AccordionItemList";
import RecomendedNextSteps from "./RecomendedNextSteps";
const ProgressNotes = () => {
  const [isComplaintsExpanded, setIsComplaintsExpanded] = useState(true);
  const [isMedicationExpanded, setIsMedicationExpanded] = useState(true);
  const [isPastHealthIssuesExpanded, setIsPastHealthIssuesExpanded] =
    useState(true);
  const [isVitalsExpanded, setIsVitalsExpanded] = useState(true);
  const [isAssessmentPlanExpanded, setIsAssessmentPlanExpanded] =
    useState(true);

  const fhirData = useSelector((state) => state.fhirData);
  const patientInfo = fhirData.patientInfo;
  return (
    <>
      <Row className="progressNotesRow">
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen={isComplaintsExpanded}
            onClick={() => setIsComplaintsExpanded(!isComplaintsExpanded)}
          >
            <AccordionItemList
              itemsHeader={"Complaints"}
              eventKey={"0"}
              listItems={patientInfo.complaints}
              isExpanded={isComplaintsExpanded}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen={isMedicationExpanded}
            onClick={() => setIsMedicationExpanded(!isMedicationExpanded)}
          >
            <AccordionItemList
              itemsHeader={"Medication"}
              eventKey={"0"}
              listItems={patientInfo.medication}
              isExpanded={isMedicationExpanded}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faPills}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen={isPastHealthIssuesExpanded}
            onClick={() =>
              setIsPastHealthIssuesExpanded(!isPastHealthIssuesExpanded)
            }
          >
            <AccordionItemList
              itemsHeader={"Past Health Issues"}
              eventKey={"0"}
              listItems={patientInfo.pastHealthIssues}
              isExpanded={isPastHealthIssuesExpanded}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faBookMedical}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen={isVitalsExpanded}
            onClick={() => setIsVitalsExpanded(!isVitalsExpanded)}
          >
            <AccordionItemList
              itemsHeader={"Vitals"}
              eventKey={"0"}
              listItems={patientInfo.physicalExam}
              isExpanded={isVitalsExpanded}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <HistoryIllness
            illnessDescription={patientInfo.illnessDescription}
            abnormalPhysicalTests={patientInfo.abnormalPhysicalTests}
            gender={patientInfo.gender}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faHistory}
                className="headerIcon"
                size="lg"
              />
            }
          />
        </Col>
        <Col xs={12} md={3}>
          <RecomendedNextSteps
            itemsHeader={"Recomended Next Steps"}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faFastForward}
                className={"headerIcon"}
                size="lg"
              />
            }
            wellnessOptions={patientInfo.wellnessOptions}
            calculatorType={"Pulmonory Embolism"}
          />
        </Col>
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen={isAssessmentPlanExpanded}
            onClick={() =>
              setIsAssessmentPlanExpanded(!isAssessmentPlanExpanded)
            }
          >
            <AccordionItemList
              itemsHeader={"Assesment/Plan"}
              eventKey={"0"}
              listItems={patientInfo.assessmentPlan}
              isExpanded={isAssessmentPlanExpanded}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button className="customButton zoom" size="md">
            Run Differentials
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProgressNotes;
