import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PEWellScoreFlowChart from "../flowcharts/PEWellScoreFlowChart";
import { getPEWellsScore } from "../../builders/PEWellsCalculator"
const RecomendedNextSteps = ({
  itemsHeader,
  iconToDisplay,
  wellnessOptions,
  calculatorType
}) => {
  const [isWellnessChartModalOpen, setIsWellnessChartModalOpen] =
    useState(false);
  const [wellnessScore, setWellnessScore] = useState(getPEWellsScore(wellnessOptions.signsOfDVT,wellnessOptions.isPEDiagnosis, wellnessOptions.isHeartRateAbove100, wellnessOptions.isSurgeryin4Weeks, wellnessOptions.isPEOrDVTDiagnosed, wellnessOptions.hemotypsis, wellnessOptions.maligancyOrpalliative));
  const [wellnessScoreClass, setWellnessScoreClass] =
    useState("lowRiskWellness");
  const [wellnessLevel, setWellnessLevel] = useState("");

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
  
  return (
    <>
      <Card
        className="shadow rounded historyOfIllnessCard"
      >
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body className="cardDescriptionBody">
          <Button
            variant="link"
            className="zoom"
            size="md"
            onClick={() => setIsWellnessChartModalOpen(true)}
          >
            <span className={wellnessScoreClass}>
              {" "}
              Wells' Flow chart - {wellnessLevel} Risk Level{" "}
            </span>
          </Button>
          <PEWellScoreFlowChart
            open={isWellnessChartModalOpen}
            setOpen={setIsWellnessChartModalOpen}
            wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            wellnessCalculatorType={calculatorType}
            wellnessOptions={wellnessOptions}
            wellnessScoreClass={wellnessScoreClass}
            wellnessLevel={wellnessLevel}
            zoomLevel={1.2}
          />
          <Button variant="link" className="zoom" size="md">
            Check BP in both arms
          </Button>{" "}
          <br />
          <Button variant="link" className="zoom" size="md">
            Cardiac Risk Score
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecomendedNextSteps;
