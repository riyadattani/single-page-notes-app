(function(exports){
  class Note {
      constructor(text) {
        this.text = text;
      }
      print() {
        return this.text;
      }

    };

  exports.Note = Note;
})(this);