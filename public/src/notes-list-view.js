(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHtml = function () {
    var html = ""
    this.listModel.returnList().forEach(function(note){
      html += "<a href='#notes/"+note.id+"'>"+note.text.substring(0, 20) + "..." + "</a>"
    });
    return html
  }

  exports.ListView = ListView
}) (this);


