db.createCollection("vlc.districts")

db.vlc.districts.createIndex({ "name.$**": 1 }, { name: "name.*" })
db.vlc.districts.createIndex({ loc: "2dsphere" }, { name: "loc" })
db.vlc.districts.createIndex({ geometry: "2dsphere" }, { name: "geometry" })
