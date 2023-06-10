import React from "react";

import "./week-view.css";
import { InputItem } from "../../shared/types/input-item";
import { WeekItem } from "./components/week-item/week-item";
import { WeekDisplayItem } from "../../shared/types/week-item";
import { Select, MenuItem, Typography } from "@mui/material";

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

      <div className="weekview-container" >
        <div className="weekview-header">
          <Typography variant="h2" className="weekview-header-title">Calendar</Typography>
          <div className="week-input-content">
            <Select
              id="week-number-select"
              value={InputProps.numberOfWeeks}
              label="Number"
              onChange={(event) =>
                InputProps.setNumberOfWeeks(Number(event.target.value))
              }
            >
              {[...Array(10)].map((item, index) => {
                return (<MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>)
              })}
            </Select>
          </div>
        </div>
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
