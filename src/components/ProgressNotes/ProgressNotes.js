import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import CardListGroup from "../shared/CardListGroup";
import HistoryIllness from "./HistoryIllness";
import {
  faPills,
  faBookMedical,
  faQuestionCircle,
  faHistory,
  faStethoscope,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
const ProgressNotes = () => {
  const fhirData = useSelector((state) => state.fhirData);
  const patientInfo = fhirData.patientInfo;
  return (
    <>
      <Row className="progressNotesRow">
        <Col xs={12} md={3}>
          <CardListGroup
            itemsHeader={"Complaints"}
            itemList={patientInfo.complaints}
            iconToDisplay={<FontAwesomeIcon icon={faQuestionCircle} className="headerIcon" size="lg" />}
          />
        </Col>
        <Col xs={12} md={9}>
          <HistoryIllness
            illnessDescription={patientInfo.illnessDescription}
            abnormalPhysicalTests={patientInfo.abnormalPhysicalTests}
            gender={patientInfo.gender}
            iconToDisplay={<FontAwesomeIcon icon={faHistory} className="headerIcon" size="lg" />}
          />
        </Col>
      </Row>
      <Row className="progressNotesRow">
        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Medication"}
            itemList={patientInfo.medication}
            iconToDisplay={<FontAwesomeIcon icon={faPills} className="headerIcon" size="lg" />}
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Past Health Issues"}
            itemList={patientInfo.pastHealthIssues}
            iconToDisplay={<FontAwesomeIcon icon={faBookMedical} className="headerIcon" size="lg" />}
          />
        </Col>

        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Physical Exam"}
            itemList={patientInfo.physicalExam}
            iconToDisplay={<FontAwesomeIcon icon={faStethoscope} className="headerIcon" size="lg" />}
          />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <CardListGroup
            itemsHeader={"Assesment/Plan"}
            itemList={patientInfo.assessmentPlan}
            iconToDisplay={<FontAwesomeIcon icon={faCalendarCheck} className="headerIcon" size="lg" />}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button className=" customButton zoom mt-4" size="md">
            Run Differentials
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProgressNotes;
