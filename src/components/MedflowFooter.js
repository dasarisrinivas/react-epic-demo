import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const MedflowFooter = () => {
  return (
     <div className="absolute-bottom text-center">  
     <Navbar color="dark">
         <Container>
             <small className="mx-auto" ><FontAwesomeIcon icon={faCopyright} size="sm" />
          2018-2022 Medflow Solutions Inc., All rights reserved</small>
         </Container>
     </Navbar>
 </div>
  );
};

export default MedflowFooter;
