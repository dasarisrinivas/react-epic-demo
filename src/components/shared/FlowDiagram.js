import React, { useState, useEffect } from "react";

import ReactFlow from "react-flow-renderer";

const FlowDiagram = ({ elementNodes,zoomLevel }) => {
  const [elements, setElements] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  useEffect(() => {
    setElements(elementNodes);
  }, [elementNodes]);

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
    setReactFlowInstance(reactFlowInstance);
  };

  useEffect(() => {
    if (reactFlowInstance && elements.length) {
      reactFlowInstance.fitView();
    }
  }, [reactFlowInstance, elements]);

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      draggable={false}
      maxZoom={zoomLevel}
      defaultZoom={zoomLevel}
      minZoom={zoomLevel}
    />
  );
};

export default FlowDiagram;
