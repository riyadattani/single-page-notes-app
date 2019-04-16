
(function(exports) {
  function NoteController(notesList = new NoteList) {
    this.notesList = notesList
    this.notesList.add("Favourite drink: seltzer")
    var listView = new ListView(this.notesList)
    this.html = listView.returnHtml()
  };

  NoteController.prototype.renderHtml = function() {
    return document.getElementById("app").innerHTML = this.html;
  }
  
  var noteController = new NoteController
  noteController.renderHtml()

  exports.NoteController = NoteController;
})(this);