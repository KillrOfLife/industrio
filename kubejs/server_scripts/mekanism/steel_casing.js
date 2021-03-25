onEvent('recipes', event => {
  event.custom(
    {
      "type": "bloodmagic:altar",
      "input": {
        "tag": "thermal:machine_frame"
      },
      "output": {
        "item": "mekanism:steel_casing"
      },
      "upgradeLevel": 1,
      "altarSyphon": 5000,
      "consumptionRate": 5,
      "drainRate": 5
    }
)
})
