const PubSub = require('../helpers/pub_sub.js');

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newListItem = this.createListItem(evt.target);
  PubSub.publish('FormView:new-item-submitted', newListItem);
  evt.target.reset();
};

FormView.prototype.createListItem = function (form) {
  const newListItem = {
    goal: `${form.typeselect.value} ${form.userinput.value}`
  };
  return newListItem;
};

module.exports = FormView;
