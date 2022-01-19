import { DragIconWrapper } from "../../styles/styles";
import { ReactComponent as DragHandleIcon } from "./drag_handle-black-18dp.svg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <div className="d-flex justify-content-between">
        <div>{props.children}</div>
        <div>
          <FontAwesomeIcon
            icon={faGripLines}
            className={"headerIcon"}
            size="lg"
          />
        </div>
      </div>
    </DragIconWrapper>
  );
}
