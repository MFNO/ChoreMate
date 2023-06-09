import React, { useState } from "react";
import { SetupView } from "./components/setup-view/setup-view";
import { InputItem } from "../src/shared/types/input-item";
import { WeekView } from "./components/week-view/week-view";
import "./App.css";
import { WeekDisplayItem } from "./shared/types/week-item";

function App() {
  const [roommmates, setRoommates] = useState<Array<InputItem>>([]);
  const [chores, setChores] = useState<Array<InputItem>>([]);
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(0);
  const [weekDisplayItems, setWeekDisplayItems] = useState<
    Array<WeekDisplayItem>
  >([]);
  // React.useEffect(() => {
  //   let temp = [];
  //   let index = 0;
  //   for (
  //     let x = 0;
  //     x < InputProps.chores.length * (InputProps.weeknumber + 1);
  //     x++
  //   ) {
  //     if (index === InputProps.roommates.length) {
  //       index = 0;
  //     }
  //     temp.push(InputProps.roommates[index]);
  //     index++;
  //   }
  //   setRoommateChore(temp);
  // }, [InputProps.chores, InputProps.roommates, InputProps.weeknumber]);

  React.useEffect(() => {
    setWeekDisplayItems([
      {
        weekNumber: 1,
        roommateChores: [{ chore: "testChore", roommmate: "testRoommate" }],
      },
    ]);
  });

  return (
    <div className="content">
      <SetupView
        roommates={roommmates}
        setRoommates={setRoommates}
        chores={chores}
        setChores={setChores}
      ></SetupView>
      <WeekView
        weekDisplayItems={weekDisplayItems}
        numberOfWeeks={numberOfWeeks}
        roommates={roommmates}
        setNumberOfWeeks={setNumberOfWeeks}
        chores={chores}
      ></WeekView>
    </div>
  );
}

export default App;
