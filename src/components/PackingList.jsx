/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Item from "./Item";


export default function PackingList({items, onDeleteItem, onToggleItem, handleClearList }) {
  const [sortBy, setSortBy] = useState("input")

let sortedItems;

// sorting by creation date
if (sortBy === "input") {
sortedItems = items;
}
// sorting by alphabet
if (sortBy === "description"){
  sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
}
//sorting by packed status
if (sortBy === "packed") {
  sortedItems = items.slice().sort((a, b) => Number(a. packed) - Number(b.packed))
}
  return (
    <div className="list">


      <ul>
        {sortedItems.map((item, handleClearList) => {
          return <Item item={item} onDeleteItem={onDeleteItem} onToggleItem ={onToggleItem} key={item.id} />;
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={handleClearList}>Clear list</button>

      </div>
    </div>
  );
}
