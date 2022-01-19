import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import HistoryIllness from "./HistoryIllness";
import AccordionItemList from "../shared/AccordionItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faBookMedical,
  faQuestionCircle,
  faHistory,
  faCalendarCheck,
  faFastForward,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import RecomendedNextSteps from "./RecomendedNextSteps";
import { ListContainer, ListItem } from "../../styles/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragHandle } from "./DragHandle";
const ProgressNotes = () => {
  const fhirData = useSelector((state) => state.fhirData);
  const patientInfo = fhirData.patientInfo;
  const [isComplaintsExpanded, setIsComplaintsExpanded] = useState(true);
  const [isMedicationExpanded, setIsMedicationExpanded] = useState(true);
  const [isPastHealthIssuesExpanded, setIsPastHealthIssuesExpanded] =
    useState(true);
  const [isVitalsExpanded, setIsVitalsExpanded] = useState(true);
  const [isAssessmentPlanExpanded, setIsAssessmentPlanExpanded] =
    useState(true);
  const [selectedMenuItemId, setSelectedMenuItemId] = useState(6);

  const [navMenuList, setNavMenuList] = useState([
    {
      id: 0,
      title: "Complaints",
      icon: (
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className={"headerIcon"}
          size="lg"
        />
      ),
    },
    {
      id: 1,
      title: "Medication",
      icon: (
        <FontAwesomeIcon icon={faPills} className={"headerIcon"} size="lg" />
      ),
    },
    {
      id: 2,
      title: "Past Health Issues",
      icon: (
        <FontAwesomeIcon
          icon={faBookMedical}
          className={"headerIcon"}
          size="lg"
        />
      ),
    },
    {
      id: 3,
      title: "Vitals",
      icon: (
        <FontAwesomeIcon
          icon={faHeartbeat}
          className={"headerIcon"}
          size="lg"
        />
      ),
    },
    {
      id: 4,
      title: "Assesment/Plan",
      icon: (
        <FontAwesomeIcon
          icon={faCalendarCheck}
          className={"headerIcon"}
          size="lg"
        />
      ),
    },
    {
      id: 5,
      title: "History Of Presenting Illness",
      icon: (
        <FontAwesomeIcon icon={faHistory} className={"headerIcon"} size="lg" />
      ),
    },
    {
      id: 6,
      title: "Recommended Next Steps",
      icon: (
        <FontAwesomeIcon
          icon={faFastForward}
          className={"headerIcon"}
          size="lg"
        />
      ),
    },
  ]);

  const getListItemStyle = (draggableStyle, isDragging) => ({
    boxShadow: isDragging ? "0 0 .6rem #666" : "none",
    background: isDragging ? "rgb(100, 178, 192)" : "#217c9d",
    ...draggableStyle,
  });

  const buildSelectedMenuItemId = (id) => {
    if (id === 0) {
      setSelectedMenuItemId(id);
      setIsComplaintsExpanded(true);
    } else if (id === 1) {
      setSelectedMenuItemId(id);
      setIsMedicationExpanded(true);
    } else if (id === 2) {
      setSelectedMenuItemId(id);
      setIsPastHealthIssuesExpanded(true);
    } else if (id === 3) {
      setSelectedMenuItemId(id);
      setIsVitalsExpanded(true);
    } else if (id === 4) {
      setSelectedMenuItemId(4);
      setIsAssessmentPlanExpanded(true);
    } else if (id === 5) {
      setSelectedMenuItemId(selectedMenuItemId);
    } else {
      setSelectedMenuItemId(6);
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <div>
              <DragDropContext
                onDragEnd={(param) => {
                  const srcI = param.source.index;
                  const desI = param.destination?.index;
                  if (desI) {
                    navMenuList.splice(desI, 0, navMenuList.splice(srcI, 1)[0]);
                    setNavMenuList(navMenuList);
                  }
                }}
              >
                <ListContainer>
                  <Droppable droppableId="droppable-1">
                    {(provided, _) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {navMenuList.map((item, i) => (
                          <Draggable
                            key={item.id}
                            draggableId={"draggable-" + item.id}
                            index={i}
                          >
                            {(provided, snapshot) => (
                              <ListItem
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                style={getListItemStyle(
                                  provided.draggableProps.style,
                                  snapshot.isDragging,
                                  snapshot.draggingOver
                                )}
                                onClick={() => buildSelectedMenuItemId(item.id)}
                              >
                                <DragHandle
                                  {...provided.dragHandleProps}
                                  title={item.title}
                                >
                                  <span>{item.icon}</span>
                                  <strong>{item.title}</strong>
                                </DragHandle>
                              </ListItem>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </ListContainer>
              </DragDropContext>
            </div>

            <div className="customButton">
              <Button className="customButton zoom" size="md">
                Run Differentials
              </Button>
            </div>
          </Col>
          <Col xs={6} md={9}>
            <Row>
              <Col xs={12} md={6}>
                {selectedMenuItemId === 0 && (
                  <Accordion
                    defaultActiveKey={"0"}
                    className="shadow rounded progressNotesCard"
                    alwaysOpen={isComplaintsExpanded}
                    onClick={() =>
                      setIsComplaintsExpanded(!isComplaintsExpanded)
                    }
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
                )}

                {selectedMenuItemId === 1 && (
                  <Accordion
                    defaultActiveKey={"0"}
                    className="shadow rounded progressNotesCard"
                    alwaysOpen={isMedicationExpanded}
                    onClick={() =>
                      setIsMedicationExpanded(!isMedicationExpanded)
                    }
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
                )}

                {selectedMenuItemId === 2 && (
                  <Accordion
                    defaultActiveKey={"0"}
                    className="shadow rounded progressNotesCard"
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
                )}

                {selectedMenuItemId === 3 && (
                  <Accordion
                    defaultActiveKey={"0"}
                    className="shadow rounded progressNotesCard"
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
                )}

                {selectedMenuItemId === 4 && (
                  <Accordion
                    defaultActiveKey={"0"}
                    className="shadow rounded progressNotesCard"
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
                )}

                {selectedMenuItemId === 6 && (
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
                )}
              </Col>

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
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgressNotes;
