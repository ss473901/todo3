//削除イベントまで　



const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));


if(todos){  //localStorageがある時だけこの処理が行われる
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
if(todo){ //もしlocalStorageにtodoがあった場合は
  todoText = todo;
}

 if(todoText){
   const li = document.createElement("li");   //値が入力された時だけ、liタグを生成していく
   li.innerText = todoText;
   li.classList.add("list-group-item");
   ul.appendChild(li);
   input.value = "";
   saveDate();
 }
}
function saveDate(){
  const lists = document.querySelectorAll("li");
  console.log(lists);
  let todos = [];
  lists.forEach(list => {     //変数「list」にforEachで「lists(画面上のliの情報全て)」の情報を繰り返し入れていく
     todos.push(list.innerText);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
