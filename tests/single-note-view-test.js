function instantiateANoteView() {
  var noteView = new NoteView;
  assert.isTrue(noteView instanceof NoteView);
};

instantiateANoteView();

function noteViewTakesANote() {

  function NoteDouble(text) {
    this.text = text
  };

  var noteDouble = new NoteDouble("Kim has mocked me!")
  var noteView = new NoteView(noteDouble)
  
  assert.isTrue(noteView.note.text === "Kim has mocked me!")
};

noteViewTakesANote();

function testNoteViewReturnsHtmlForaNote() {

  function NoteDouble(text) {
    this.text = text
  };

  var noteDouble = new NoteDouble("Arthur has mocked me!")
  var noteView = new NoteView(noteDouble);

  assert.isTrue(noteView.returnHtml() === "<div>Arthur has mocked me!</div>");
}

testNoteViewReturnsHtmlForaNote();