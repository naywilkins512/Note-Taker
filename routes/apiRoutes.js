
var fs = require("fs");
var notes = require("../db/db.json");
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
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
      if (err) throw err;
      return res.json(newNote);
    })
    
    
  });


app.delete("/api/notes/:id", function (req, res) {
  let noteid = req.params.id;

  for (let i = 0; i < notes.length; i++) {
    if (noteid === notes[i].id) {
      notes.splice(i, 1);
      fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
        if (err) throw err;
        return res.json(notes);
      })  
    }
  }

})
};

