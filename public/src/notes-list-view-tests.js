function testViewModelInstantiation () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');
  noteslist.add('Bacon');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.listModel.listArray[0].text === 'Buy Eggs');
}

function testViewModelReturnsHTML () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHTML() === "<ul><li>Buy Eggs</li></ul>");
}

testViewModelInstantiation();
testViewModelReturnsHTML();