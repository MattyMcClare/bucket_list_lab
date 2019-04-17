const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = 'http://localhost:3000/api/list-items';
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-item-submitted', (evt) => {
    this.postListItem(evt.detail);
  });
}

BucketList.prototype.getData = function () {
  this.request.get()
    .then((list_items) => {
      PubSub.publish('BucketList:data-loaded', list_items);
    })
    .catch(console.error);
};

BucketList.prototype.postListItem = function (listItem) {
  this.request.post(listItem)
    .then((listItem) => {
      PubSub.publish('BucketList:data-loaded', listItem);
    })
    .catch(console.error);
};

module.exports = BucketList;
