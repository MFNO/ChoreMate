import { TextField } from "@mui/material";
import React from "react";

import "./setup-view.css";
import { Roommate } from "./components/roommate/roommate";

function SetupView() {
  return (
    <div className="setup-container">
      <Roommate/>
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
