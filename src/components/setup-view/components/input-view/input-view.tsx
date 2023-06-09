import { TextField, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import React, { useState } from "react";

import "./input-view.css";
import { InputItem } from "./types/input-item";

interface props {
  name: string;
}
function InputView(InputProps: props) {
  function addItem() {
    const newItems = [...items, newItem];
    setItems(newItems);
  }
  function removeItem() {
    const newItems = [...items, newItem];
    setItems(newItems);
  }
  const [items, setItems] = useState<Array<InputItem>>([]);
  const [newItem, setNewItem] = useState<InputItem>({ name: "" });
  return (
    <>
      <div className="name-input-container">
        <TextField
          className="name-input-field"
          id="outlined-basic"
          label={InputProps.name}
          variant="outlined"
          value={newItem.name}
          onChange={(event) => setNewItem({ name: event.target.value })}
        />
        <IconButton
          onClick={() => addItem()}
          color="primary"
          aria-label="add item"
          component="label"
          disabled={!newItem.name}
        >
          <AddCircle />
        </IconButton>
      </div>
      <div className="item-display-container">
        <div className="item-display-content">
          {items.map((item, index) => {
            console.log("index", index === items.length - 1);
            return (
              <>
                <TextField
                  key={index}
                  InputProps={{ className: "item-display-name" }}
                  id="outlined-basic"
                  label={InputProps.name}
                  variant="outlined"
                  disabled={true}
                  value={item.name}
                />
                {index === items.length - 1 && (
                  <IconButton
                    key={index + 1}
                    onClick={() => removeItem()}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    disabled={!newItem.name}
                  >
                    <RemoveCircle />
                  </IconButton>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { InputView };
