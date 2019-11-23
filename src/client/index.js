const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
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
let y_array = [];
let old_x_array = [];
let old_y_array = [];
let startingX = 0;
let endingX = 0;
let startingY = 0;
let endingY = 0;
let undo = false;
let list = document.createElement("ul");

window.addEventListener('mousemove',function event(e){
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
    if(isDrawing == true){
        drawingDoodle(x,y, e.clientX, e.clientY);
    }
});

window.addEventListener('mousedown', function event(e){
    x_array = [];
    y_array = [];
    isDrawing = true;
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
    startingX = x;
    startingY = y;

    if(e.clientX > 150 & e.clientY> 100){
        drawingDoodle(x,y, e.clientX, e.clientY);
    }
    
});
window.addEventListener('mouseup', function event(e){
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
    endingX = x;
    endingY = y;
    isDrawing = false;
    this.console.log("OLD", old_x_array);
  
  
    

});
window.addEventListener('click', function event(e){
    this.console.log(e.path[0].id);
    let id = e.path[0].id;
    isDrawing = false;

    if(id == "delete"){
        isDrawing = false;
        deletingImg(e);
    }
})

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

const drawingDoodle = (x1, y1, x2, y2) => {
    context.fillStyle = "black";
    x_array.push(x);
    y_array.push(y);
    context.beginPath();
    context.moveTo(x1,y1);
    context.arc(x1,y1, brushSize, 30, 2*Math.PI, true);
    context.closePath();
    context.fillStyle = brushColor; 
    context.fill( );  
    old_x_array = x_array.slice();
    old_y_array = y_array.slice();
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

const isUndo = () => {
    
    // erases the last mouse down to mouse up strokes
    /*need to find current xy coordinates and prevoius xy coordinataes*/
    context.beginPath();
    for (let x = old_x_array.length; x>=1; x--){
        console.log("LOOP");

        context.moveTo(startingX,startingY);
        context.lineTo(old_x_array[x],old_y_array[x]);
        context.strokeStyle = "white";
        context.stroke();
        context.lineWidth = 50;
        
    }
    x_array = [];
    y_array = [];
    old_x_array = [];
    old_y_array = [];
    console.log("EMPTY ARRAY",old_x_array);
}
const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const convertToPng = () => {
    // converts the canvas element into a png image
    let imageUrl = canvas.toDataURL("image/png");
    console.log(imageUrl);
    //image.src = imageUrl;

    var img = document.createElement('img');
    img.src = imageUrl;
    createImgList(img);
    
    
}
let count = 0;
const createImgList = (image) => {
    let key = count;
    let listItem = document.createElement("li");
    listItem.id = key;
    let anchor = document.createElement("a");
    let delBtn = document.createElement('button');
    delBtn.id = "delete";
    delBtn.textContent = "X";
    anchor.append(delBtn);
    anchor.href = image.src;

    listItem.append(image);
    anchor.append(listItem);
    list.append(anchor);
    document.body.append(list);
    count++;

}
const deletingImg = (element) => {
    //this function will get called if delete button is pressed
    // after that it will check which element to delete
    console.log("IN DEl", element.path[1]);
    let key = element.path[1];
    key.remove();

}


const save = () => {
    // saves the image as a url into database
    context.fillStyle = "black";
    convertToPng();
    savedImages.push(image.src);


}


const login = () => {
    // logs in existing user

}
const signup = () => {
    // creates an account for new user.

}
console.log(x_array, y_array);
const windowResize = () => {
    
}