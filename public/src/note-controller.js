(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.listView = new ListView(this.noteList)
    this.html = this.listView.returnHtml()
  };

  NoteController.prototype.renderHtml = function() {
    return document.getElementById("app").innerHTML = this.html;
  };
  
  var noteController = new NoteController(noteList = new NoteList)
  noteController.renderHtml()

  exports.NoteController = NoteController

})(this);