(function(exports){
  function NoteList () {
    this.listArray = [];
  };
NoteList.prototype.add = function(note) {
  this.listArray.push(note);
};

  exports.NoteList = NoteList;
})(this);