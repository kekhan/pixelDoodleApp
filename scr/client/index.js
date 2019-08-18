const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isDrawing = false;
let isErase = false;
let brushColor = '';
let x = 0;
let y = 0;
const rect = canvas.getBoundingClientRect();
let brushSize = 5;

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
    if(e.clientX > 100 & e.clientY> 100){
        drawingImg(x,y, e.clientX, e.clientY);
    }
    
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
    context.strokeStyle = brushColor;

});

function drawingImg(x1, y1, x2, y2){
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(x1,y1);
    context.arc(x1,y1, brushSize, 0, 2*Math.PI, true);
    context.closePath();
    context.fillStyle = brushColor; 
    context.fill( );
}
function erase(x,y){
    if(isErase && isDrawing){
        context.rect(100,100,x,y);
        brushColor = 'white';
    }
}

function changeColor (btn) {
    
    color = btn.id;
    brushColor= color;
};

function changeBrushSize(btn){
    console.log(btn.id);
    size = btn.id;
    if(size == "smallBrush"){
        brushSize = 5;
    }
    else if (size == "mediumBrush") {
        brushSize = 10;
        
    } 
    else if (size == "bigBrush") {
        brushSize = 15;        
    }

}