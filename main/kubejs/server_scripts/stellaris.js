ServerEvents.recipes((event) => {
    event.replaceInput(
        { output: 'stellaris:vertical_mercury_slab' }, // Arg 1: the filter
        'stellaris:mars_stone',            // Arg 2: the item to replace
        'stellaris:mercury_stone'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
    event.replaceInput(
        { id: 'stellaris:misc/venus_sandstone_bricks' }, // Arg 1: the filter
        'stellaris:venus_sandstone',            // Arg 2: the item to replace
        'stellaris:venus_stone_bricks'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    //Reworking Rocket Fin Recipe
    event.remove({ id: "stellaris:misc/rocket_fin" })
    event.shaped('stellaris:rocket_fin', 
        ['   ', 
        'PPP', 
        'P P'
        ], 
        {
        P: '#c:plates/steel',
        }
    ).id('dw20:rocket_fins')

    //Replacing Stellaris Steel with Meka Steel in some recipes
    let recipeNames = [
        "stellaris:armor/jet_suit_helmet",
        "stellaris:armor/jet_suit_chestplate",
        "stellaris:armor/jet_suit_leggings",
        "stellaris:armor/jet_suit_boots",
        "stellaris:misc/oxygen_tank",
        "stellaris:misc/big_oxygen_tank",
        "stellaris:misc/engine_fan",
        "stellaris:misc/flag",
        "stellaris:misc/rocket_engine",
        "stellaris:misc/rocket_nose_cone",
        "stellaris:misc/rocket_launch_pad",
        "stellaris:misc/coal_generator",
        "stellaris:misc/water_separator",
        "stellaris:misc/radioactive_generator",
        "stellaris:misc/vacuumator",
        "stellaris:misc/fuel_refinery",
        "stellaris:misc/solar_panel"
    ]
    //Replacing Ingots
    recipeNames.forEach(recipeID => {
        event.replaceInput(
            { id: recipeID },
            'stellaris:steel_ingot',
            '#c:ingots/steel'
        )
    });
    //Replacing Nuggets
    recipeNames.forEach(recipeID => {
        event.replaceInput(
            { id: recipeID },
            'stellaris:steel_nugget',
            '#c:nuggets/steel'
        )
    });
    //Replacing Blocks
    recipeNames.forEach(recipeID => {
        event.replaceInput(
            { id: recipeID },
            'stellaris:steel_block',
            '#c:storage_blocks/steel'
        )
    });

    //Adding a Stonecutting Recipe to convert Meka's Steel blocks into Stellaris Steel Blocks
    event.stonecutting('stellaris:steel_block', '#c:storage_blocks/steel')

    // PneumaticCraft Crude Oil to fuel
    event.custom({
        "type": "stellaris:fuel_refinery",
        "isFluidMB": true,
        "energy": 10,
        "ingredient": {
            "fluid": "pneumaticcraft:oil",
            "id": "pneumaticcraft:oil",
            "amount": 1
        },
        "result": {
            "fluid": "stellaris:fuel",
            "id": "stellaris:fuel",
            "amount": 1
        }
    });

});