var arr = [1,2,3];

for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}

for(var i in arr){
  console.log(i);
}
for(var num of arr){
  console.log(num);
}

// var n=0;
// var b = true;
// var s = "abc";
// var a = [];
// var o = {};
// var f = function(){};
// var z = null;
// var u = undefined;

// 연관 배열
var player = {
  hp:3,
  name:"noname"
}
console.log(typeof(f));
console.log(player.name);
console.log(player.hp);
player.skill = "Breathe";
console.log(player["name"]);
console.log(player["hp"]);
delete player.skill;
console.log(player.skill);

//함수


function add(a,b){
  if(typeof(a) != 'number')
    return;
  return a+b;
}

console.log(add("1","2"));
console.log(1 == '1');
console.log(1 === '1');

var a = 0;//변수
let b = 0;//변수
const c = 1;//상수

num2 = 1;
num3 = 2;
