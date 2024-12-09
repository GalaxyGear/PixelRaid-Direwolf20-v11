const recipes_to_remove = [
    "minecraft:lead",
    "minecraft:sticky_piston",
    "stellaris:misc/steel_nugget",
    "stellaris:misc/uranium_block",
    "stellaris:misc/steel_ingot",
    "stellaris:misc/steel_block",
    "stellaris:misc/uranium_ingot",
    "utilitarian:utility/logs_to_sticks",
    "comforts:sleeping_bag_black",
    "integrateddynamics:smelting/menril_log_coal",
    "integrateddynamics:smelting/menril_log_filled_coal",
    "mekanism:compat/ae2/certus_quartz_dust_to_silicon",
    "xycraft_machines:extractor/resin"
]

const unificationRemovals = [
    'railcraft:silver_ingot_from_silver_nugget',
    'railcraft:silver_ingot',
    'railcraft:silver_block_from_silver_ingot',
    'railcraft:silver_nugget',
    'minecraft:silver_ingot_from_blasting_deepslate_silver_ore',
    'minecraft:silver_ingot_from_blasting_silver_raw',
    'minecraft:silver_ingot_from_blasting_silver_ore',
    'minecraft:silver_ingot_from_smelting_silver_raw',
    'minecraft:silver_ingot_from_smelting_silver_ore',
    'minecraft:silver_ingot_from_smelting_deepslate_silver_ore',
    'railcraft:tin_ingot_from_tin_nugget',
    'railcraft:tin_ingot',
    'railcraft:tin_nugget',
    'railcraft:tin_block_from_tin_ingot',
    'minecraft:tin_ingot_from_blasting_tin_ore',
    'minecraft:tin_ingot_from_blasting_deepslate_tin_ore',
    'minecraft:tin_ingot_from_blasting_tin_raw',
    'minecraft:tin_ingot_from_smelting_tin_raw',
    'minecraft:tin_ingot_from_smelting_tin_ore',
    'minecraft:tin_ingot_from_smelting_deepslate_tin_ore',
    'railcraft:lead_ingot_from_lead_nugget',
    'railcraft:lead_ingot',
    'railcraft:lead_nugget',
    'railcraft:lead_block_from_lead_ingot',
    'minecraft:lead_ingot_from_blasting_lead_ore',
    'minecraft:lead_ingot_from_blasting_deepslate_lead_ore',
    'minecraft:lead_ingot_from_blasting_lead_raw',
    'minecraft:lead_ingot_from_smelting_lead_raw',
    'minecraft:lead_ingot_from_smelting_lead_ore',
    'minecraft:lead_ingot_from_smelting_deepslate_lead_ore'

]

ServerEvents.recipes((event) => {
    //Removing Recipes
    recipes_to_remove.forEach(recipe => {
        event.remove({ id: recipe })
    });

    unificationRemovals.forEach(recipe => {
        event.remove({ id: recipe })
    });
});