// priority 999


const yieldBlacklist = [
  "#forge:coals",
  "#c:coals",
  "#neoforge:coals",
  "laserio:logic_chip",
  "#pneumaticcraft:plastic_sheets",
  "stevescarts:component_refined_hardener",
  "#forge:rods",
  "#forge:rods/all_metal",
  "#forge:wires",
  "#c:rods",
  "#c:rods/all_metal",
  "#c:wires",
  "#c:ingots",
  "#c:gems",
  "#c:storage_blocks",
  "#c:dusts",
  "#neoforge:rods",
  "#neoforge:rods/all_metal",
  "#neoforge:wires",
  "stevescarts:component_galgadorian_metal",
]


const jeiBlacklist = [
  "ae2:facade",
  "functionalstorage:armory_cabinet",
  "mekanism:creative_chemical_tank",
  "mekanism:creative_fluid_tank",
  "productivebees:stone_chip",
  "productivebees:wood_chip",
];

const arsBlacklist = [
  "integratedtunnels:part_interface_item",
  "integratedtunnels:part_interface_filter_item",
  "integratedtunnels:part_importer_item",
  "integratedtunnels:part_exporter_item",
  "integratedtunnels:part_importer_world_item",
  "integratedtunnels:part_exporter_world_item",
  "chipped:botanist_workbench",
  "chipped:glassblower",
  "gravestone:gravestone",
  "chipped:carpenters_table",
  "chipped:loom_table",
  "chipped:mason_table",
  "chipped:alchemy_bench",
  "chipped:tinkering_table",
];

const addLawnmowerable = [
"  projectvibrantjourneys:glowing_blue_fungus",
  "projectvibrantjourneys:white_bark_mushroom",
  "projectvibrantjourneys:orange_bark_mushroom",
  "projectvibrantjourneys:light_brown_bark_mushroom",
  "projectvibrantjourneys:bark_mushroom",
  "projectvibrantjourneys:cattail",
  "projectvibrantjourneys:sea_oats",
  "projectvibrantjourneys:beach_grass",
  "projectvibrantjourneys:watergrass",
  "projectvibrantjourneys:sandy_sprouts",
  "projectvibrantjourneys:reeds",
  "projectvibrantjourneys:small_cactus",
  "projectvibrantjourneys:short_grass",
  "projectvibrantjourneys:blue_wildflowers",
  "projectvibrantjourneys:yellow_wildflowers",
  "projectvibrantjourneys:orange_wildflowers",
  "projectvibrantjourneys:purple_wildflowers",
  "projectvibrantjourneys:white_wildflowers",
  "projectvibrantjourneys:mixed_wildflowers"
];

const removeBoonDrops = [
  "powah:uraninite_block"
]

//Hiding and ununifying Items
ServerEvents.tags("item", (event) => {
  global["unUnified"].forEach((id) => {
    event.removeAllTagsFrom(id);
    event.add("c:hidden_from_recipe_viewers", id);
  });
});

//Unifying block tags
ServerEvents.tags("block", (event) => {
  global["unUnified"].forEach((id) => {
    event.removeAllTagsFrom(id);
  });
});


//Adding Item Tags
ServerEvents.tags("item", (event) => {
  event.add("c:glass/colorless", [
    "#c:glass_blocks/colorless",
    "minecraft:glass"
  ]);

  yieldBlacklist.forEach((id) => {
    event.add("enchantableblocks:yield_blacklist", id);
  });
  event.add("railcraft:nickel_raw", "c:raw_materials");
  event.add("curios:deep_learner", "hostilenetworks:deep_learner");
  event.add("enchantableblocks:yield_blacklist", "#c:ingots");
  event.add("enchantableblocks:yield_blacklist", "#c:nuggets");
  event.add("enchantableblocks:yield_blacklist", "#c:gems");
  event.add("enchantableblocks:yield_blacklist", "#c:storage_blocks");
  event.add("forge:ingots/iron", ["minecraft:iron_ingot"]);
  event.add("forge:dusts/redstone", ["minecraft:redstone"]);
  event.add("forge:glass_panes/colorless", ["minecraft:glass_pane"]);
  event.add("c:hidden_from_recipe_viewers", jeiBlacklist);
  event.remove("apothic_enchanting:boon_drops", removeBoonDrops);
  event.remove("c:ores_in_ground/stone", "powah:uraninite_block");
});

ServerEvents.tags("block", (event) => {
  arsBlacklist.forEach((block) => {
    event.get("ars_nouveau:no_break_drop").add(block);
  });
  removeBoonDrops.forEach((block) => event.remove("apothic_enchanting:boon_drops", block));
  event.add("justdirethings:lawnmowerable", ["#projectvibrantjourneys:groundcover"]);

  addLawnmowerable.forEach((block) => event.add("justdirethings:lawnmowerable", block));
});
