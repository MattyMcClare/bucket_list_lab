const FormView = require('./views/form_view.js');
const GridView = require('./views/list_grid_view.js');
const BucketList = require('./models/bucket_list.js');



document.addEventListener('DOMContentLoaded', () => {
const bucketListForm = document.querySelector('#form');
const bucketListFormView = new FormView(bucketListForm);
bucketListFormView.bindEvents();

const listContainer = document.querySelector('#listwrapper');
const gridView = new GridView(listContainer);
gridView.bindEvents();


const bucketList = new BucketList();
bucketList.bindEvents();
bucketList.getData();

});
