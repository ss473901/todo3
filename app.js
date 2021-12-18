const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

//動画 1:06:09~説明     1:10:30~コード記述
//打ち消し線を付けてもリロードをしたら元に戻ってしまう
//打ち消し線を、完了状態というデータとして保存できるようにする
//完了状態をオブジェクトという状態で保存する
//オブジェクトとは名前と値がついになったものの集合
//例：ユーザー{名前:山田、年齢:33}
// let user = {
//   name:"yamada"
//   age: 33,
// }

if(todos){
  todos.forEach(todo =>{
    add(todo);
  });
}

form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(input.value);
  add();
});

function add(todo){
 let todoText = input.value;
if(todo){
  todoText = todo;
}

 if(todoText){
   const li = document.createElement("li");
   li.innerText = todoText;
   li.classList.add("list-group-item");

  //右クリックをしたら削除されるイベント
    li.addEventListener("contextmenu", function(event){
      event.preventDefault();
      li.remove();
      saveDate();
    });
  //

  //クリックしたら打ち消し線を付ける
    li.addEventListener("click", function(){
      li.classList.toggle("text-decoration-line-through");　
    });
  //
   ul.appendChild(li);
   input.value = "";
   saveDate();
 }
}
function saveDate(){
  const lists = document.querySelectorAll("li");
  console.log(lists);
  let todos = [];

  //テキストの状態で保存することして設定していなかったので、ここに完了状態の保存も追加
  lists.forEach(list => {
    let todo = {
      text: list.innerText,   //テキスト情報を保存
      completed: //完了状態("text-deco・・・"というCSSを持っていたら true,持っていなかったら false)
    }
     todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
