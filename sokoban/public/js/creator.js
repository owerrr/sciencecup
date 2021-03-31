let select = "player";
let gameImages = {"player":{"src":"public/img/player-static.png"},"playermove":{"src":"public/img/player-moving.gif"},"grass":{"src":"public/img/grass.png"},"box":{"src":"public/img/box.png"},"wall":{"src":"public/img/wall.png"},"point":{"src":"public/img/point.png"}}
let map = {"height":8,"width":8,"objects":[{"type":"box","movable":true,"pos":[]},{"type":"wall","movable":false,"pos":[]},{"type":"point","movable":false,"collision":true,"pos":[]}]}
window.onload = function(){

    createTable()

    document.getElementById("width").oninput = function(){
        map.width = parseInt(this.value);
        clear()
    }
    document.getElementById("height").oninput = function(){
        map.height = parseInt(this.value);
        clear()
    }
    document.getElementById("object").oninput = function(){
        select = this.value;
    }
}
function clear(){
    document.querySelector(".game-box_screen").innerHTML = "";
    createTable()
}
function createTable(){
    document.querySelector(".game-box_screen").style.width = map.width * 64 + 1 + "px";
    document.querySelector(".game-box_screen").style.height = map.height * 64 + 1 + "px";
    let i = 0;
    for (let h = 0; h < map.height; h++) {
        for (let w = 0; w < map.width; w++) {
            let div = document.createElement("div");
            div.classList.add("box-block");
            div.classList.add("height-" + h);
            div.classList.add("row-" + w);
            div.id = "box-" + i;
            document.querySelector(".game-box_screen").append(div);
            if (h == 0 || h == map.height - 1 || w == 0 || w == map.width - 1) {
                drawObject("wall", i, false);
            }
            i++;
        }

    }
    document.querySelectorAll(".box-block").forEach(e => {
        e.onclick = function(){
            if(e.innerHTML != ""){
                e.innerHTML = ""
            }
            let id = e.id;
            id = id.replace("box-", "");
            let pos = parseInt(id);
            if(select == "air"){
                map.objects.forEach(e => {
                    if(e.pos.indexOf(pos) != -1) e.pos.splice(e.pos.indexOf(pos), 1);
                })
                return;
            }
            drawObject(select, pos)
        }
    })
}
function drawObject(type, pos, bool=true){
    if(type == "player"){
        map.player = pos;
    } else if(bool) {
        map.objects.forEach(e => {
            if(e.pos.indexOf(pos) != -1) e.pos.splice(e.pos.indexOf(pos), 1);
            if(e.type == type){
                e.pos.push(pos)
            }
        })
    }
    let img = document.createElement("img");
    img.src = getSrc(type);
    img.width = 64;
    img.height = 64;
    document.querySelectorAll(".box-block")[pos].appendChild(img);
    getResult();
}

function getSrc(type){
    switch (type) {
        case 'player':
            return gameImages.player.src;
            break;
        case 'box':
            return gameImages.box.src;
            break;
        case 'wall':
            return gameImages.wall.src;
            break;
        case 'point':
            return gameImages.point.src;
            break;
    }
}
function getResult(){
    document.getElementById("result").value = JSON.stringify(map);
}



function copy() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }