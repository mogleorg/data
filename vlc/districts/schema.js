db.runCommand({
  collMod: "vlc.districts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "loc", "geometry", "wikipedia"],
      properties: {
        _id: {
          description: "Official district code.",
          bsonType: "int",
        },
        name: {
          description: "District name in several languages.",
          bsonType: "object",
          required: ["vlca", "es"],
          properties: {
            vlca: {
              bsonType: "string",
            },
            es: {
              bsonType: "string",
            },
          },
        },
        loc: {
          description: "District location.",
          bsonType: "object",
          required: ["type", "coordinates"],
          properties: {
            type: {
              enum: ["Point"],
            },
            coordinates: {
              bsonType: "array",
              items: {
                bsonType: "double",
              },
              minItems: 2,
              maxItems: 2,
            },
          },
        },
        geometry: {
          description: "District geometry.",
          bsonType: "object",
        },
        wikipedia: {
          description: "Wikipedia pages in several languages.",
          bsonType: "object",
        },
      },
    },
  },
})
