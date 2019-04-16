function testThingIsNoteControllerObject() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController instanceof NoteController)
};
testThingIsNoteControllerObject();

function testControllerRendersNotesList() {
  var noteList = new NoteList
  noteList.add("test note")

  var noteController = new NoteController(noteList)
  var newHtml = noteController.renderHtml()
  assert.isTrue(newHtml === "<ul><li>test note</li></ul>")
};
testControllerRendersNotesList();
