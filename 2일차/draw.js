const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let Drag = false;
// context.font = '50px Arial';
// context.strokeStyle = 'red';
// context.textBaseline = 'alphabetic';
// context.strokeText('Hello, World',10 ,70);

const image = new Image();
image.src = 'sejeong.jpg';
let relativePos = {x: 0, y: 0};
let x = 0;
let y = 0;


image.addEventListener('load', function(){
  console.log(arguments);//arguments모든 함수에 들어있음
    context.drawImage(image,x,y);//0, 0, 200=x좌표 ,200=y좌표까지
});
//방법 1 단순한 방법
// window.addEventListener('keydown',function(event){
//   console.log(event);
//   context.fillStyle = 'white';
//   context.fillRect(0,0,canvas.width, canvas.height);
//     switch (event.code) {
//       case 'ArrowRight':
//         x+=10;
//         break;
//       case 'ArrowLeft':
//         x-=10;
//         break;
//       case 'ArrowUp':
//         y-=10;
//         break;
//       case 'ArrowDown':
//         y+=10;
//         break;
//       default:
//
//     }
//       context.drawImage(image,x,y);
// });


//방법3 마우스 드래그
function getMousePosition(event){
  const rect = canvas.getBoundingClientRect();
  return {
    x:event.clientX - rect.left,
    y:event.clientY - rect.top
  }
}


window.addEventListener('mousedown', function(event){

  console.log(getMousePosition(event));
  let pos = getMousePosition(event);
  if(pos.x > x && pos.x < x+image.width && pos.y > y && pos.y < y+image.height){
    Drag = true;
      relativePos.x = pos.x - x;
      relativePos.y = pos.y - y;
    }
});
window.addEventListener('mousemove', function(event){

  if(Drag){
  let pos = getMousePosition(event);
  x = pos.x - relativePos.x;
  y = pos.y - relativePos.y;
  console.log("Asdf");
  }
});
window.addEventListener('mouseup', function(event){
Drag = false;
});
//방법 2 키보드 이벤트 + 객체 사용
let downKeys = {};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
// window.addEventListener('keydown',);
// window.addEventListener('keydown',);

function onKeyDown(event){
  downKeys[event.code] = true;
}

function onKeyUp(event){
  downKeys[event.code] = false;
}

window.requestAnimationFrame(run);

function run(){
  context.fillStyle = 'white';
  context.fillRect(0,0,canvas.width , canvas.height);

  context.drawImage(image, x,y);



  if(downKeys['ArrowLeft'])
  x-=10;
  else if (downKeys['ArrowRight'])
  x+=10;
  else if(downKeys['ArrowUp'])
  y-=10;
  else if (downKeys['ArrowDown'])
  y+=10;

  window.requestAnimationFrame(run);
  }



    //   context.fillRect(0,0,canvas.width , canvas.height);
    //   context.drawImage(image,event.clientX,y);
    // if(x==pos.x && y==pos.y){
    // if(pos.x >= x){
    //   x=event.clientX;
    // }else if(pos.x <= x){
    //   x=event.clientX;
    // }else if(pos.y >= y){
    //   y=event.clientY;
    // }else if(pos.y <= y){
    //   y=event.clientY;
    //   }
    //}
    // window.requestAnimationFrame(run);

  //})
