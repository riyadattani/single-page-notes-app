(function(exports){
  function NoteList () {
    this.listArray = [];
  };

  NoteList.prototype.add = function(text) {
    var note = new Note(text);
    this.listArray.push(note);
  };

  NoteList.prototype.returnList = function() {
    return this.listArray
  };

  exports.NoteList = NoteList;
})(this);
