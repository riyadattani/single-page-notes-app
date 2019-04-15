function testCreateListArrayWithOneNote () {
  var note = new Note('Note 1');
  var list = new NoteList();
  list.add(note);

  assert.isTrue(list.listArray.includes(note));
  
};

function testCreateListArrayWithTwoNotes () {
  var note2 = new Note('Buy Eggs');
  var note3 = new Note('Test note');
  var errorNote = new Note('Error');
  var list2 = new NoteList();
  list2.add(note2);
  list2.add(note3);

  assert.isTrue(list2.listArray.includes(note2));
  assert.isTrue(list2.listArray.includes(note3));
};

testCreateListArrayWithOneNote();
testCreateListArrayWithTwoNotes();