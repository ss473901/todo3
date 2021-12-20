let enemy = 10; 

while(true){ 
  command = prompt('敵が現れた【1】攻撃【2】逃げる');
  random = Math.floor(Math.random() * 10);

  if(command === '1'){
    enemy = enemy - random;
    console.log('敵に' + random + 'の攻撃！');

    if(enemy <= 0){
      console.log('敵を倒した')
      break;
    }
  }

  if(command === '2'){
    console.log('うまく逃げられた');
    break;
  }

}

console.log('戦闘終了');