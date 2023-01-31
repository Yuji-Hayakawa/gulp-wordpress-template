module.exports = {
  mode: "production", // どちらかを選択。productionではminifyされ、developmentではソースマップが付く
  entry: "./src/js/main.js", // 入力先（エントリーポイント）を記述
  output: {
    filename: "bundle.js" // 出力するファイルの名前を記述
  }
}