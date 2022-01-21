import React from "react";

export function buildPERecomendationFlowDiagram(setDisableSaveButton) {
  const connectionStle = {
    stroke: "#217c9d",
  };

  const connectionLabelStyle = {
    fontWeight: 600,
    fontSize: "1.2em",
    fill: "#217c9d",
  };

  const nodeStyle = {
    borderColor: "#217c9d",
  };

  const buildEventAction = (event) => {
    if (event.target.checked) {
      setDisableSaveButton(false);
    } else {
      setDisableSaveButton(true);
    }
  };

  const highRiskElementNodes = [
    {
      id: "1",
      type: "default",
      draggable: false,
      data: {
        label: "37.5% Incidence of PE >6",
      },
      position: {
        x: 250,
        y: 50,
      },
      style: { width: "150px", borderColor: "#217c9d" },
    },
    {
      id: "2",
      type: "default",
      draggable: false,
      data: {
        label: "CTA",
      },
      position: {
        x: 250,
        y: 130,
      },
      style: nodeStyle,
    },
    {
      id: "3",
      type: "default",
      draggable: false,
      data: {
        label: "NUCLEAR MED SCAN TO RIOPE",
      },
      position: {
        x: 250,
        y: 230,
      },
      style: nodeStyle,
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "straight",
      style: connectionStle,
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      label: "If CIX",
      type: "straight",
      style: connectionStle,
      labelStyle: {
    fontWeight: 600,
    marginLeft: 10,
    fill: "#217c9d",
  },
      arrowHeadType: "arrowclosed",
    }
  ];

  const moderateRiskElementNodes = [
    {
      id: "1",
      type: "default",
      draggable: false,
      data: {
        label: "16.2% Incidence of PE 2-6",
      },
      position: {
        x: 250,
        y: 50,
      },
      style: { width: "150px", borderColor: "#217c9d" },
    },
    {
      id: "2",
      type: "default",
      draggable: false,
      data: {
        label: "D-DIMER",
      },
      position: {
        x: 125,
        y: 140,
      },
      style: nodeStyle,
    },
    {
      id: "3",
      type: "default",
      draggable: false,
      data: {
        label: <>CTA if MO CIX</>,
      },
      position: {
        x: 400,
        y: 140,
      },
      style: nodeStyle,
    },
    {
      id: "4",
      type: "default",
      draggable: false,
      data: {
        label: "STOP",
      },
      position: {
        x: 50,
        y: 220,
      },
      style: nodeStyle,
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      style: connectionStle,
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      type: "smoothstep",
      style: connectionStle,
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      label: "+",
      style: connectionStle,
      labelStyle: connectionLabelStyle,
      arrowHeadType: "arrowclosed",
    },

    {
      id: "e2-4",
      source: "2",
      target: "4",
      type: "smoothstep",
      style: connectionStle,
      label: "-",
      labelStyle: connectionLabelStyle,
      arrowHeadType: "arrowclosed",
    },
  ];
  const lowRisklementNodes = [
    {
      id: "1",
      type: "default",
      draggable: false,
      data: {
        label: "1.3% Incidence of PE <2",
      },
      position: {
        x: 270,
        y: 50,
      },
      style: { width: "150px", borderColor: "#217c9d" },
    },
    {
      id: "2",
      type: "default",
      draggable: false,
      data: {
        label: "D-DIMER",
      },
      position: {
        x: 270,
        y: 130,
      },
      style: { width: "150px", borderColor: "#217c9d" },
    },
    {
      id: "3",
      type: "default",
      draggable: false,
      data: {
        label: (
          <>
            <input
              type={"checkbox"}
              className="medflowCheckbox"
              onChange={(e) => buildEventAction(e)}
            />
            CTA if MO CIX<sup>*</sup>
          </>
        ),
      },
      position: {
        x: 50,
        y: 230,
      },
      style: nodeStyle,
    },
    {
      id: "4",
      type: "default",
      draggable: false,
      data: {
        label: <>NUCLEAR MED SCAN TO RIOPE IF CTA CIX</>,
      },
      position: {
        x: 225,
        y: 230,
      },
      style: nodeStyle,
    },
    {
      id: "5",
      type: "default",
      draggable: false,
      data: {
        label: "STOP",
      },
      position: {
        x: 450,
        y: 230,
      },
      style: nodeStyle,
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "straight",
      style: connectionStle,
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      style: connectionStle,
      arrowHeadType: "arrowclosed",
    },

    {
      id: "e2-4",
      source: "2",
      target: "4",
      type: "smoothstep",
      style: connectionStle,
      labelStyle: connectionLabelStyle,
      label: "+",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e2-5",
      source: "2",
      target: "5",
      style: connectionStle,
      labelStyle: connectionLabelStyle,
      type: "smoothstep",
      label: "-",
      arrowHeadType: "arrowclosed",
    },
  ];

  return {
    lowRisklementNodes: lowRisklementNodes,
    moderateRiskElementNodes: moderateRiskElementNodes,
    highRiskElementNodes: highRiskElementNodes
  };
}
