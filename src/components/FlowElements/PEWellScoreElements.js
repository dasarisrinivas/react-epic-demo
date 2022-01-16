import React from "react";

export function buildPERecomendationFlowDiagram(setDisableSaveButton) {
  const connectionStle = {
    stroke: "#217c9d",
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

  const elementNodes = [
    {
      id: "1",
      type: "default",
      draggable: false,
      data: {
        label: "D-DIMER",
      },
      position: {
        x: 100,
        y: 5,
      },
      style: { width: "400px", borderColor: "#217c9d" },
    },
    {
      id: "2",
      type: "default",
      draggable: false,
      data: {
        label: (
          <>
            <input type={"checkbox"} className="medflowCheckbox" onChange={(e) => buildEventAction(e)} />
            CTA Chest <sup>*</sup>
          </>
        ),
      },
      position: {
        x: 100,
        y: 100,
      },
      style: nodeStyle,
    },
    {
      id: "3",
      type: "default",
      draggable: false,
      data: {
        label: "Stop Workup",
      },
      position: {
        x: 400,
        y: 100,
      },
      style: nodeStyle,
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      style: connectionStle,
      label: "+",
    },

    {
      id: "e1-3",
      source: "1",
      target: "3",
      style: connectionStle,
      type: "smoothstep",
      label: "-",
    },
  ];

  return { elementNodes: elementNodes };
}
