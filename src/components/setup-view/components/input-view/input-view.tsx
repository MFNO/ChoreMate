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
  function removeItem(index: number) {
    let itemsArray = [...items];
    itemsArray.splice(index, 1);
    setItems(itemsArray);
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
        {items.map((item, index) => {
          return (
            <div key={index} className="item-display-content">
              <TextField
                className="item-display-name"
                id="outlined-basic"
                label={InputProps.name}
                variant="outlined"
                disabled={true}
                value={item.name}
              />
              <IconButton
                onClick={() => removeItem(index)}
                color="primary"
                aria-label="upload picture"
                component="label"
                disabled={!newItem.name}
              >
                <RemoveCircle />
              </IconButton>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { InputView };
