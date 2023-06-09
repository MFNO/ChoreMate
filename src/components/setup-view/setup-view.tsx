import React from "react";

import "./setup-view.css";
import { InputView } from "./components/input-view/input-view";
import { InputItem } from "../../shared/types/input-item";
import { TextField } from "@mui/material";
interface props {
  roommates: Array<InputItem>;
  chores: Array<InputItem>;
  setRoommates: (items: Array<InputItem>) => void;
  setChores: (items: Array<InputItem>) => void;
  numberOfWeeks: number;
  setNumberOfWeeks: (numberOfWeeks: number) => void;
}
function SetupView(InputProps: props) {
  return (
    <>

      <div className="setup-container">
        <div className="week-input-content">
          <TextField
            className="number-weeks-input-field"
            id="outlined-basic"
            label="Weeks"
            variant="outlined"
            type="number"
            value={InputProps.numberOfWeeks}
            onChange={(event) =>
              InputProps.setNumberOfWeeks(Number(event.target.value))
            }
          />
        </div>
        <div className="input-content">
          <div >
            <InputView
              items={InputProps.roommates}
              setItems={InputProps.setRoommates}
              name="Roommate"
            />
          </div>
          <div>
            <InputView
              items={InputProps.chores}
              setItems={InputProps.setChores}
              name="Chore"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { SetupView };
