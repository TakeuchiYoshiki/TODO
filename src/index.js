import "./styles.css";
const onClickAdd = () => {
  //入力エリアに入力された値を取得し、変数に格納
  const inputText = document.getElementById("add-text").value;

  //入力エリアの文字を初期化
  document.getElementById("add-text").value = "";

  //createElement（）でdivを生成
  const div = document.createElement("div");

  //生成した  divに.classNameでクラスを設定
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");

  //.innerTextで入力値をliタグに設定
  li.innerText = inputText;

  //.appendChildでdivタグ内にliタグを設定
  div.appendChild(li);

  //ulタグ内に作成したdivを設定
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  //HTML上の"add-button"が設定された要素を取得
  .getElementById("add-button")
  //クリックされた場合、onClickAdd()関数を実行する
  .addEventListener("click", () => onClickAdd());
