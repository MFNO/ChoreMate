import React from "react";

import "./week-view.css";
import { WeekItem } from "./components/week-item/week-item";
import { Typography, } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";
import { RoommateChoreItem } from "../../shared/types/roommate-chore-item";


interface props {
  roommateChores: Array<RoommateChoreItem>;
  numberOfWeeks: number;
}

function WeekView(InputProps: props) {
  const [selectedMonth, setSelectedMonth] = React.useState<Dayjs | null>(dayjs());
  console.log(selectedMonth);
  return (
    <>
      <div className="weekview-container" >
        <div className="weekview-header">
          <Typography variant="h2" className="weekview-header-title">Calendar</Typography>
          <div className="week-input-content">
            <DatePicker value={selectedMonth}
              onChange={(newValue) => setSelectedMonth(newValue)} views={['month']} />
          </div>
        </div>
        {[...Array(InputProps.numberOfWeeks)].map((item, index) => {
          return (
            <WeekItem
              key={index}
              roommateChores={InputProps.roommateChores}
              weeknumber={index}
              selectedMonth={selectedMonth}
            ></WeekItem>
          );
        })}
      </div>
    </>
  );
}

export { WeekView };
