const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(input.value);
  add();
});

function add(){
 let todoText = input.value;
 if(todoText.length < 0){
   const li = document.createElement("li");   //値が入力された時だけ、liタグを生成していく
   li.innerText = input.value;
   li.classList.add("list-group-item");
   ul.appendChild(li);
   input.value = "";
 }
}
