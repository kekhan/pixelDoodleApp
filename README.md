# Dotted Doodles
This documentation is about a doodling app for artists. The document users will learn how to use and intall the application.

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Features](#features)
* [Status](#status)
* [User-Instructions](#user-instructions)
* [How-To-Build-Application](#how-to-build-application)

## General Info
Dotted Doodle is a drawing application for artists to share their work and collaborate. 

## Technologies
Project is created with:
* Html5
* Javascript
* Css3

## Setup
To run this project, clone it locally:
```
$ cd pixelDoodleApp/src/client
```
* open index.html in browser

## Usage
![doodl](/doodle.png)
Demo:(https://kekhan.github.io/pixelDoodleApp/src/client/index.html)

## Features
List of features ready and TODO for future features
### Ready Features
* User can change colors
* User can change size
* User can save png 
### TODO
* Create download option
* Create Twitter share option
* Have a menu to select tools
## Status
Project Complete with Documentation.
## User Instructions
## Instructions for using the doodle play

### Pick Color
You have the option to choose 6 different colors.
The left side of the toolbar has two color rows. You can click on any color square to change the brush color.
	
### Pick Brush size
The doodle play provides different Bruch sizes. The brush sizes are located on the right of the color palette, You can click on any sized dot to change the brush size. Test it out on the white canvas. 

### Save Image
The right side of the toolbar includes teal buttons. These buttons include the save button, the clear button, and the undo button. The save button is the first teal button located on the right of the toolbar.
The doodle play lets you save your drawings. Click on the save button to save the image. Saved images are displayed below the drawing canvas. 

### Clear Image
Click on the clear button to completely erase the canvas. You can find the clear button next to to the delete button. The clear

### Undo Image
You have the option to undo a brushstroke. The undo button does not work correctly for now, but the Undo button erases previous brush strokes. Click on the undo button to erase brush stoke. 

### Delete image
Once you create and save an image, you have the option to delete that image.

The doodle play lets you delete an image. Go to the saved images and click the X button to delete that image. This image will get detected from the list of items.


## How To Build Application
## How to build a doodle application

### Html & Css

The doodle project uses HTML and CSS for the user interface and design. The Html file contains the div element for the toolbar and the canvas element for the drawing area. The following shows the HTML template:

Doodle draw uses bootstrap for the CSS design styles. Include the Bootstrap-CDN inside the header tag.

The HTML element will include 4 div elements. The first div element includes the entire toolbar. The toolbar div includes three more div elements. The first div element is for the colors. The next dev element is for the brush sizes. The last div element includes three buttons, the delete button, the save button, and the undo button. 

The following code sample shows where to include the bootstrap and Bootstrap CDN’s:

### JavaScript Functions

Select canvas element

Let’s set up the canvas element

You can select the canvas element by assigning the canvas id to a variable.

```const canvas = document.getElementById(‘canvas’);```
 
The web browser needs to know the graphic type. Since canvas uses 2d pixel graphics, you need to set the canvas graphics to 2d.

```const context = canvas.getContext(‘2d’);```

Set the width and height of the canvas to your desire. I want a small drawing area in the middle of the window. So, I will divide the original canvas size to half its width and height.

```canvas.width = window.innerWidth * .5;```


The canvas backgrounds needs to be white or clear.

```context.fillRect(0, 0, canvas.width, canvas.height);```


```canvas.height = window.innerHeight * .5;```

Adding a solid black line around the canvas helps destinquishes the drawing canvas from the rest of the window.

```canvas.style.border = "solid";```


You will need the following global variables to track the mouse movements throughout the application: You will notice that some variables are defined with let. Let variables can be changed later but const variables can not change later. Const variables are fixed. 

```let isDrawing = false;```


let isErase = false;


let brushColor = '';
```Mouse move listener```
let x = 0;
```Mouse move listener```
let y = 0;


```let image = new Image();```
Important variable that returns the size of the circle.
```const rect = canvas.getBoundingClientRect();```


```let brushSize = 1;```


```let savedImages = [];```


```let x_array = [];```


```let y_array = [];```


```let old_x_array = [];```


```let old_y_array = [];```


```let startingX = 0;```


```let endingX = 0;```


```let startingY = 0;```


```let endingY = 0;```


```let undo = false;```


```let list = document.createElement("ul");```


 
 ### Event Listeners
 
Event Listeners are used for user click inputs and keyboard inputs. The event listens also check for mouse activity in the canvas element. If you click and move your mouse inside the canvas, the mouse will draw along the mouse’s movement.
Doodle draw uses mouse inputs and mouse movements. This application does not use keyboard inputs. 

### Five event listeners:

### 1. When the mouse moves, a drawing should appear inside the canvas.

Assign the above x and y variables to the client and the rectangle size endings. The mouse move event listener occurs when the  is_drawing variable equals true. You need to call the drawingDoodle function if is_drawing is true.

### 2. Mouse down
 When the mouse is clicked or down, the is_drawing variable turns true.
Assign the is_drawing variable true and use the same code from the mouse move event listener for the x and y variables. In the conditional statement, check to see if e.clientX is greater than 150 and e.clientY is greater than 100. Inside the conditional statement, call the drawing Doodle function similar to the mouse move event listener function.

### 3. Click
The click event listener will check if the user clicks the delete (X button on the saved images)
Assign is_drawing to false to prevent any strokes on the canvas area. 

Event listened have specific ids assigned to each element. Use an id variable to delete a specific image belonging to that id.
The conditional statement checks if the id matches delete and if it does, the canvas stops drawing and the deleting function is called with the event.
### 4. keydown
### 5. Keyup

### Draw

The draw function draws the dots on the canvas area. I use two arrays to store the x and y positions of the strokes. The default brush color is black.

Use the following code to draw streaks of circles in the canvas area:


The below code starts the drawing

```context.beginPath();```

Moves to the x and y portions

```context.moveTo(x1,y1);```

The following code draws dot on screen with these parameters

```context.arc(x1,y1, brushSize, 30, 2*Math.PI, true);```

The follwing code line stops drawing circle

```context.closePath();```

The following code line assignes brush color to be used

```context.fillStyle = brushColor;```

Fills the dots 

```context.fill( );```


### Erase needs code and UI
### Change brush color
The changeColor function changes the brush color after the user clicks on a color. The colorChnage functions get a btn parameter from the color buttons in the HTML file.

The color variable is assigned to the button element’s id. The brushColor variable is assigned to the color variable. 


### Undo

The undo function removes the last mouse down to mouse up stoke positions. The undo button is in progress and more instructions will be announced.


Change brush size
The change BrushSize uses a conditional statement to change the brush sizes after the user clicks on each different sized dot in the toolbar. The size variable is assigned to the id of the brush buttons. Id attribute. 

### Save image 

The save function saves the drawing image below the canvas. 

### convertToPng 
 










