import React, { useState } from "react";
import { SetupView } from "./components/setup-view/setup-view";
import { InputItem } from "../src/shared/types/input-item";
import { WeekView } from "./components/week-view/week-view";
import "./App.css";
import { WeekDisplayItem } from "./shared/types/week-item";
import { RoommateChoreItem } from "./shared/types/roommate-chore-item";

function App() {
  const [roommates, setRoommates] = useState<Array<InputItem>>([]);
  const [chores, setChores] = useState<Array<InputItem>>([]);
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(0);
  const [weekDisplayItems, setWeekDisplayItems] = useState<
    Array<WeekDisplayItem>
  >([]);


  React.useEffect(() => {
    let roommateIndex = 0;
    let tempWeekDisplayItems: Array<WeekDisplayItem> = [];
    for (let x = 0; x < numberOfWeeks; x++) {
      let roommateChoreItems: Array<RoommateChoreItem> = [];
      if (roommates.length === chores.length) roommates.reverse();

      for (let y = 0; y < chores.length; y++) {
        if (roommateIndex === roommates.length) {
          roommateIndex = 0;
        }
        let roommateChore: RoommateChoreItem = { chore: chores[y].name, roommate: roommates[roommateIndex].name };
        roommateChoreItems.push(roommateChore);
        roommateIndex++;
      }
      const weekDisplayItem: WeekDisplayItem = { weekNumber: x, roommateChores: roommateChoreItems };
      tempWeekDisplayItems.push(weekDisplayItem);
    }
    setWeekDisplayItems(tempWeekDisplayItems);
  }, [chores, roommates, numberOfWeeks]);

  return (
    <div className="content">
      <SetupView
        roommates={roommates}
        setRoommates={setRoommates}
        chores={chores}
        setChores={setChores}
        numberOfWeeks={numberOfWeeks}
        setNumberOfWeeks={setNumberOfWeeks}
      ></SetupView>
      <WeekView
        weekDisplayItems={weekDisplayItems}
        roommates={roommates}
        chores={chores}
      ></WeekView>
    </div>
  );
}

export default App;
