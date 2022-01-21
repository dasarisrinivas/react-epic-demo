import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import HistoryIllness from "./HistoryIllness";
import AccordionItemList from "../shared/AccordionItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPEWellsScore } from "../../builders/PEWellsCalculator"
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
  const wellnessOptions = fhirData.wellnessOptions;
  const [isComplaintsExpanded, setIsComplaintsExpanded] = useState(true);
  const [isMedicationExpanded, setIsMedicationExpanded] = useState(true);
  const [isPastHealthIssuesExpanded, setIsPastHealthIssuesExpanded] =
    useState(true);
  const [isVitalsExpanded, setIsVitalsExpanded] = useState(true);
  const [isAssessmentPlanExpanded, setIsAssessmentPlanExpanded] =
    useState(true);
  const [selectedMenuItemId, setSelectedMenuItemId] = useState(1);
  const [wellnessScoreClass, setWellnessScoreClass] =
    useState("lowRiskWellness");
  const [wellnessLevel, setWellnessLevel] = useState("");
  const [wellnessScore, setWellnessScore] = useState(getPEWellsScore(wellnessOptions.signsOfDVT,wellnessOptions.isPEDiagnosis, wellnessOptions.isHeartRateAbove100, wellnessOptions.isSurgeryin4Weeks, wellnessOptions.isPEOrDVTDiagnosed, wellnessOptions.hemotypsis, wellnessOptions.maligancyOrpalliative));
  const [navMenuList, setNavMenuList] = useState([
    {
      id: 1,
      title: "Assesment/Plan",
    },
    {
      id: 2,
      title: "Complaints",
    },
    {
      id: 3,
      title: "History Of Presenting Illness",
    },
    {
      id: 4,
      title: "Medication",
    },
    {
      id: 5,
      title: "Past Health Issues",
    },
    {
      id: 6,
      title: "Vitals",
    },
  ]);

  useEffect(() => {
      const data = localStorage.getItem("draggableNavMenuList");
      if(data){
        setNavMenuList(JSON.parse(data));
      }
  }, [])


  useEffect(() => {
    if (wellnessScore < 2) {
      setWellnessScoreClass("lowRiskWellness");
      setWellnessLevel("Low");
    } else if (wellnessScore >= 2 && wellnessScore < 6) {
      setWellnessScoreClass("moderateRiskWellness");
      setWellnessLevel("Moderate");
    } else if (wellnessScore >= 6) {
      setWellnessScoreClass("highRiskWellness");
      setWellnessLevel("High");
    }
  }, [wellnessScore]);

  const getListItemStyle = (draggableStyle, isDragging) => ({
    boxShadow: isDragging ? "0 0 .6rem #666" : "none",
    background: isDragging ? "rgb(100, 178, 192)" : "#217c9d",
    ...draggableStyle,
  });

  const buildSelectedMenuItemId = (id) => {
    setSelectedMenuItemId(id);
    if (id === 1) {
      setIsAssessmentPlanExpanded(true);
    } else if (id === 2) {
      setIsComplaintsExpanded(true);
    } else if (id === 4) {
      setIsMedicationExpanded(true);
    } else if (id === 5) {
      setIsPastHealthIssuesExpanded(true);
    } else if (id === 6) {
      setIsVitalsExpanded(true);
    }
  };

  const getIcon = (id) => {
    if (id === 1) {
      return faCalendarCheck;
    } else if (id === 2) {
      return faQuestionCircle;
    } else if (id === 3) {
      return faHistory;
    } else if (id === 4) {
      return faPills;
    } else if (id === 5) {
      return faBookMedical;
    } else if (id === 6) {
      return faHeartbeat;
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
                    localStorage.setItem("draggableNavMenuList", JSON.stringify(navMenuList));
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
                                  <span>
                                    <FontAwesomeIcon
                                      icon={getIcon(item.id)}
                                      className={"headerIcon"}
                                      size="lg"
                                    />
                                  </span>
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
                {selectedMenuItemId === 1 && (
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

                {selectedMenuItemId === 2 && (
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

                {selectedMenuItemId === 3 && (
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
                )}
                {selectedMenuItemId === 4 && (
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

                {selectedMenuItemId === 5 && (
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

                {selectedMenuItemId === 6 && (
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
              </Col>

              <Col xs={12} md={6}>
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
                  wellnessOptions={wellnessOptions}
                  calculatorType={"Pulmonory Embolism"}
                  wellnessScoreClass={wellnessScoreClass}
                  wellnessLevel={wellnessLevel}
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
