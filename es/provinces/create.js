db.createCollection("es.provinces")

db.es.provinces.createIndex({ "name.es": 1 }, { name: "uq_name.es", unique: true })
db.es.provinces.createIndex({ "name.$**": 1 }, { name: "name.*" })
db.es.provinces.createIndex({ ac: 1 }, { name: "ac" })
