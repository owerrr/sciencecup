let gameCanvas;
let level = 1;
let ctx;
let game;

let player;

let gameImages = {
    player: {
        src: "public/img/player.png"
    },
    grass: {
        src: "public/img/grass.png"
    },
    box: {
        src: "public/img/box.png"
    },
}

window.onload = () => {
    for (let i = 0; i < 64; i++) {
        let div = document.createElement("div");
        div.classList.add("box-block");
        div.id = "box-" + i;
        document.querySelector(".game-box_screen").append(div);
    }

    player = new Player(5);
    player.drawPlayer();

    document.onkeyup = (e) => {
        if (e.keyCode == '38') {
            player.movePlayer('up')
        }
        else if (e.keyCode == '40') {
            player.movePlayer('down')
        }
        else if (e.keyCode == '37') {
            player.movePlayer('left')
        }
        else if (e.keyCode == '39') {
            player.movePlayer('right')
        }
    }
}
class Player {
    constructor(pos) {
        this.width = 8;
        this.pos = pos;
        this.url = gameImages.player.src;

    }
    drawPlayer() {
        let image = document.createElement('img');
        image.src = this.url;
        image.position = "relative";
        image.classList.add("game-item");
        image.id = 'player'
        document.querySelectorAll(".box-block")[this.pos].appendChild(image);
    }
    movePlayer(direction) {
        switch (direction) {
            case 'up':
                this.move(-this.width);
                break;
            case 'down':
                this.move(this.width);
                break;
            case 'right':
                this.move(1);
                break;
            case 'left':
                this.move(-1)
                break;
        }
    }
    move(dir) {
        if (this.pos % (this.width - 1) == 1 || 0) {
            alert('działa')
        }
        document.querySelectorAll(".box-block")[this.pos].removeChild(document.querySelectorAll(".box-block")[this.pos].children[0]);
        this.pos += dir;
        this.drawPlayer();
    }
}

/*
class Game {
    constructor(i) {
        this.pos = i;
        this.width = 8;
        this.height = 8;

        this.image = document.createElement('img');
        this.image.src = "public/img/player.png";
        this.image.classList.add("game-item");
    }
    drawPlayer() {
        document.querySelectorAll(".box-block")[this.pos].appendChild(this.image);
    }
    move() {
        if (this.pos < this.width) {
            return;
        }
        document.querySelectorAll(".box-block")[this.pos].removeChild(this.image);
        this.pos -= this.width;
        this.drawPlayer();
    }
}
*/
