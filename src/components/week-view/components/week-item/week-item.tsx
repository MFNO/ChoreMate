import React from "react";

import "./week-item.css";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";
import dayjs from "dayjs";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
}

function WeekItem(InputProps: props) {
  return (
    <>
      <div className="week-item-container">
        <div className="week-container">
          <div>Week {InputProps.weeknumber + 1} : {`${dayjs().format("MM/DD/YYYY")} - ${dayjs().add(1, "week").format("MM/DD/YYYY")}`}</div>
        </div>
        <div className="chore-container">
          {InputProps.roommateChores.map((roommateChore, index) => {
            return (
              <div key={index}>
                {roommateChore.chore} : {roommateChore.roommate}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { WeekItem };
