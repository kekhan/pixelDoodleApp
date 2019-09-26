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
let x_array = [];
let y_array = []
let startingX = 0;
let endingX = 0;
let startingY = 0;
let endingY = 0;
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
    startingX = x;
    startingY = y;
    if(e.clientX > 100 & e.clientY> 100){
        drawingImg(x,y, e.clientX, e.clientY);
    }
    
});
window.addEventListener('mouseup', function event(e){
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
    endingX = x;
    endingY = y;
    isDrawing = false;
});

window.addEventListener('keydown', function event(e){
    x = e.clientX;
    y = e.clientY;
    isErase = true;
    if(e.keyCode == 69){
        

    }
});
window.addEventListener('keyup', function event(e){
    isErase = false;
    context.strokeStyle = brushColor;

});

const drawingImg = (x1, y1, x2, y2) => {
    context.fillStyle = "black";
    x_array.push(x);
    y_array.push(y);
    context.beginPath();
    context.moveTo(x1,y1);
    context.arc(x1,y1, brushSize, 30, 2*Math.PI, true);
    context.closePath();
    context.fillStyle = brushColor; 
    context.fill( );
    
    
}
const erase = (x,y) => {
    if(isErase && isDrawing){
        brushColor = 'white';
    }
}

const changeColor = (btn) => {
    
    color = btn.id;
    brushColor = color;
};

const changeBrushSize = (btn) => {
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
const undo = (x,y) => {
    // erases the last mouse down to mouse up strokes
    /*need to find current xy coordinates and prevoius xy coordinataes*/
    let undoX = -(endingX - startingX);
    let undoY = -(endingY - startingY);
    context.beginPath();

    context.moveTo(startingX,startingY);
    context.lineTo(endingX,endingY);
    context.strokeStyle = "white";
    context.stroke();
    context.lineWidth = 50;
    console.log("UNDO")
}

const share = () => {
    /* user can shere image on social media via facebook, instagram, twitter */
    // convert into png 
    // if a social media button is pressed, call social media site and upload image 
    let urlId = image.src;
    // using fetch to post the image
    let data = {img: urlId};
    const url =  'https://upload.twitter.com/1.1/media/upload.json';
    fetch(url, {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(data),    
    }).then(res => res.json())
    .then( response => console.log('succcess', JSON.stringify(response)))
    .catch( error => console.log('error', error))
}
const save = () => {
    // saves the image as a url into database
    convertToPng();
    savedImages.push(image.src);
    console.log(savedImages);
}
const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const convertToPng = () => {
    // converts the canvas element into a png image
    let imageUrl = canvas.toDataURL("image/png");
    image.src = imageUrl;
    
}
const login = () => {
    // logs in existing user

}
const signup = () => {
    // creates an account for new user.

}
console.log(x_array);