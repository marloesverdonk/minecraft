import React, { useCallback, useState } from "react";

import RawMaterials from "./RawMaterials.jsx";
import Inventory from "./Inventory.jsx";
import Workbench from "./Workbench.jsx";

function Environment() {
  const [inventory, setInventory] = useState([]);
  const [workbench, setWorkbench] = useState([]);
  const [totalInventoryAmount, setTotalInventoryAmount] = useState(0);
  const [totalWorkbanchAmount, setTotalWorkbanchAmount] = useState(0);

  const onRawMaterialClick = useCallback(
    (clickedItem) => {
      if (totalInventoryAmount >= 10) {
        return;
      }

      let newInventory = [...inventory];

      const clickedItemIndex = newInventory.findIndex(
        (item) => item.name === clickedItem.name
      );

      if (clickedItemIndex >= 0) {
        newInventory[clickedItemIndex].amount++;
      } else {
        newInventory = [...newInventory, clickedItem];
      }

      setTotalInventoryAmount(totalInventoryAmount + 1);
      setInventory(newInventory);
    },
    [inventory, totalInventoryAmount]
  );

  const onInventoryClick = useCallback(
    (clickedItem) => {
      if (totalWorkbanchAmount >= 4) {
        return;
      }

      let newWorkbench = [...workbench];
      let newInventory = [...inventory];

      const clickedItemIndexWorkbench = newWorkbench.findIndex(
        (item) => item.name === clickedItem.name
      );

      const clickedItemIndexInventory = newInventory.findIndex(
        (item) => item.name === clickedItem.name
      );

      if (clickedItemIndexWorkbench >= 0) {
        newWorkbench[clickedItemIndexWorkbench].amount++;
      } else {
        let newItem = { ...clickedItem };
        newItem.amount = 1;
        newWorkbench = [...newWorkbench, newItem];
      }

      newInventory[clickedItemIndexInventory].amount--;

      setTotalInventoryAmount(totalInventoryAmount - 1);
      setTotalWorkbanchAmount(totalWorkbanchAmount + 1);
      setInventory(newInventory);
      setWorkbench(newWorkbench);
    },
    [workbench, inventory, totalInventoryAmount, totalWorkbanchAmount]
  );

  const onWorkbenchClick = useCallback(
    (clickedItem) => {
      if (totalInventoryAmount >= 10) {
        return;
      }

      let newWorkbench = [...workbench];
      let newInventory = [...inventory];

      const clickedItemIndexWorkbench = newWorkbench.findIndex(
        (item) => item.name === clickedItem.name
      );

      const clickedItemIndexInventory = newInventory.findIndex(
        (item) => item.name === clickedItem.name
      );

      if (clickedItemIndexInventory >= 0) {
        newInventory[clickedItemIndexInventory].amount++;
      } else {
        let newItem = { ...clickedItem };
        newItem.amount = 1;
        newWorkbench = [...newWorkbench, newItem];
      }

      newWorkbench[clickedItemIndexWorkbench].amount--;

      setTotalInventoryAmount(totalInventoryAmount + 1);
      setTotalWorkbanchAmount(totalWorkbanchAmount - 1);
      setInventory(newInventory);
      setWorkbench(newWorkbench);
    },
    [workbench, inventory, totalInventoryAmount, totalWorkbanchAmount]
  );

  return (
    <div>
      <RawMaterials onRawMaterialClick={onRawMaterialClick} />
      <Inventory inventory={inventory} onInventoryClick={onInventoryClick} />
      <Workbench workbench={workbench} onWorkbenchClick={onWorkbenchClick} />
    </div>
  );
}

export default Environment;
