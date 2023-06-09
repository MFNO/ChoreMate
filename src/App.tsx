import React, { useState } from "react";
import { SetupView } from "./components/setup-view/setup-view";
import { InputItem } from "./components/setup-view/components/input-view/types/input-item";
import { WeekView } from "./components/week-view/week-view";
import "./App.css";

function App() {
  const [roommmates, setRoommates] = useState<Array<InputItem>>([]);
  const [chores, setChores] = useState<Array<InputItem>>([]);

  return (
    <div className="content">
      <SetupView
        roommates={roommmates}
        setRoommates={setRoommates}
        chores={chores}
        setChores={setChores}
      ></SetupView>
      <WeekView roommates={roommmates} chores={chores}></WeekView>
    </div>
  );
}

export default App;
