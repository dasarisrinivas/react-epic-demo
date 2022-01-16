import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PEWellScoreFlowChart from "../flowcharts/PEWellScoreFlowChart";
const RecomendedNextSteps = ({
  itemsHeader,
  iconToDisplay,
  wellnessOptions,
  calculatorType,
}) => {
  const [wellnessScore, setWellnessScore] = useState();
  const [wellnessScoreClass, setWellnessScoreClass] =
    useState("lowRiskWellness");
  const [wellnessLevel, setWellnessLevel] = useState("");
  const [isWellnessChartModalOpen, setIsWellnessChartModalOpen] =
    useState(false);

  useEffect(() => {
    if (wellnessScore < 2) {
      setWellnessScoreClass("lowRiskWellness");
      setWellnessLevel("Low");
    } else if (wellnessScore >= 2 && wellnessScore < 6) {
      setWellnessScoreClass("moderateRiskWellness");
      setWellnessLevel("Moderate");
    } else {
      setWellnessScoreClass("highRiskWellness");
      setWellnessLevel("High");
    }
  }, [wellnessScore, wellnessLevel]);

  return (
    <>
      <Card className="shadow rounded historyOfIllnessCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body>
          <Button
            variant="link"
            className="zoom"
            size="md"
            onClick={() => setIsWellnessChartModalOpen(true)}
          >
          Wellness Flow chart - <span className={wellnessScoreClass}>{wellnessLevel}{" "}</span> Risk Level
          </Button>
          <PEWellScoreFlowChart
            open={isWellnessChartModalOpen}
            setOpen={setIsWellnessChartModalOpen}
            wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            wellnessCalculatorType={"Pulmonory Embolism"}
            wellnessOptions={wellnessOptions}
            wellnessScoreClass={wellnessScoreClass}
            wellnessLevel={wellnessLevel}
            zoomLevel={1.5}
          />
          <Button
            variant="link"
            className="zoom"
            size="md"
          >
          Check BP in both arms
          </Button>

          <Button
            variant="link"
            className="zoom"
            size="md"
          >
          Cardiac Risk Score
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecomendedNextSteps;
