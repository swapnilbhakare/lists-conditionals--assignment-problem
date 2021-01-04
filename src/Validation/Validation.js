import React from "react";

function Validation(props) {
  let ValidationMessage = "Text long enough";

  if (props.inputSize <= 5) {
    ValidationMessage = "Text too short";
  }
  return (
    <div>
      <p>{ValidationMessage}</p>
    </div>
  );
}

export default Validation;
