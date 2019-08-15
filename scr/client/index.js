const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isDrawing = false;
let isErase = false;
let x = 0;
let y = 0;
const rect = canvas.getBoundingClientRect();

window.addEventListener('mousemove',function event(e){
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
    if(isDrawing == true){
        drawingImg(x,y, e.clientX, e.clientY);
    }
});

window.addEventListener('mousedown', function event(e){
    isDrawing = true;
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;

    drawingImg(x,y, e.clientX, e.clientY);
});

window.addEventListener('mouseup', function event(e){
    isDrawing = false;
  
});
window.addEventListener('keydown', function event(e){
    x = e.clientX;
    y = e.clientY;
    isErase = true;
    if(e.keyCode == 69){
        erase(x,y);

    }
});
window.addEventListener('keyup', function event(e){
    isErase = false;
    context.strokeStyle = 'black';

});

function drawingImg(x1, y1, x2, y2){
    context.beginPath();
    context.lineWidth = "15";

    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    

    context.stroke();
    context.closePath(); 
}
function erase(x,y){
    if(isErase && isDrawing){
        context.rect(100,100,x,y);
        context.strokeStyle = 'white';
        context.stroke();
    }
}