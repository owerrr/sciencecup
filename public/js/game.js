function runGame(level) {
    game = new Game(level - 1);
    game.createTable();
    game.registerPlayerEvent();
    game.drawObjects();
}
function clearGame(){
    document.querySelector(".game-box_screen").innerHTML = "";
}
class Game {
    constructor(level) {
        this.level = level;
        this.height = levels[level].height;
        this.width = levels[level].width;
        this.player = new Object(levels[level].player, true, "player");
        this.objects = [];
        levels[level].objects.forEach(e => {
            e.pos.forEach(n => {
                this.objects.push(new Object(n, e.movable, e.type))
            })
        })
    }
    createTable() {
        document.querySelector(".game-box_screen").style.width = this.width * 64 + "px";
        document.querySelector(".game-box_screen").style.height = this.height * 64 + "px";
        let i = 0;
        for (let h = 0; h < this.height; h++) {
            for (let w = 0; w < this.width; w++) {
                let div = document.createElement("div");
                div.style.float = "left";
                div.classList.add("box-block");
                div.classList.add("height-" + h);
                div.classList.add("row-" + w);
                div.id = "box-" + i;
                document.querySelector(".game-box_screen").append(div);
                if (h == 0 || h == this.height - 1 || w == 0 || w == this.width - 1) {
                    this.objects.push(new Object(i, false, "wall"))
                }
                i++;
            }

        }
    }
    registerPlayerEvent() {
        //document.querySelector("#player").src = gameImages.playerMove.src;
        document.onkeydown = (e) => {
            if (e.keyCode == '38') {
                this.player.moveObject('up')
            }
            else if (e.keyCode == '40') {
                this.player.moveObject('down')
            }
            else if (e.keyCode == '37') {
                this.player.moveObject('left')
            }
            else if (e.keyCode == '39') {
                this.player.moveObject('right')
            }
        }
        document.onkeyup= (e) => {
            document.querySelector("#player").src = gameImages.player.src;
        }
    }
    drawObjects() {
        this.player.drawObject();
        this.objects.forEach(e => {
            if (e.type == "point") {
                document.querySelectorAll(".box-block")[e.pos].background = "url('" + gameImages.point.src + "')"
            } else {
                e.drawObject();
            }
        })
    }
}

class Object {
    constructor(pos, move, type, dir = "up") {
        this.pos = pos;
        this.movable = move;
        this.image = document.createElement('img');
        this.type = type;
        this.dir = dir;
        this.isMoving = false;
        switch (type) {
            case 'player':
                this.image.src = gameImages.player.src;
                break;
            case 'box':
                this.image.src = gameImages.box.src;
                break;
            case 'wall':
                this.image.src = gameImages.wall.src;
                break;
            case 'point':
                this.image.src = gameImages.point.src;
                break;
        }
        this.image.position = "relative";
        this.image.classList.add("game-item");
        this.image.classList.add("move_" + this.movable);
        this.image.id = type;
    }
    drawObject(last) {
        if(document.querySelectorAll(".box-block")[last] != null){
            document.querySelectorAll(".box-block")[last].removeChild(document.querySelectorAll(".box-block")[last].children[0]);
        }
        document.querySelectorAll(".box-block")[this.pos].appendChild(this.image);
        this.rotateObject(this.dir);
    }
    rotateObject(dir){
        this.dir = dir;
        if (this.type == "player") {
            switch (dir) {
                case 'right':
                    document.querySelector("#player").style.transform = "scaleX(-1)"
                    break;
                case 'left':
                    document.querySelector("#player").style.transform = "scaleX(1)"
                    break;
            }
        }
    }
    moveObject(direction) {
        if (!this.movable) return false;
        this.rotateObject(direction)
        switch (direction) {
            case 'up':
                if (!this.checkMove(this.pos - game.width)) return false;
                this.move(-game.width);
                break;
            case 'down':
                if (!this.checkMove(this.pos + game.width)) return false;
                this.move(game.width);
                break;
            case 'right':
                if (!this.checkMove(this.pos + 1)) return false;
                this.move(1);
                break;
            case 'left':
                if (!this.checkMove(this.pos - 1)) return false;
                this.move(-1)
                break;
        }
        return true;
    }
    move(dir) {
        this.pos += dir;
        this.drawObject(this.pos - dir);
    }
    checkMove(pos) {
        if (document.querySelectorAll(".box-block")[pos].children.length > 0) {
            if (document.querySelectorAll(".box-block")[pos].children[0].classList.contains("move_false")) {
                return false;
            }
        }
        let mov = true;
        if (document.querySelectorAll(".box-block")[pos].children.length > 0) {
            if (document.querySelectorAll(".box-block")[pos].children[0].classList.contains("move_true")) {
                game.objects.forEach(e => {
                    if (this.type == e.type) {
                        mov = false;
                    }
                    if (mov) {
                        if (e.movable) {
                            if (e.pos == pos) {
                                mov = e.moveObject(this.dir);
                            }
                        }
                    }
                })
            }
        }
        return mov;
    }
}
