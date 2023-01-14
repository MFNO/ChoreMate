import { TextField } from "@mui/material";
import React from "react";

import "./setup-view.css";

function SetupView() {
  return (
    <div className="setup-container">
      <TextField
        className="setup-input-field"
        id="outlined-basic"
        label="Roommate"
        variant="outlined"
      />
      <TextField
        className="setup-input-field"
        id="outlined-basic"
        label="Chore"
        variant="outlined"
      />
    </div>
  );
}

export { SetupView };
