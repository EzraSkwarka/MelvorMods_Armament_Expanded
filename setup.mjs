export function setup(ctx) {
  console.warn("[AE] Loaded Armament Expanded");

  ctx.onInterfaceReady((ctx) => {
    modifyMonsterDrops();
  });
}

const modifyMonsterDrops = () => {
  addDropToLootTable("melvorD:Plant", ["Armament_Expanded:Bronze_Spear", 1, 1, 5]);
};

const addDropToLootTable = (monster, drop_array) => {
  //Monster should be a string
  //Drop Array should be [item, minQuantity, MaxQuantity, weight]
  let lootTable = game.monsters.find((m) => m.id === monster)?.lootTable;
  const drop = game.items.find((i) => i.id === drop_array[0]);

  //Error Reporting
  if (lootTable === undefined) console.warn("[AE] Failed to patch: " + item);
  if (drop === undefined) console.warn("[AE] Failed to add " + drop_array[0] + " to " + item);

  if (lootTable && drop) {
    const loot = {
      item: drop,
      minQuantity: drop_array[1],
      maxQuantity: drop_array[2],
      weight: drop_array[3],
    };

    lootTable.totalWeight += loot.weight;
    lootTable.drops.push(loot);
  }
};
