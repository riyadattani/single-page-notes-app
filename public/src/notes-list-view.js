(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHTML = function () {
    return "<ul><li>" + this.listModel.listArray[0].text + "</li></ul>"
  }

  exports.ListView = ListView
}) (this);