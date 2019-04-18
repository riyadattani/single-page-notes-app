//pre test doubles
function NoteDouble(text) {
  this.text = text;
  this.id = 0
};


function NoteListDouble() {
  this.listArray = [];
};
NoteListDouble.prototype = {
  add: function(notetext) { 
    var noteDouble = new NoteDouble(notetext);
    this.listArray.push(noteDouble);
  },
  returnList: function() { return this.listArray }
}

var noteListDouble = new NoteListDouble
noteListDouble.add("The Rebellion: Arthur, Kim, Cosmin, James D, Riya")

var listView = new ListView(noteListDouble); 

//pre test doubles end

//tests

function testViewModelReturnsHtmlForANote() {

  assert.isTrue(listView.returnHtml() === "<a href='#notes/0'>The Rebellion: Arthu...</a>");
}

function testViewModelReturnsHtmlForSeveralNotes() {
  
  var noteDouble2 = new NoteDouble("Shopping List: Eggs, Bacon, Sausages, Bread, Milk, Teabags, Toilet Paper");
  noteListDouble.add(noteDouble2.text)
  assert.isTrue(listView.returnHtml() === "<a href='#notes/0'>The Rebellion: Arthu...</a><a href='#notes/0'>Shopping List: Eggs,...</a>");
} 

function testNoteHyperlinksToUrlById() {
  assert.isTrue(listView.returnHtml() === "<a href='#notes/0'>The Rebellion: Arthu...</a>");
}

testNoteHyperlinksToUrlById();
testViewModelReturnsHtmlForANote();
testViewModelReturnsHtmlForSeveralNotes();
