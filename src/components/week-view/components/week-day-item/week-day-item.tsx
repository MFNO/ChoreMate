import React from "react";

import "./week-day-item.css";
import dayjs from "dayjs";

interface props {
  DayNumber: number;
}

function WeekDayItem(InputProps: props) {
  return (
    <>
      <div className="week-day-content">
        <div>{dayjs().weekday(InputProps.DayNumber).format('ddd')}</div>
      </div>
    </>
  );
}

export { WeekDayItem };
