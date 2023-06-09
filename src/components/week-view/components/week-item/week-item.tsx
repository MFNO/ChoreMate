import React from "react";

import "./week-item.css";

function WeekItem() {
  return (
    <>
      <div className="week-item-container">
        <div className="week-header-container">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
      </div>
    </>
  );
}

export { WeekItem };
