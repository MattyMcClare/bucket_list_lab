const PubSub = require('../helpers/pub_sub.js');
const ListView = require('./list_view.js');

const ListGridView = function (container) {
  this.container = container;
};

ListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    console.log('data-loaded',evt.detail);
    this.render(evt.detail);
  });
};

ListGridView.prototype.render = function (list_items) {
  this.container.innerHTML = '';
  const listView = new ListView(this.container);
  list_items.forEach((item) => listView.render(item));
};

module.exports = ListGridView;
