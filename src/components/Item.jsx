/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}
