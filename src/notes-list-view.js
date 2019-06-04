(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHtml = function () {
    var html = ""
    this.listModel.returnList().forEach(function(note){
      html += "<a href='#notes/"+note.id+"'>"+note.text.substring(0, 20) 
      if (note.text.length > 20) {
        html += "..."
      } 
      html += "</a><br>"
    });
    return html
  }

  exports.ListView = ListView
}) (this);


