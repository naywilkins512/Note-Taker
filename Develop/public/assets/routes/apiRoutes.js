
var fs = require("fs");
var notes = require("../../../db/db.json");



module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    fs.readFile(notes, "utf8")
    res.JSON(notes);
  });

  app.post("/api/notes", function(req, res) {
    notes.push(req.body);
    fs.writeFile(notes, JSON.stringify(notes), "utf8")
    res.JSON(true);
  });
}

// app.delete("api/notes/:id", function (req, res) {
//   let noteid = req.params.id;

// })