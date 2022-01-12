import React from "react";
import { useSelector } from "react-redux";
import MedflowNavbar from "./MedflowNavbar";
import Medflows from "./Medflows";
import MedflowTabs from "./MedflowTabs";
import MedflowFooter from "./MedflowFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const MedflowHome = () => {
  const fhirData = useSelector((state) => state.fhirData);
  return (
    <div>
      <MedflowNavbar />
      {fhirData.byResource["patient"].status === "loading" && <div className="d-flex justify-content-center m-auto"><FontAwesomeIcon icon={faSpinner} transform={"grow-50"} spin className="loadingSpinner" /></div>}
      {fhirData.byResource["patient"].status === "loaded" && (
        <div>
          <Medflows />
          <MedflowTabs />
          <MedflowFooter/>
        </div>
      )}
      
    </div>
  );
};

export default MedflowHome;
