function testViewModelInstantiation () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');
  noteslist.add('Bacon');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.listModel.listArray[0].text === 'Buy Eggs');
}

function testViewModelReturnsHtmlForANote () {
  var noteslist = new NoteList();
  noteslist.add('Shopping List: Eggs, Bacon, Sausages, Bread, Milk, Teabags, Toilet Paper');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul><li>Shopping List: Eggs,...</li></ul>");
}

function testViewModelReturnsHtmlForSeveralNotes () {
  var noteslist = new NoteList();
  noteslist.add('Shopping List: Eggs, Bacon, Sausages, Bread, Milk, Teabags, Toilet Paper');
  noteslist.add('The Rebellion: Arthur, Kim, Cosmin, James D, Riya');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul><li>Shopping List: Eggs,...</li><li>The Rebellion: Arthu...</li></ul>");
}

function testViewModelReturnsHtmlNoNotes () {
  var noteslist = new NoteList();

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul></ul>");
}

testViewModelInstantiation();
testViewModelReturnsHtmlForANote();
testViewModelReturnsHtmlForSeveralNotes();
testViewModelReturnsHtmlNoNotes();