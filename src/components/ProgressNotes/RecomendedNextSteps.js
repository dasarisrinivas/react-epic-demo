import React from "react";
import { Card } from "react-bootstrap";
import Wellness from "../Wellness/Wellness";

const RecomendedNextSteps = ({
  itemsHeader,
  iconToDisplay,
  wellnessScore,
  setWellnessScore,
  isWellnessModalOpen,
  setIsWellnessModalOpen,
  wellnessOptions,
  calculatorType
}) => {
  return (
    <>
      <Card className="shadow rounded historyOfIllnessCard zoom">
        <Card.Header className="progressNotesCardHeader">
          {iconToDisplay}
          <strong>{itemsHeader}</strong>
        </Card.Header>
        <Card.Body>
            <Wellness wellnessScore={wellnessScore}
            setWellnessScore={setWellnessScore}
            isWellnessModalOpen={isWellnessModalOpen}
            setIsWellnessModalOpen={setIsWellnessModalOpen}
            wellnessOptions={wellnessOptions}
            calculatorType={calculatorType}/>
            <p className="mt-2"> Check BP in both arms</p>
            <p> Cardiac Risk Score </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecomendedNextSteps;
