import React from "react";

import "./setup-view.css";
import { InputView } from "./components/input-view/input-view";

function SetupView() {
  return (
    <div className="setup-container">
      <div className="input-view-container">
        <InputView name="Roommate" />
      </div>
      <div className="input-view-container">
        <InputView name="Chore" />
      </div>
    </div>
  );
}

export { SetupView };
