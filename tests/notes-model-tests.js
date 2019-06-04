
function testCreateNoteWithText(){
  var note = new Note('My favourite language is Javascript');

  assert.isTrue(note.text === "My favourite language is Javascript");
};

function testReturnTextContent(){
  var note = new Note('My favourite language is Javascript');

  assert.isTrue(note.print() === "My favourite language is Javascript");
};

function testCreatesNoteWithId(){
  
  var note = new Note('My favourite language is Javascript');
  var note2 = new Note('My favourite language is not Javascript');
  assert.isTrue(note.id === 0);
  assert.isTrue(note2.id === 1);
};

testCreatesNoteWithId();
testCreateNoteWithText();
testReturnTextContent();
