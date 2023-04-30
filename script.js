//Vseobecne nastaveni canvasu 

const canvas = document.querySelector("canvas");
const context =  canvas.getContext("2d");


//promenne
const sizeOfSnake = 50 ;
let snakePositionX = 0;
let snakePositionY = canvas.height/2;
let speedOfSnake = sizeOfSnake;
let velocityX = 1;
let velocityY = 0;
const rectangleCountX = canvas.width/sizeOfSnake;
const rectangleCountY = canvas.height/sizeOfSnake;



//loopik

function Loop(){
    draw();
    move();
    setTimeout(Loop, 1000/15);
}
Loop();


//funkce pro kresleni 
function draw (){
    //pozadi
    rectangle("#B0E0E6", 0, 0, canvas.width, canvas.height);
    //gridove pozadi 
    backgroundGrid();
    //had 
    rectangle("black", snakePositionX, snakePositionY, sizeOfSnake, sizeOfSnake);
}


//funkce na hybani 
function move(){
    snakePositionX += speedOfSnake * velocityX; 
    snakePositionY+= speedOfSnake * velocityY; 

    //presun zprava doleva
    if (snakePositionX>canvas.width-sizeOfSnake){
        snakePositionX = 0
    };
    //presun zleva doprava
    if (snakePositionX< -sizeOfSnake){
        snakePositionX = canvas.width
    };
    //presun zdola nahoru 
    if (snakePositionY>canvas.height-sizeOfSnake){
        snakePositionY = 0
    }
    //presun zezhora dolu 
    if (snakePositionY< -sizeOfSnake){
        snakePositionY = canvas.height
    }
}
 
//funkce na vykresleni dvou ctvercu 
function rectangle (color, x, y, width, height) {
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
}


//funkce na poznani zmacknuti 

function keyPushed(event){
    switch(event.key){
        //šipka nahoru
        case "ArrowUp":
            if (velocityY !== 1){
                velocityX = 0
                velocityY = -1
            }
        break
        //šipka doprava
        case "ArrowRight":
            if (velocityX !== -1){
                velocityX = 1
                velocityY = 0 
            }
        break
        //šipka dolů
        case "ArrowDown":
            if (velocityY !== -1){
                velocityX =0
                velocityY= 1 
            }
        break
        //šipka doleva
        case "ArrowLeft":
            if (velocityX!==1){
                velocityX = -1
                velocityY = 0
            }
        break
    }
}

function backgroundGrid(){
    for (let i = 0; i<rectangleCountX; i++){
        for (let j=0; j<rectangleCountY; j++){
            rectangle(
            "white",
            sizeOfSnake * i, 
            sizeOfSnake * j , 
            sizeOfSnake-1, 
            sizeOfSnake-1)
        }
    }
}

//posluchači 
document.addEventListener("keydown", keyPushed)

