/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Item from "./Item";


export default function PackingList({items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item item={item} onDeleteItem={onDeleteItem} onToggleItem ={onToggleItem} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
