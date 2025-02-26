import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const ProfileInfo = () => {
  const fhirData = useSelector((state) => state.fhirData);
  const patientInfo = fhirData.patientInfo;
  const addressLine2 = patientInfo.addressLine2;
  const [expandState, setExpandedState] = useState(false);
  const toggleState = () => {
    setExpandedState(!expandState);
  };

  const getDisplayStateName = (expanded) => {
    return expandState === true ? "expanded" : "collapsed";
  };

  return (
    <>
        <Container className="profile py-2">
          <Row
            className={getDisplayStateName()}
            id="userInfoPanelHeader"
            role="button"
            tabIndex="0"
            onClick={() => toggleState()}
          >
            <Col xs={12} lg={4}>
              <strong>Patient Name:</strong>
              <span className="data">{patientInfo.fullName}</span>
            </Col>
            <Col xs={12} lg={2}>
              <strong>Age :</strong>
              <span className="data">{patientInfo.age}</span>
            </Col>
            <Col xs={12} lg={3}>
              <strong>DOB :</strong>
              <span className="data">{patientInfo.dob}</span>
            </Col>

            <Col xs={12} lg={2}>
              <strong>Gender :</strong>
              <span className="data">{patientInfo.gender}</span>
            </Col>

            <Col xs={12} lg={1} className="text-end">
              {expandState ? (
                <FontAwesomeIcon icon={faChevronUp} className="chevronIcon" id="chevron" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="chevronIcon" id="chevron" />
              )}
            </Col>
          </Row>
          {expandState && (
            <Row className="mt-3">
              <Col xs={12} lg={4}>
                <div className="card bg-light borderRight">
                  <div className="card-body text-lg-left px-0">
                    <Row>
                      <Col>
                        <section className="blocked-content">
                          <strong>Marital Status :</strong><span className="data">{patientInfo.maritalStatus}</span><br />
   
                           <strong>Phone Number : </strong><span className="data">{patientInfo.phoneNumber}</span>
                        </section>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="card bg-light borderRight">
                  <div className="card-body text-lg-left px-0">
                    <Row>
                      <Col className="d-flex">
                        <div> <strong> Address:</strong></div>
                        <address className="blocked-content data">
                          {patientInfo.addressLine1}<br/>
                          {addressLine2 && (<><span>{addressLine2}</span><br/></>)}
                          {patientInfo.city}, {patientInfo.state}-{patientInfo.postalCode}<br/>
                          {patientInfo.country}
                        </address>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="card bg-light">
                  <div className="card-body text-lg-left px-0">
                    
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
    </>
  );
};

export default ProfileInfo;
