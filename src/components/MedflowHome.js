import React from "react";
import { useSelector } from "react-redux";
import MedflowNavbar from "./MedflowNavbar";
import Medflows from "./Medflows";
import MedflowTabs from "./MedflowTabs";
import MedflowFooter from "./MedflowFooter";
import Loader from "./Loader";
const MedflowHome = () => {
  const fhirData = useSelector((state) => state.fhirData);
  return (
    <div>
      <MedflowNavbar />
      {fhirData.byResource["patient"].status === "loading" && <Loader />}
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
