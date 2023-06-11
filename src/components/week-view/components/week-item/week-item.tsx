import React from "react";

import "./week-item.css";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
}

function WeekItem(InputProps: props) {
  return (
    <>
      <div className="week-item-container">
        <div className="week-container">
          <Typography variant="h5" className="weekview-header-title">
            Week {InputProps.weeknumber + 1} : {`${dayjs().format("MM/DD/YYYY")} - ${dayjs().add(1, "week").format("MM/DD/YYYY")}`}
          </Typography>
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
