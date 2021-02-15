let gameCanvas;
let level = 1;
let ctx;
let game;


let gameImages = {
    player:{
        src: "public/img/player.png"
    },
    grass:{
        src: "public/img/grass.png"
    },
    box:{
        src: "public/img/box.png"
    },
}

window.onload = ()=>{
    game = document.querySelector("#game");
    ctx = game.getContext('2d');

    var player = new Player(0, 0, gameImages.player.src, 16, 16, 1);
    player.drawPlayer();
}

class Player{
    constructor(x, y, url, width, height, speed){
        this.x = x
        this.y = y
        this.url = url;
        this.width = width;
        this.height = height
        this.speed = speed;
    }
    drawPlayer(){
        let myImage = document.createElement('img');
        myImage.src = this.url
        ctx.drawImage(myImage,this.x,this.y,this.width,this.height)
    }
}