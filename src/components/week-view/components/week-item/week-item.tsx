import React from "react";

import "./week-item.css";
import { InputItem } from "../../../setup-view/components/input-view/types/input-item";

interface props {
  chores: Array<InputItem>;
  roommates: Array<InputItem>;
  weeknumber: number;
}

function WeekItem(InputProps: props) {
  console.log("inputted roommates", InputProps.roommates);
  console.log("inputted chores", InputProps.chores);
  return (
    <>
      <div className="week-item-container">
        <div className="week-header-container">
          <div>Week {InputProps.weeknumber}</div>
        </div>
        {InputProps.chores.map((chore, index) => {
          return <div key={index}>{chore.name}</div>;
        })}
      </div>
    </>
  );
}

export { WeekItem };
