import React, { useState, useEffect } from "react";
import FlowDiagram from "../shared/FlowDiagram";
import MedflowModal from "../shared/MedflowModal";
import { buildPERecomendationFlowDiagram } from "../FlowElements/PEWellScoreElements";
import { Container, Row, Col, Button } from "react-bootstrap";
import WellnessCalculator from "../Wellness/WellnessCalculator";
const PEWellScoreFlowChart = ({
  open,
  setOpen,
  wellnessScore,
  setWellnessScore,
  wellnessCalculatorType,
  wellnessOptions,
  wellnessScoreClass,
  wellnessLevel,
  zoomLevel,
}) => {
  const [disableSaveButton, setDisableSaveButton] = useState(true);
  const [isWellnessCalculatorModalOpen, setIsWellnessCalculatorModalOpen] =
    useState(false);
  const [elementNodes, setElementNodes] = useState([]);

 useEffect(() => {
    const {
      lowRisklementNodes,
      moderateRiskElementNodes,
      highRiskElementNodes,
    } = buildPERecomendationFlowDiagram(setDisableSaveButton);
    if (wellnessScore < 2) {
      setElementNodes(lowRisklementNodes);
    } else if (wellnessScore >= 2 && wellnessScore < 6) {
      setElementNodes(moderateRiskElementNodes);
    } else if (wellnessScore >= 6) {
      setElementNodes(highRiskElementNodes);
    }
  }, [wellnessScore, setDisableSaveButton]);

  return (
    <div className="wellnessModal">
      {wellnessCalculatorType === "Pulmonory Embolism" && (
        <MedflowModal
          open={open}
          setOpen={setOpen}
          title={<div>Recommendation:</div>}
          size={"xl"}
        >
          <Container>
            <Row>
              <Col sm={12}>
                <p className="modalContentHeader">
                  WELL's Score is
                  <span className={wellnessScoreClass}>{wellnessScore}</span> (
                  <span className={wellnessScoreClass}>{wellnessLevel}</span>
                  Risk for PE)
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className="calculatorButton">
                  <Button
                    variant="link"
                    className="calculatorButton"
                    size="md"
                    onClick={() => setIsWellnessCalculatorModalOpen(true)}
                  >
                    Wells' Score Calculator
                  </Button>
                  <WellnessCalculator
                    open={isWellnessCalculatorModalOpen}
                    setOpen={setIsWellnessCalculatorModalOpen}
                    wellnessScore={wellnessScore}
                    setWellnessScore={setWellnessScore}
                    wellnessCalculatorType={wellnessCalculatorType}
                    wellnessOptions={wellnessOptions}
                    wellnessScoreClass={wellnessScoreClass}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <p className="mt-3 modalContentHeader"> NEXT STEPS:</p>
              </Col>
            </Row>
            <Row>
              <Col sm={"12"}>
                <div className="flowChart">
                  <FlowDiagram
                    className="mx-0 my-0"
                    elementNodes={elementNodes}
                    zoomLevel={zoomLevel}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <div className="mx-5 my-2">
                <small>
                  {" "}
                  * Consider VIQ Scan if CTA Chest contraindicated due to
                  abnormal kidney function or allergy to dye.{" "}
                </small>
              </div>
            </Row>
            <Row>
              <Col sm={12}>
                <div className="customButtonGroup mt-4">
                  <Button
                    variant={disableSaveButton ? "secondary" : "primary"}
                    className="customButton"
                    size="md"
                    disabled={disableSaveButton}
                  >
                    Add to Order
                  </Button>
                  <Button
                    className="customButton"
                    size="md"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </MedflowModal>
      )}
    </div>
  );
};

export default PEWellScoreFlowChart;
