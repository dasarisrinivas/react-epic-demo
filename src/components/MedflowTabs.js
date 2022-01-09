import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faMinus,
  faAllergies,
  faPumpMedical,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import ProgressNotes from "./ProgressNotes/ProgressNotes";
const MedflowTabs = () => {
  const [key, setKey] = useState("progressNotes");
  return (
    <div className="mt-2">
      <Tabs
        id="controlled-tab-example "
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="vitals"
          title={
            <div>
              <FontAwesomeIcon icon={faPumpMedical} className="icon" />
              Vitals
            </div>
          }
        >
          <h3>All the Vitals Information is shown in this tab</h3>
        </Tab>
        <Tab
          eventKey="allergies"
          title={
            <div>
              <FontAwesomeIcon icon={faAllergies} className="icon" />
              Allergies
            </div>
          }
        >
          <h3>All the Allergies information is listed in this tab</h3>
        </Tab>
        <Tab
          eventKey="progressNotes"
          title={
            <div>
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
              Progress Notes
            </div>
          }
        >
          <ProgressNotes />
        </Tab>
        <Tab
          eventKey="differentials"
          title={
            <div>
              <FontAwesomeIcon icon={faMinus} className="icon" />
              Differentials
            </div>
          }
        >
          <h3>All the Differential Information is shown in this tab</h3>
        </Tab>
        <Tab
          eventKey="medications"
          title={
            <div>
              <FontAwesomeIcon icon={faPills} className="icon" />
              Medications
            </div>
          }
          disabled
        >
          <h3>All the Medication Information is Displayed in this tab</h3>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MedflowTabs;
