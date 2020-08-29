const database = [
  { id: 1, name: "drawing1", introduce: "hello1" },
  { id: 2, name: "drawing2", introduce: "hello2" },
  { id: 3, name: "drawing3", introduce: "hello3" },
  { id: 4, name: "drawing4", introduce: "hello4" },
  { id: 5, name: "drawing5", introduce: "hello5" },
];

export default {
  find_all() {
    return database;
  },
  find(id) {
    return database.find((el) => el.id == id);
  },
  //パッケージ入れな動かん
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(
        database.find((el) => {
          el.id == id;
          console.log(el.id == id);
        })
      );
    });
  },
};
