let game;
let levels = [
    {"height":11,"width":8,"objects":[{"type":"box","movable":true,"pos":[34,43,50]},{"type":"wall","movable":false,"pos":[19,20,26,29,58,67,68,61]},{"type":"point","movable":false,"collision":true,"pos":[37,44,53]}],"player":73},
    {"height":7,"width":8,"objects":[{"type":"box","movable":true,"pos":[18,26,34,37,21]},{"type":"wall","movable":false,"pos":[28,30,11,43]},{"type":"point","movable":false,"collision":true,"pos":[20,19,27,35,36]}],"player":25},
]
let gameImages = {
    player: {
        src: "public/img/player-static.png"
    },
    playermove: {
        src: "public/img/player-moving.gif"
    },
    grass: {
        src: "public/img/grass.png"
    },
    box: {
        src: "public/img/box.png"
    },
    wall: {
        src: "public/img/wall.png"
    },
    point: {
        src: "public/img/point.png"
    }
}