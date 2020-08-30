const database = [
  { id: 1, name: "drawing1", link: "https://www.instagram.com/p/BnqcNP6AzBy/" },
  { id: 2, name: "drawing2", link: "https://www.instagram.com/p/B9tsp-7pux-/" },
  { id: 3, name: "drawing3", link: "https://www.instagram.com/p/BnTgH2wAwfL/" },
  { id: 4, name: "drawing4", link: "https://www.instagram.com/p/CBS18S0Jw6q/" },
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
