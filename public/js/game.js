let timer;
function runGame(level) {
    if(game != null){
        game.clearGame();   
    }
    game = new Game(level - 1);
    game.loadGame();
}
class Game {
    constructor(level) {
        this.point = 0;
        this.moves = 0;
        this.stoper = 0;
        this.canMove = false;
        this.level = level;
        this.height = levels[level].height;
        this.width = levels[level].width;
        this.player = new Object(levels[level].player, true, "player");
        this.objects = [];
        this.points = [];
        this.difficulty = "easy";
        this.maxMoves = -1
        this.maxTime = -1;
        levels[level].objects.forEach(e => {
            e.pos.forEach(n => {
                if(e.type == "point"){
                    this.points.push(n)
                } else {
                    this.objects.push(new Object(n, e.movable, e.type))
                }
            })
        })
    }
    loadGame(){
        this.createTable();
        this.registerPlayerEvent();
        this.drawObjects();
        this.showInfo();
        document.querySelector(".level-select").classList.toggle("level-select"); //off
        document.querySelectorAll("li.level")[this.level].classList.toggle("level-select") //on

    }
    changeDifficult(dif){
        game.difficulty = dif;
        if(dif == "hard"){
            game.maxTime = levels[game.level].limitTime;
        }
        if(dif == "medium"){
            game.maxMoves = levels[game.level].limitMoves;
        }
        if(dif == "easy"){
            game.maxMoves = -1;
            game.maxTime = -1;
        }
    }
    clearGame(){
        window.clearTimeout(timer)
        document.querySelector(".game-box_screen").innerHTML = "";
    }
    checkPoints(){
        game.point = Array.from(document.querySelectorAll(".point")).filter(e => { return (e.children[0] != null && e.children[0].id == "box")}).length
        if(game.point == game.points.length){
            this.canMove = false;
            //Win section
            window.clearTimeout(timer)
            document.querySelector('#won').classList.toggle('winlose-on')
            document.querySelector('.moves').innerHTML = "<i class='fas fa-running'></i> Ruchy: "+game.moves;
            document.querySelector('.time').innerHTML = "<i class='far fa-clock'></i> Czas: "+getTime();
            console.log(game.moves)
        }
    }
    startTimer(){
        timer = setInterval(function(){
            game.stoper++;
            console.log(game.stoper)
            document.getElementById("timer").innerHTMl = game.stoper + ""

            if(game.maxTime != -1 && game.maxTime < game.stoper){
                document.querySelector("#lose").classList.add('winlose-on');
                game.canMove = false;
            }
        }, 1000);
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
            switch(e.keyCode + ''){
                case '37':
                    this.player.moveObject('left')
                    break;
                case '38':
                    this.player.moveObject('up')
                    break;
                case '39':
                    this.player.moveObject('right')
                    break;
                case '40':
                    this.player.moveObject('down')
                    break;
                case '82':
                    runGame(game.level + 1);
                    break;
                case '85':
                    //TODO UNDO
                    break;
                case '78':
                    runGame(game.level + 2);
                    break;
                default:
                    console.log(e.keyCode);
                    break;
            }
        }
    }
    drawObjects() {
        this.player.drawObject();
        this.objects.forEach(e => {
            e.drawObject();
        })
        this.points.forEach(e => {
            document.querySelectorAll(".box-block")[e].classList.add("point")
        })
    }
    showInfo(){
        document.getElementById("moves").innerHTMl = game.moves
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
    //draw object
    drawObject(last) {
        if(document.querySelectorAll(".box-block")[last] != null){
            document.querySelectorAll(".box-block")[last].removeChild(document.querySelectorAll(".box-block")[last].children[0]);
        }
        if(document.querySelectorAll(".box-block")[this.pos] != null){
            document.querySelectorAll(".box-block")[this.pos].appendChild(this.image);
            this.rotateObject(this.dir);
        }
    }
    //Rotate Object
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
    //Move object
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
        if(!game.canMove) return;
        if(this.type == "player") {
            if(game.moves == 0){
                game.startTimer();
            }
            game.moves++;
            document.getElementById("moves").innerHTML = game.moves

            if(game.maxMoves != -1 && game.maxMoves < game.moves){
                document.querySelector("#lose").classList.add('winlose-on');
                game.canMove = false;
            }
        };
        game.checkPoints()
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
                    if (mov && e.movable && e.pos == pos) {
                        mov = e.moveObject(this.dir);
                    }
                })
            }
        }
        return mov;
    }
}