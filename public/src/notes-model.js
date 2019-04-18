(function(exports){
  var counter = 0
  function Note (text){
    this.text = text
    this.id = counter
    counter += 1
  }

  Note.prototype.print = function(){
    return this.text;
  }
  
  exports.Note = Note;
})(this);