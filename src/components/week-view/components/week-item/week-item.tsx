import React from "react";

import "./week-item.css";
import { Dayjs } from "dayjs";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";
import { WeekHeaderItem } from "../week-header-item/week-header-item";
import { WeekDayItem } from "../week-day-item/week-day-item";
import { Typography } from "@mui/material";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
  selectedMonth: Dayjs | null;
}

function WeekItem(InputProps: props) {
  const colors = ["#9E4784", "#66347F", "#37306B"]
  return (
    <>
      <div className="week-item-container">
        <WeekHeaderItem weeknumber={InputProps.weeknumber} selectedMonthStartDay={InputProps.selectedMonth?.startOf('M')} ></WeekHeaderItem >
        <div className="week-day-container">
          {[...Array(7)].map((item, index) => { return (<WeekDayItem key={index} DayNumber={index}></WeekDayItem>) })}
        </div>
        <div className="chore-container">
          {InputProps.roommateChores && InputProps.roommateChores.map((roommateChore, index) => {
            return roommateChore.weekNumber === InputProps.weeknumber ? (
              <div style={{ backgroundColor: colors[index % 3] }} className="chore" key={index}>
                <Typography sx={{ color: "white" }} variant="h5">{roommateChore.chore} : {roommateChore.roommate}</Typography>
              </div>
            ) : (<></>);
          })}
        </div>
      </div>
    </>
  );
}

export { WeekItem };
