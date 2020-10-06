
var fs = require("fs");
var notes = require("../../../Develop/db/db.json");
const { v4: uuidv4 } = require('uuid');
let path = require("path");
const { json } = require("body-parser");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    let newNote = {
      id : uuidv4(),
      title : req.body.title,
      text: req.body.text
    }
    notes.push(newNote);
    console.log(newNote)
    return newNote;
    
  });


app.delete("/api/notes/:id", function (req, res) {
  let noteid = req.params.id;

  for (let i = 0; i < notes.length; i++) {
    if (noteid === notes[i].id) {
      notes.splice(i, 1);
      return notes;
    }
  }

})
};

