import React, { useState, useEffect } from "react";
import MedflowModal from "../shared/MedflowModal";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import QuestionListItem from "../shared/QuestionListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
const WellnessCalculator = ({
  open,
  setOpen,
  wellnessScore,
  setWellnessScore,
  wellnessCalculatorType,
  wellnessOptions,
  wellnessScoreClass,
}) => {
  const [signsOfDVT, setSignsOfDVT] = useState(wellnessOptions.signsOfDVT);
  const [isPEDiagnosis, setIsPEDiagnosis] = useState(
    wellnessOptions.isPEDiagnosis
  );
  const [isHeartRateAbove100, setIsHeartRateAbove100] = useState(
    wellnessOptions.isHeartRateAbove100
  );
  const [isSurgeryin4Weeks, setIsSurgeryin4Weeks] = useState(
    wellnessOptions.isSurgeryin4Weeks
  );
  const [isPEOrDVTDiagnosed, setIsPEOrDVTDiagnosed] = useState(
    wellnessOptions.isPEOrDVTDiagnosed
  );
  const [hemotypsis, setHemotypsis] = useState(wellnessOptions.hemotypsis);
  const [maligancyOrpalliative, setMaligancyOrpalliative] = useState(
    wellnessOptions.maligancyOrpalliative
  );

  useEffect(() => {
    let score = 0;
    if (signsOfDVT) {
      score += 3;
    }
    if (isPEDiagnosis) {
      score += 3;
    }
    if (isHeartRateAbove100) {
      score += 1.5;
    }
    if (isSurgeryin4Weeks) {
      score += 1.5;
    }
    if (isPEOrDVTDiagnosed) {
      score += 1.5;
    }
    if (hemotypsis) {
      score += 1;
    }
    if (maligancyOrpalliative) {
      score += 1;
    }
    setWellnessScore(score);
  }, [
    signsOfDVT,
    isPEDiagnosis,
    isHeartRateAbove100,
    isSurgeryin4Weeks,
    isPEOrDVTDiagnosed,
    hemotypsis,
    maligancyOrpalliative,
    setWellnessScore,
  ]);

  return (
    <div className="wellnessModal">
      {wellnessCalculatorType === "Pulmonory Embolism" && (
        <MedflowModal
          open={open}
          setOpen={setOpen}
          title={
            <div>
              Wells' Criteria for Pulmonary Embolism
              <FontAwesomeIcon
                icon={faCalculator}
                className="headerIcon mx-2"
                size="md"
              />{" "}
            </div>
          }
          size={"lg"}
        >
          <Card>
            <ListGroup variant="flush">
              <QuestionListItem
                questionDescription={"Clinical signs and symptoms of DVT"}
                value={signsOfDVT}
                setValue={setSignsOfDVT}
                yesLabel={"3"}
                id1={"signsOfDVT1"}
                id2={"signsOfDVT2"}
              />
              <QuestionListItem
                questionDescription={"PE is #1 diagnosis OR equally likely"}
                value={isPEDiagnosis}
                setValue={setIsPEDiagnosis}
                yesLabel={"3"}
                id1={"isPEDiagnosis1"}
                id2={"isPEDiagnosis2"}
              />
              <QuestionListItem
                questionDescription={"Heart rate > 100"}
                value={isHeartRateAbove100}
                setValue={setIsHeartRateAbove100}
                yesLabel={"1.5"}
                id1={"isHeartRateAbove1001"}
                id2={"isHeartRateAbove1002"}
              />
              <QuestionListItem
                questionDescription={
                  "Immobilization at least 3 days OR surgery in the previous 4 weeks"
                }
                value={isSurgeryin4Weeks}
                setValue={setIsSurgeryin4Weeks}
                yesLabel={"1.5"}
                id1={"isSurgeryin4Weeks1"}
                id2={"isSurgeryin4Weeks2"}
              />
              <QuestionListItem
                questionDescription={
                  "Previous, objectively diagnosed PE or DVT"
                }
                value={isPEOrDVTDiagnosed}
                setValue={setIsPEOrDVTDiagnosed}
                yesLabel={"1.5"}
                id1={"isPEOrDVTDiagnosed1"}
                id2={"isPEOrDVTDiagnosed2"}
              />
              <QuestionListItem
                questionDescription={"Hemoptysis"}
                value={hemotypsis}
                setValue={setHemotypsis}
                yesLabel={"1"}
                id1={"hemotypsis1"}
                id2={"hemotypsis2"}
              />
              <QuestionListItem
                questionDescription={
                  "Malignancy w/ treatment within 6 months or palliative"
                }
                value={maligancyOrpalliative}
                setValue={setMaligancyOrpalliative}
                yesLabel={"1"}
                id1={"maligancyOrpalliative1"}
                id2={"maligancyOrpalliative2"}
              />
            </ListGroup>
          </Card>
          <Card className="scoreCard mt-2">
            <Container>
              <Row>
                <Col xs={12} md={2}>
                  <p className="my-2">
                    <label className={`score ${wellnessScoreClass}`}>
                      {wellnessScore}
                    </label>{" "}
                    points
                  </p>
                </Col>
                <Col xs={12} md={10}>
                  {wellnessScore < 2 && (
                    <>
                      <p className="mx-3">
                        <strong className={wellnessScoreClass}>Low</strong> risk group: 1.3%
                        chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores ≤ 4 as “PE Unlikely” and
                        had a 3% incidence of PE.
                      </p>
                    </>
                  )}

                  {wellnessScore >= 2 && wellnessScore <= 4 && (
                    <>
                      <p className="mx-3">
                        <strong className={wellnessScoreClass}>Moderate</strong> risk group:
                        16.2% chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores ≤ 4 as “PE Unlikely” and
                        had a 3% incidence of PE.
                      </p>
                    </>
                  )}

                  {wellnessScore === 4.5 && (
                    <>
                      <p className="mx-3">
                        <strong className={wellnessScoreClass}>Moderate</strong> risk group:
                        16.2% chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores ≤ 4 as “PE Unlikely” and
                        had a 3% incidence of PE.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores > 4 as “PE Likely” and had
                        a 28% incidence of PE.
                      </p>
                    </>
                  )}
                  {wellnessScore > 4.5 && wellnessScore < 6 && (
                    <>
                      <p className="mx-3">
                        <strong className={wellnessScoreClass}>Moderate</strong> risk group:
                        16.2% chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores > 4 as “PE Likely” and had
                        a 28% incidence of PE.
                      </p>
                    </>
                  )}

                  {wellnessScore >= 6 && (
                    <>
                      <p className="mx-3">
                        <strong className={wellnessScoreClass}>High </strong> risk group:
                        40.6% chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores > 4 as “PE Likely” and had
                        a 28% incidence of PE.
                      </p>
                    </>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </MedflowModal>
      )}
    </div>
  );
};

export default WellnessCalculator;
