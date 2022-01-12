import React from "react";
import CardDescription from "../shared/CardDescription";

const HistoryIllness = ({
  illnessDescription,
  abnormalPhysicalTests,
  gender,
  iconToDisplay,
}) => {
  return (
    <div className="illnessDescriptionContainer">
      <CardDescription
        itemsHeader="History of Presenting Illness"
        iconToDisplay={iconToDisplay}
        description={
          <>
            <p className="illnessDescriptionContent">{illnessDescription}</p>
          </>
        }
      />
    </div>
  );
};

export default HistoryIllness;
