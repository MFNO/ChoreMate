import React from "react";

import "./week-item.css";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
}

function WeekItem(InputProps: props) {
  return (
    <>
      <div className="week-item-container">
        <div className="week-header-container">
          <div>Week {InputProps.weeknumber + 1}</div>
        </div>
        {InputProps.roommateChores.map((roommateChore, index) => {
          return (
            <div>
              {roommateChore.chore}:{roommateChore.roommate}
            </div>
          );
        })}
      </div>
    </>
  );
}

export { WeekItem };
