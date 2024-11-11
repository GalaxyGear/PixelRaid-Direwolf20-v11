ServerEvents.recipes((event) => {
    event
    .shaped("comforts:sleeping_bag_black", ["BBB", "B B", "BBB"], {
      B: "handcrafted:black_sheet"
    })
    .id("ftb:sleeping_bag_black");

    event.shaped("laserbridges:laser_source_block", ["GGG", "GDG", "GEG"], {
      G: "minecraft:stone",
      E: "minecraft:lapis_lazuli",
      D: "minecraft:redstone"
    }).id("ftb:laser_source_block");
    
});