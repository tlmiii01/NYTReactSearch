import React from "react";

export const SubmitBtn = props => (
  <button {...props} className="btn btn-primary">
    {props.children}
  </button>
);

// export default SubmitBtn;