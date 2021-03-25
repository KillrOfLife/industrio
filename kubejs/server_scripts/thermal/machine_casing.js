onEvent('recipes', event => {
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
    	{"tag": "forge:storage_blocks/steel"}
      ],
      "energy": 20000000,
      "result": {
    	"item": "thermal:machine_frame",
    	"count": 1
      }
    }
)
})
