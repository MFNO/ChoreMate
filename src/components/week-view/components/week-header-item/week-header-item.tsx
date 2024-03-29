import React from "react";

import "./week-header-item.css";
import { Dayjs } from "dayjs";
import { Typography } from "@mui/material";

interface props {
  weeknumber: number;
  selectedMonthStartDay: Dayjs | undefined;
}

function WeekHeaderItem(InputProps: props) {
  if (InputProps.weeknumber === 1) {
    return (<>
      <div className="week-container">
        {InputProps.selectedMonthStartDay &&
          <Typography variant="h6" className="weekview-header-title">
            Week {`${InputProps.selectedMonthStartDay.add(1, "week").format("MM/DD/YYYY")} - ${InputProps.selectedMonthStartDay.add(InputProps.weeknumber + 1, "week").format("MM/DD/YYYY")}`}
          </Typography>
        }
      </div>
    </>)
  }
  return (<>
    <div className="week-container">
      {InputProps.selectedMonthStartDay &&
        <Typography variant="h6" className="weekview-header-title">
          Week {`${InputProps.selectedMonthStartDay.add(InputProps.weeknumber, "week").format("MM/DD/YYYY")} - ${InputProps.selectedMonthStartDay.add(InputProps.weeknumber + 1, "week").format("MM/DD/YYYY")}`}
        </Typography>
      }
    </div>
  </>);
}

export { WeekHeaderItem };
