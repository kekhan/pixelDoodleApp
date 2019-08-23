const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
context.fillStyle = "blue";
context.fillRect(0, 0, canvas.width, canvas.height);
canvas.height = window.innerHeight;
let isDrawing = false;
let isErase = false;
let brushColor = '';
let x = 0;
let y = 0;
let image = new Image();
const rect = canvas.getBoundingClientRect();
let brushSize = 1;
let savedImages = [];
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
        undo(x,y);

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
    context.arc(x1,y1, brushSize, 30, 2*Math.PI, true);
    context.closePath();
    context.fillStyle = brushColor; 
    context.fill( );
    
    
}
function erase(x,y){
    if(isErase && isDrawing){
        brushColor = 'white';
    }
}

function changeColor (btn) {
    
    color = btn.id;
    brushColor = color;
};

function changeBrushSize(btn){
    console.log(btn.id);
    size = btn.id;
    if(size == "smallBrush"){
        brushSize = 5;
    }
    else if(size == "pencil"){
        brushSize = 1;
    }
    else if (size == "mediumBrush") {
        brushSize = 10;
        
    } 
    else if (size == "bigBrush") {
        brushSize = 15;        
    }

}
var  undo = (x,y) => {
    // erases the last mouse down to mouse up strokes
    /*need to find current xy coordinates and prevoius xy coordinataes*/

    context.moveTo(x, y);
    context.lineTo(x-100,y-100);
    context.fillStyle = "white";
    context.stroke();
    console.log("UNDO")
}

function share(){
    /* user can shere image on social media via facebook, instagram, twitter */
    // convert into png 
    // if a social media button is pressed, call social media site and upload image 
    let urlId = image.src;
    // using fetch to post the image
    let data = {img: urlId};
    const url =  'https://upload.twitter.com/1.1/media/upload.json?command=FINALIZE&media_id=1164410781405868032';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        
        
    }).then(res => res.json())
    .then( response => console.log('succcess', JSON.stringify(response)))
    
    .catch( error => console.log('error', error))

}
var save = () => {
    // saves the image as a url into database
    convertToPng();
    savedImages.push(image.src);
    console.log(savedImages);
}
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function convertToPng(){
    // converts the canvas element into a png image
    let imageUrl = canvas.toDataURL("image/png");
    image.src = imageUrl;
    
}
function login(){
    // logs in existing user

}
function signup(){
    // creates an account for new user.

}
