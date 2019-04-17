const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.render = function (list_item) {
  const listViewContainer = document.createElement('div');
  const goal = this.createBox(list_item.goal);
  listViewContainer.appendChild(goal)

  this.container.appendChild(listViewContainer);
};

ListView.prototype.createBox = function (textContent) {
  const box = document.createElement('h4');
  box.textContent = textContent;
  return box;
}

module.exports = ListView;
