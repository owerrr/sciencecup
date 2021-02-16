let gameCanvas;
let level = 1;
let ctx;
let game;

let player;

let width = 8;
let height = 8;

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
    let i = 0;
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {

            let div = document.createElement("div");
            div.classList.add("box-block");
            div.classList.add("height-" + h);
            div.classList.add("row-" + w);
            div.id = "box-" + i;
            document.querySelector(".game-box_screen").append(div);

            i++;
        }
    }

    let image = document.createElement('img');
    image.src = gameImages.box.src;
    image.classList.add("game-item");
    document.querySelectorAll(".box-block")[9].appendChild(image);

    player = new Player(5);
    player.drawPlayer();

    document.onkeydown = (e) => {
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
                if (this.pos < width) {
                    return;
                }
                this.move(-width);
                break;
            case 'down':
                if ((this.pos + 1 + width) > width * height) {
                    return;
                }
                this.move(width);
                break;
            case 'right':
                if (((this.pos + 1) % 8) == 0) {
                    return;
                }
                this.move(1);
                break;
            case 'left':
                if (((this.pos) % 8) == 0) {
                    return;
                }
                this.move(-1)
                break;
        }
    }
    move(dir) {
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
