db.runCommand({
  collMod: "vlc.neighborhoods",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "dist", "nbrhood", "loc", "geometry"],
      properties: {
        _id: {
          description: "Neighborhood code.",
          bsonType: "string",
        },
        name: {
          description: "Neighborhood name in several languages.",
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
        dist: {
          description: "District code where the neighborhood is.",
          bsonType: "int",
        },
        nbrhood: {
          description: "Neighborhood code in its district.",
          bsonType: "int",
        },
        loc: {
          description: "Neighborhood location.",
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
          description: "Neighborhood geometry.",
          bsonType: "object",
          required: ["type", "coordinates"],
          properties: {
            type: {
              enum: ["Polygon"],
            },
            coordinates: {
              bsonType: "array",
            },
          },
        },
      },
    },
  },
})
