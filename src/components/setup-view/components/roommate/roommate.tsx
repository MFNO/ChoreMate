import { TextField, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React from "react";

import "./roommate.css";

function Roommate() {

  const chores = []

  function doSomething () {
    console.log("add")
  }

  return (
    <>
      <TextField
        className="setup-input-field"
        id="outlined-basic"
        label="Roommate"
        variant="outlined"
      />
      <IconButton onClick={() => doSomething()} color="primary" aria-label="upload picture" component="label">
        <AddCircle />
      </IconButton>
    </>
  );
}

export { Roommate };
