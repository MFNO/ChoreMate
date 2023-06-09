import React, { useState } from "react";
import { TextField } from "@mui/material";

import "./week-view.css";
import { InputItem } from "../../shared/types/input-item";
import { WeekItem } from "./components/week-item/week-item";
import { WeekDisplayItem } from "../../shared/types/week-item";

interface props {
  roommates: Array<InputItem>;
  chores: Array<InputItem>;
  weekDisplayItems: Array<WeekDisplayItem>;
  numberOfWeeks: number;
  setNumberOfWeeks: (numberOfWeeks: number) => void;
}

function WeekView(InputProps: props) {
  return (
    <>
      <div className="weekview-container">
        <TextField
          className="number-weeks-input-field"
          id="outlined-basic"
          label="Weeks"
          variant="outlined"
          type="number"
          value={InputProps.numberOfWeeks}
          onChange={(event) =>
            InputProps.setNumberOfWeeks(Number(event.target.value))
          }
        />
        {InputProps.weekDisplayItems.map((weekDisplay, index) => {
          return (
            <WeekItem
              key={index}
              roommateChores={weekDisplay.roommateChores}
              weeknumber={weekDisplay.weekNumber}
            ></WeekItem>
          );
        })}
      </div>
    </>
  );
}

export { WeekView };
