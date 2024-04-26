db.createCollection("vlc.neighborhoods")

db.vlc.neighborhoods.createIndex({ dist: 1, nbrhood: 1 }, { name: "uq_dist_nbrhood", unique: true })
db.vlc.neighborhoods.createIndex({ "name.$**": 1 }, { name: "name.*" })
db.vlc.neighborhoods.createIndex({ loc: "2dsphere" }, { name: "loc" })
db.vlc.neighborhoods.createIndex({ geometry: "2dsphere" }, { name: "geometry" })
