import React,{useState} from "react";
import { Row, Col, Button, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faPills,
  faBookMedical,
  faQuestionCircle,
  faHistory,
  faStethoscope,
  faCalendarCheck,
  faFastForward
} from "@fortawesome/free-solid-svg-icons";
import Wellness from "../Wellness/Wellness";
import HistoryIllness from "./HistoryIllness";
import AccordionItemList from "../shared/AccordionItemList";
import RecomendedNextSteps from "./RecomendedNextSteps";
const ProgressNotes = () => {
  const fhirData = useSelector((state) => state.fhirData);
  const patientInfo = fhirData.patientInfo;
  const [wellnessScore, setWellnessScore] = useState(0);
  const [isWellnessModalOpen, setIsWellnessModalOpen] = useState(false);
  return (
    <>
      <Row>
        <Wellness />
      </Row>
      <Row className="progressNotesRow">
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen
          >
            <AccordionItemList
              itemsHeader={"Complaints"}
              eventKey={"0"}
              listItems={patientInfo.complaints}
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
            alwaysOpen
          >
            <AccordionItemList
              itemsHeader={"Medication"}
              eventKey={"0"}
              listItems={patientInfo.medication}
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
            alwaysOpen
          >
            <AccordionItemList
              itemsHeader={"Past Health Issues"}
              eventKey={"0"}
              listItems={patientInfo.pastHealthIssues}
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
            alwaysOpen
          >
            <AccordionItemList
              itemsHeader={"Physical Exam"}
              eventKey={"0"}
              listItems={patientInfo.physicalExam}
              iconToDisplay={
                <FontAwesomeIcon
                  icon={faStethoscope}
                  className="headerIcon"
                  size="lg"
                />
              }
            />
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}>
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
        <Col xs={12} md={4}>
         
          <RecomendedNextSteps
            itemsHeader={"Recomended Next Steps"}
            iconToDisplay={
              <FontAwesomeIcon
                icon={faFastForward}
                className={"headerIcon"}
                size="lg"
              />
            }
            wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            isWellnessModalOpen={isWellnessModalOpen}
            setIsWellnessModalOpen={setIsWellnessModalOpen}
            wellnessOptions={patientInfo.wellnessOptions}
            calculatorType={"Pulmonory Embolism"}
          />
        </Col>
        <Col xs={12} md={3}>
          <Accordion
            defaultActiveKey={"0"}
            className="shadow rounded progressNotesCard zoom"
            alwaysOpen
          >
            <AccordionItemList
              itemsHeader={"Assesment/Plan"}
              eventKey={"0"}
              listItems={patientInfo.assessmentPlan}
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
