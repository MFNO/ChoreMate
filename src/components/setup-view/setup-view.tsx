import React from "react";

import "./setup-view.css";
import { InputView } from "./components/input-view/input-view";
import { InputItem } from "../../shared/types/input-item";
interface props {
  roommates: Array<InputItem>;
  chores: Array<InputItem>;
  setRoommates: (items: Array<InputItem>) => void;
  setChores: (items: Array<InputItem>) => void;
}
function SetupView(InputProps: props) {
  return (
    <>

      <div className="setup-container">

        <div className="input-content">
          <div className="input-container">
            <InputView
              items={InputProps.roommates}
              setItems={InputProps.setRoommates}
              name="Roommate"
            />
          </div>
          <div className="input-container">
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
