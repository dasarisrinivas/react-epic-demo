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
      </Tabs>
    </div>
  );
};

export default MedflowTabs;
