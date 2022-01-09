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
        itemsHeader="Illness Description History"
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
