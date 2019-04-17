use bucket_list;
db.dropDatabase();

db.list_items.insertMany([
  {
    goal: "Go to the moon!"
  },
  {
    goal: "Be more adventurous!"
  },
  {
    goal: "Do more for the environment!"
  }
]);
