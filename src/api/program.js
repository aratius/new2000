const intro1 =
  "今年から授業の大半がzoom授業に変わりました。いうまでもなくコロナウイルスの影響ですが、オンライン授業に喜ぶ人がいる一方で、僕はというと毎朝全然起きれていませんでした。そこで制作したのがAutomatic zoom attender（自動zoom授業参加アプリ）です。前日の夜にURLを設定するだけで翌日の授業に自動参加してくれるので、今度からは毎朝ゆっくり起きられそうです。リンク";

const intro2 =
  "TouchDesignerを用いて映像と動きがシンクロした作品を作ってみました。制作時間はわずか30分ほどしかかかっておらず、まだまだ改善の余地がありそうです。";

const intro3 =
  "leap motionセンサの値によって画面内のパーティクルが手から手へと移動していく作品です。まだ動作確認の段階ではありますが、ここから何か面白い作品を作りたいと考えています。";

const intro4 =
  "北陽株式会社様の測域センサを用いてテストを行いました。値はTouchdesignerで取り出し、Pythonでスクリーン上の座標と一致させる処理を書きました。";

const database = [
  {
    id: 1,
    nameToShow: "Automatic zoom attender",
    name: "zoomattender",
    introduce: intro1,
    link: true,
  },
  {
    id: 2,
    nameToShow: "Boss battle",
    name: "battle",
    introduce: intro2,
  },
  {
    id: 3,
    nameToShow: "Hand power",
    name: "leap",
    introduce: intro3,
  },
  {
    id: 4,
    nameToShow: "Birds",
    name: "hokuyo",
    introduce: intro4,
  },
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
