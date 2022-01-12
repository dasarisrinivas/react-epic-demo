import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import WellnessCalculator from "./WellnessCalculator";

const Wellness = ({
  wellnessScore,
  setWellnessScore,
  isWellnessModalOpen,
  setIsWellnessModalOpen,
  wellnessOptions,
  calculatorType,
}) => {
  const [wellnessScoreClass, setWellnessScoreClass] =
    useState("lowRiskWellness");

  useEffect(() => {
    if (wellnessScore < 2) {
      setWellnessScoreClass("lowRiskWellness");
    } else if (wellnessScore >= 2 && wellnessScore < 6) {
      setWellnessScoreClass("moderateRiskWellness");
    } else {
      setWellnessScoreClass("highRiskWellness");
    }
  }, [wellnessScore]);
  return (
    <Row>
      <Col>
        <div>
          Wellness score:
          <label className={`score ${wellnessScoreClass}`}>
            {wellnessScore}
          </label>
          <Button
            variant="link"
            className="zoom mx-5 my-1"
            size="md"
            onClick={() => setIsWellnessModalOpen(true)}
          >
            {" "}
            Calculator
          </Button>
          <WellnessCalculator
            open={isWellnessModalOpen}
            setOpen={setIsWellnessModalOpen}
            wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            wellnessCalculatorType={calculatorType}
            wellnessOptions={wellnessOptions}
            wellnessScoreClass={wellnessScoreClass}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Wellness;
