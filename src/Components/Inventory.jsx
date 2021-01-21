import React from "react";
import sand from "../Images/sand.png";
import stone from "../Images/stone.png";
import dirt from "../Images/dirt.png";
import wood from "../Images/wood.png";

function Inventory({ inventory, onInventoryClick }) {
  return (
    <div>
      <h1>Inventory</h1>
      {inventory.map(
        (item) =>
          item.amount > 0 && (
            <flex key={item.name} onClick={() => onInventoryClick(item)}>
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
              />
              {item.amount}
            </flex>
          )
      )}
    </div>
  );
}

export default Inventory;
