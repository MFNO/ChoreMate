import React from "react";

import "./week-view.css";
import { WeekItem } from "./components/week-item/week-item";
import { Typography, } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";
import { RoommateChoreItem } from "../../shared/types/roommate-chore-item";
import { useReactToPrint } from "react-to-print";
import PrintIcon from '@mui/icons-material/Print';

interface props {
  roommateChores: Array<Array<RoommateChoreItem>>;
  numberOfWeeks: number;
}

const WeekView = (InputProps: props) => {
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [selectedMonth, setSelectedMonth] = React.useState<Dayjs | null>(dayjs());
  return (
    <>
      <div className="weekview-container" >
        <div className="weekview-header">
          <Typography variant="h2" className="weekview-header-title">Calendar</Typography>
          <div className="week-input-content">
            <DatePicker sx={{ color: "red" }} value={selectedMonth}
              onChange={(newValue) => setSelectedMonth(newValue)} views={['month']} />
          </div>
        </div>
        <div className="print-container"><PrintIcon id="print-button" onClick={handlePrint}></PrintIcon></div>
        <div ref={componentRef} className="weekitems-print">
          {[...Array(InputProps.numberOfWeeks)].map((item, index) => {
            return (
              <WeekItem
                key={index}
                roommateChores={InputProps.roommateChores[index]}
                weeknumber={index}
                selectedMonth={selectedMonth}
              ></WeekItem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { WeekView };
