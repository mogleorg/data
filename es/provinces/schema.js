db.runCommand({
  collMod: "es.provinces",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "ac", "wikipedia"],
      additionalProperties: false,
      properties: {
        _id: {
          description: "Province code.",
          bsonType: "int",
          minimum: 1,
          maximum: 52,
        },
        name: {
          description: "Province name in several languages.",
          bsonType: "object",
          required: ["es"],
          properties: {
            es: { bsonType: "string" },
          },
        },
        ac: {
          description: "Autonomous community code/id.",
          bsonType: "int",
        },
        wikipedia: {
          description: "Wikipedia page names in several languages.",
          bsonType: "object",
        },
      },
    },
  },
})
