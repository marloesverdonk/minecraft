import React from "react";
import sand from "../Images/sand.png";
import stone from "../Images/stone.png";
import dirt from "../Images/dirt.png";
import wood from "../Images/wood.png";

import RawMaterialsList from "../Items/RawMaterials";

function RawMaterials({ onRawMaterialClick }) {
  return (
    <div>
      <h1>Raw materials</h1>
      {RawMaterialsList.map((item) => (
        <img
          src={
            item.name === "sand"
              ? sand
              : item.name === "stone"
              ? stone
              : item.name === "dirt"
              ? dirt
              : wood
          }
          height="70px"
          key={item.name}
          onClick={() => onRawMaterialClick(item)}
        />
      ))}
    </div>
  );
}

export default RawMaterials;
