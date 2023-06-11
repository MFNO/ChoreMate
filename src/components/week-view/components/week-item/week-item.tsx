import React from "react";

import "./week-item.css";
import { Dayjs } from "dayjs";
import { Typography } from "@mui/material";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
  selectedMonth: Dayjs | null;
}

function WeekItem(InputProps: props) {
  return (
    <>
      <div className="week-item-container">
        <div className="week-container">
          {InputProps.selectedMonth && (<Typography variant="h5" className="weekview-header-title">
            Week {InputProps.weeknumber + 1} : {`${InputProps.selectedMonth.add(InputProps.weeknumber, "week").format("MM/DD/YYYY")} - ${InputProps.selectedMonth.add(InputProps.weeknumber + 1, "week").format("MM/DD/YYYY")}`}
          </Typography>)}

        </div>
        <div className="chore-container">
          {InputProps.roommateChores && InputProps.roommateChores.map((roommateChore, index) => {
            return roommateChore.weekNumber === InputProps.weeknumber ? (
              <div key={index}>
                {roommateChore.chore} : {roommateChore.roommate}
              </div>
            ) : (<></>);
          })}
        </div>
      </div>
    </>
  );
}

export { WeekItem };
