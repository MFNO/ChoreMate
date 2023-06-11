import React from "react";

import "./week-day-item.css";
import dayjs from "dayjs";

interface props {
  DayNumber: number;
}

function WeekDayItem(InputProps: props) {
  return (
    <>
      <div className="week-day-container">
        <div>{dayjs().weekday(InputProps.DayNumber).format('dddd')}</div>
      </div>
    </>
  );
}

export { WeekDayItem };
