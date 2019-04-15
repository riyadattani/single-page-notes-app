(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHTML = function () {
    var html = "";
    this.listModel.listArray.forEach(function(note){
      html += "<ul><li>" + note.text + "</li></ul>"
    });
    return html
  }

  exports.ListView = ListView
}) (this);