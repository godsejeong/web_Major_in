const canvas = document.getElementById('panel');
const context = canvas.getContext('2d');



function GameObject(src, width, height){
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.image = new Image();
  this.image.src = src;
  this.alpha =1;
  this.isObstacle =false;
}

const player = new GameObject('sejeong.jpg',50,50);

const objectArray = [];

objectArray.push(player);


//1초마다 한번씩 실행
setInterval(function(){
  const newObstacle = new GameObject('sejeong.jpg',60 ,60)
  objectArray.push(newObstacle);
  newObstacle.isObstacle = true;


  newObstacle.x = Math.random() * 800;
  newObstacle.y = -newObstacle.height;
},1000);

let downKeys = {};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(event){
  downKeys[event.code] = true;
}

function onKeyUp(event){
  downKeys[event.code] = false;
}

window.requestAnimationFrame(run);
let gameover  = false;
function run(){
  if(gameover) return;
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width , canvas.height);

  for(let obj of objectArray){

    context.globalAlpha = obj.alpha;
    context.drawImage(obj.image,obj.x,obj.y,obj.width,obj.height);


    if(obj === player) continue;
    if(obj.isObstacle)
      obj.y+=2;
    if(checkCollision(player,obj)){
        gameover = true;
    }
  }




  if(downKeys['ArrowLeft'])
  player.x-=10;
  if (downKeys['ArrowRight'])
  player.x+=10;
  if(downKeys['ArrowUp'])
  player.y-=10;
  if (downKeys['ArrowDown'])
  player.y+=10;

window.requestAnimationFrame(run);
}

function checkCollision(a,b){
  return !(a.x > b.x+b.width ||
        a.x+a.width < b.x ||
        a.y > b.y+b.height ||
        a.y+a.height < b.y
  );
  }
