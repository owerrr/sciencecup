window.onload = () => {
    game = new Game(2);
    game.createTable();
    game.registerPlayerEvent();
    game.drawObjects();
}

class Game {
    constructor(level) {
        this.level = level;
        this.height = levels[level - 1].height;
        this.width = levels[level - 1].width;
        this.player = new Object(levels[level - 1].player, true, "player");
        this.objects = [];
        levels[level - 1].objects.forEach(e => {
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
    drawObject() {
        document.querySelectorAll(".box-block")[this.pos].appendChild(this.image);
        if (this.type == "player") {
            switch (this.dir) {
                case 'up':
                    document.querySelector("#player").style.transform = "rotate(0deg)"
                    break;
                case 'down':
                    document.querySelector("#player").style.transform = "rotate(180deg)"
                    break;
                case 'right':
                    document.querySelector("#player").style.transform = "rotate(90deg)"
                    break;
                case 'left':
                    document.querySelector("#player").style.transform = "rotate(270deg)"
                    break;
            }
        }
    }
    moveObject(direction) {
        if (!this.movable) return false;
        this.dir = direction;
        switch (direction) {
            case 'up':
                if (!this.checkMove(this.pos - game.width, direction)) return false;
                this.move(-game.width);
                break;
            case 'down':
                if (!this.checkMove(this.pos + game.width, direction)) return false;
                this.move(game.width);
                break;
            case 'right':
                if (!this.checkMove(this.pos + 1, direction)) return false;
                this.move(1);
                break;
            case 'left':
                if (!this.checkMove(this.pos - 1, direction)) return false;
                this.move(-1)
                break;
        }
        return true;
    }
    move(dir) {
        document.querySelectorAll(".box-block")[this.pos].removeChild(document.querySelectorAll(".box-block")[this.pos].children[0]);
        this.pos += dir;
        this.drawObject();
    }
    checkMove(pos, dir = "") {
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
                        if (e.movable == true) {
                            if (e.pos == pos) {
                                mov = e.moveObject(dir);
                            }
                        }
                    }
                })
            }
        }
        return mov;
    }
}
