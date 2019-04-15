(function(exports) {
  function testCreateNoteWithText(){
    var note = new Note('My favourite language is Javascript');

    if(note.text !== 'My favourite language is Javascript'){
      throw new Error('This text is wrong');
    } else {
      console.log('test passed');
    }

  };

  testCreateNoteWithText();
})(this);