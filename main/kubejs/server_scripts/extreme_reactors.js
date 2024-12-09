ServerEvents.recipes((event) => {

    //Replacing Yellorium for Uranium in Recipes that don't have this by default.
    let yellorium_recipe_ids = [
        "bigreactors:fluidizer/casing",
        "bigreactors:fluidizer/controller",
        "bigreactors:fluidizer/solidinjector"
    ];

    yellorium_recipe_ids.forEach(recipe => {
        event.replaceInput(
            { id: recipe },
            "bigreactors:yellorium_ingot",
            "#c:ingots/uranium"
          );
    });


});