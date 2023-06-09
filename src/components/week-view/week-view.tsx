import React from "react";

import "./week-view.css";
import { InputItem } from "../../shared/types/input-item";
import { WeekItem } from "./components/week-item/week-item";
import { WeekDisplayItem } from "../../shared/types/week-item";

interface props {
  roommates: Array<InputItem>;
  chores: Array<InputItem>;
  weekDisplayItems: Array<WeekDisplayItem>;
}

function WeekView(InputProps: props) {
  return (
    <>
      <div className="weekview-container" >
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
