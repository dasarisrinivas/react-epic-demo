import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";

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
            size="sm"
            onClick={() => setIsWellnessModalOpen(true)}
          >
            {" "}
            Calculator
          </Button>
         <WellnessCalculator
            isWellnessModalOpen={isWellnessModalOpen}
            setIsWellnessModalOpen={setIsWellnessModalOpen}
            wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            calculatorType={calculatorType}
            wellnessOptions={wellnessOptions}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Wellness;
