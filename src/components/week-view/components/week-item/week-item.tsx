import React from "react";

import "./week-item.css";
import { Dayjs } from "dayjs";
import { RoommateChoreItem } from "../../../../shared/types/roommate-chore-item";
import { WeekHeaderItem } from "../week-header-item/week-header-item";
import { WeekDayItem } from "../week-day-item/week-day-item";

interface props {
  roommateChores: Array<RoommateChoreItem>;
  weeknumber: number;
  selectedMonth: Dayjs | null;
}

function WeekItem(InputProps: props) {
  return (
    <>
      <div className="week-item-container">
        <WeekHeaderItem weeknumber={InputProps.weeknumber} selectedMonthStartDay={InputProps.selectedMonth?.startOf('M')} ></WeekHeaderItem >
        <div className="week-day-container">
          {[...Array(7)].map((item, index) => { return (<WeekDayItem DayNumber={index}></WeekDayItem>) })}
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
