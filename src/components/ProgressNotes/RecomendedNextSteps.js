import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PEWellScoreFlowChart from "../flowcharts/PEWellScoreFlowChart";
const RecomendedNextSteps = ({
  itemsHeader,
  iconToDisplay,
  wellnessScore,
  setWellnessScore,
  wellnessOptions,
  calculatorType,
  wellnessScoreClass,
  wellnessLevel
}) => {
  const [isWellnessChartModalOpen, setIsWellnessChartModalOpen] = useState(false);
  
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
            size="xl"
            onClick={() => setIsWellnessChartModalOpen(true)}
          >
            <span className={wellnessScoreClass}>
              Wells' Flow Chart - {wellnessLevel} Risk Level
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
          <Button variant="link" className="zoom" size="xl">
            Check BP in Both Arms
          </Button>{" "}
          <br />
          <Button variant="link" className="zoom" size="xl">
            Cardiac Risk Score
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecomendedNextSteps;
