import React, { useState, useEffect } from "react";
import MedflowModal from "../shared/MedflowModal";
import {
  Card,
  ListGroup,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import QuestionListItem from "../shared/QuestionListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faPlusCircle, faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
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
  const [isWhenToUseExpanded, setIsWhenToUseExpanded] = useState(false);
  const [isPitfallsExpanded, setIsPitfallsExpanded] = useState(false);
  const [isWhyUseExpanded, setIsWhyUseExpanded] = useState(false);

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

  const toggleExpand = (
    isWhenToUseExpand,
    isPittfallExpand,
    isWhyUseExpand
  ) => {
    setIsWhenToUseExpanded(isWhenToUseExpand);
    setIsPitfallsExpanded(isPittfallExpand);
    setIsWhyUseExpanded(isWhyUseExpand);
  };

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
                size="1x"
              />{" "}
            </div>
          }
          size={"xl"}
        >
          <Row className="my-2">
            <ButtonGroup className="expanded">
              <Button
              className = {isWhenToUseExpanded?"customWellnessButton":"customWellnessButtonHover"}
                variant="outline-dark"
                size="1x"
                onClick={() => toggleExpand(!isWhenToUseExpanded, false, false)}
              >
                <span>When to Use</span>
                <FontAwesomeIcon
                  icon={isWhenToUseExpanded ? faMinusCircle : faPlusCircle}
                  className="headerIcon mx-2"
                  size="1x"
                />
              </Button>
              <Button
                className = {isPitfallsExpanded?"customWellnessButton":"customWellnessButtonHover"}
                variant="outline-dark"
                size="md"
                onClick={() => toggleExpand(false, !isPitfallsExpanded, false)}
              >
                <span>Pearls/Pitfalls</span>
                <FontAwesomeIcon
                  icon={isPitfallsExpanded ? faMinusCircle : faPlusCircle}
                  className="headerIcon mx-2"
                  size="1x"
                />
              </Button>
              <Button
              className = {isWhyUseExpanded?"customWellnessButton":"customWellnessButtonHover"}
                variant="outline-dark"
                size="md"
                onClick={() => toggleExpand(false, false, !isWhyUseExpanded)}
              >
                <span>Why Use</span>
                <FontAwesomeIcon
                  icon={isWhyUseExpanded ? faMinusCircle : faPlusCircle}
                  className="headerIcon mx-2"
                  size="1x"
                />
              </Button>
            </ButtonGroup>
          </Row>
          <Card className="my-3">
            {isWhenToUseExpanded && (
              <p className="m-3">
                The Wells’ Criteria risk stratifies patients for pulmonary
                embolism (PE) and provides an estimated pre-test probability.
                The physician can then chose what further testing is required
                for diagnosing pulmonary embolism (I.E. d-dimer or CT
                angiogram).
              </p>
            )}

            {isPitfallsExpanded && (
              <>
                <p className="m-3">
                  The Wells’ Criteria risk stratifies patients for pulmonary
                  embolism (PE), and has been validated in both inpatient and
                  emergency department settings. Its score is often used in
                  conjunctiion with d-dimer testing to evaluate for PE.
                </p>
                <ul>
                  <li>
                    There must first be a clinical suspicion for PE in the
                    patient (this should not be applied to all patients with
                    chest pain or shortness of breath, for example).
                  </li>
                  <li>
                    Wells' can be used with either 3 tiers (low, moderate, high)
                    or 2 tiers (unlikely, likely). We recommend the two tier
                    model as this is supported by ACEP’s 2011 clinical policy on
                    PE. (See Next Steps)
                    <ul>
                      <li>
                        Wells’ is often criticized for having a “subjective”
                        criterion in it (“PE #1 diagnosis or equally likely”)
                      </li>
                    </ul>
                  </li>
                  <li>
                    Wells’ is not meant to diagnose PE but to guide workup by
                    predicting pre-test probability of PE and appropriate
                    testing to rule out the diagnosis.
                  </li>
                </ul>
              </>
            )}

            {isWhyUseExpanded && (
              <ul className="m-3">
                <li>
                  The Wells’ Score has been validated multiple times in multiple
                  clinical settings.
                  <ul>
                    <li>
                      Physicians have a low threshold to test for pulmonary
                      embolism.
                    </li>
                    <li>
                      The score is simple to use and provides clear cutoffs for
                      the predicted probability of pulmonary embolism.
                    </li>
                    <li>
                      The score aids in potentially reducing the number of CTAs
                      performed on low-risk PE patients.
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </Card>
          <Card>
            <ListGroup variant="flush">
              <QuestionListItem
                questionDescription={"Clinical signs and symptoms of DVT"}
                value={signsOfDVT}
                setValue={setSignsOfDVT}
                yesLabel={"3"}
                id1={"signsOfDVT1"}
                id2={"signsOfDVT2"}
                questionKey={"signsOfDVT"}
              />
              <QuestionListItem
                questionDescription={"PE is #1 diagnosis OR equally likely"}
                value={isPEDiagnosis}
                setValue={setIsPEDiagnosis}
                yesLabel={"3"}
                id1={"isPEDiagnosis1"}
                id2={"isPEDiagnosis2"}
                questionKey={"isPEDiagnosis"}
              />
              <QuestionListItem
                questionDescription={"Heart rate > 100"}
                value={isHeartRateAbove100}
                setValue={setIsHeartRateAbove100}
                yesLabel={"1.5"}
                id1={"isHeartRateAbove1001"}
                id2={"isHeartRateAbove1002"}
                questionKey={"isHeartRateAbove100"}
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
                questionKey={"isSurgeryin4Weeks"}
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
                questionKey={"isPEOrDVTDiagnosed"}
              />
              <QuestionListItem
                questionDescription={"Hemoptysis"}
                value={hemotypsis}
                setValue={setHemotypsis}
                yesLabel={"1"}
                id1={"hemotypsis1"}
                id2={"hemotypsis2"}
                questionKey={"hemotypsis"}
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
                questionKey={"maligancyOrpalliative"}
              />
            </ListGroup>
          </Card>
          <Card className="scoreCard mt-4">
            <Container className="my-2">
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
                        <strong className={wellnessScoreClass}>Low</strong> risk
                        group: 1.3% chance of PE in an ED population.
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
                        <strong className={wellnessScoreClass}>Moderate</strong>{" "}
                        risk group: 16.2% chance of PE in an ED population.
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
                        <strong className={wellnessScoreClass}>Moderate</strong>{" "}
                        risk group: 16.2% chance of PE in an ED population.
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
                        <strong className={wellnessScoreClass}>Moderate</strong>{" "}
                        risk group: 16.2% chance of PE in an ED population.
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
                        <strong className={wellnessScoreClass}>High </strong>{" "}
                        risk group: 40.6% chance of PE in an ED population.
                      </p>
                      <p className="mx-3">
                        Another study assigned scores > 4 as “PE Likely” and had
                        a 28% incidence of PE.
                      </p>
                    </>
                  )}
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <div className="my-2">
                    <Button
                      className="customButton"
                      size="md"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </Button>
                  </div>
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
