function testThingIsNoteControllerObject() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController instanceof NoteController)
};
testThingIsNoteControllerObject();

function testControllerRendersNotesList() {
  
  function NoteDouble(text) {
    this.text = text
  };
  var note = new NoteDouble("test note")

  function NoteListDouble() {};
  NoteListDouble.prototype = {
    add: function(notetext) {},
    returnList: function() { return [note]}
  }
 
 
  var noteList = new NoteListDouble
  noteList.add(note.text)

  var noteController = new NoteController(noteList)
  var newHtml = noteController.renderHtml()
  assert.isTrue(newHtml === "<ul><li>test note</li></ul>")
};
testControllerRendersNotesList();

// THIS PRINTS TO THE PAGE WHEN RUN
// Need to double 'document' and give paramenter ot innerhtml to fake renderHtml and not show on screen!!
