import React, { useState } from "react";
import { SetupView } from "./components/setup-view/setup-view";
import { InputItem } from "../src/shared/types/input-item";
import { WeekView } from "./components/week-view/week-view";
import "./App.css";
import { RoommateChoreItem } from "./shared/types/roommate-chore-item";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./dayjs"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    allVariants: {
      color: "#D27685"
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#D27685",
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#D27685",
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#D27685"
        }
      }
    },
  }
});

function App() {
  const [roommates, setRoommates] = useState<Array<InputItem>>([]);
  const [chores, setChores] = useState<Array<InputItem>>([]);
  const [roommateChorePerWeek, setRoommateChoresPerWeek] = useState<Array<Array<RoommateChoreItem>>>([]);
  const numberOfWeeks = 52;


  React.useEffect(() => {

    let roommateIndex = 0;
    let roommateChoreItems = [];
    for (let x = 0; x < numberOfWeeks; x++) {
      let roommateChoreItemsWeekly: Array<RoommateChoreItem> = [];
      if (roommates.length > 0 && chores.length > 0) {
        if (roommates.length === chores.length) roommates.reverse();

        for (let y = 0; y < chores.length; y++) {
          if (roommateIndex === roommates.length) {
            roommateIndex = 0;
          }
          let roommateChore: RoommateChoreItem = { weekNumber: x, chore: chores[y].name, roommate: roommates[roommateIndex].name };
          roommateChoreItemsWeekly.push(roommateChore);
          roommateIndex++;
        }
      }
      roommateChoreItems.push(roommateChoreItemsWeekly);
    }
    setRoommateChoresPerWeek(roommateChoreItems);

  }, [chores, roommates, numberOfWeeks]);

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <CssBaseline />
        <div className="content">
          <SetupView
            roommates={roommates}
            setRoommates={setRoommates}
            chores={chores}
            setChores={setChores}

          ></SetupView>
          <WeekView
            numberOfWeeks={numberOfWeeks}
            roommateChores={roommateChorePerWeek}
          ></WeekView>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
