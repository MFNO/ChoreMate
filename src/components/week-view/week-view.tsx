import React, { useState } from "react";
import { TextField } from "@mui/material";

import "./week-view.css";
import { InputItem } from "../setup-view/components/input-view/types/input-item";
import { WeekItem } from "./components/week-header/week-item";

interface props {
  roommates: Array<InputItem>;
  chores: Array<InputItem>;
}

function WeekView(InputProps: props) {
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(0);
  return (
    <>
      <div className="weekview-container">
        <TextField
          className="number-weeks-input-field"
          id="outlined-basic"
          label="Weeks"
          variant="outlined"
          type="number"
          value={numberOfWeeks}
          onChange={(event) => setNumberOfWeeks(Number(event.target.value))}
        />
        {[...Array(numberOfWeeks)].map((item, index) => (
          <>
            <WeekItem></WeekItem>
            <div className="test" key={index}>
              je mama
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export { WeekView };
