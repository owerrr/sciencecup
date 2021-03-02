let game;
let levels = [
    {"limitTime":15,"limitMoves":56,"height":6,"width":11,"objects":[{"type":"box","movable":true,"pos":[36,35,26,28,40,41]},{"type":"wall","movable":false,"pos":[48,37,38,39,50,16]},{"type":"point","movable":false,"collision":true,"pos":[13,14,15,18,19,20]}],"player":27},
    {"limitTime":15,"limitMoves":65,"height":7,"width":7,"objects":[{"type":"box","movable":true,"pos":[23,30,31,32,25,18,17,16]},{"type":"wall","movable":false,"pos":[]},{"type":"point","movable":false,"collision":true,"pos":[36,37,39,40,33,15,8,12]}],"player":24},
    {"limitTime":15,"limitMoves":65,"height":10,"width":11,"objects":[{"type":"box","movable":true,"pos":[47,49,51,63,62,61,60,59,58,57]},{"type":"wall","movable":false,"pos":[15,17,25,35,45,29,41,53,12,13,14,18,19,20,23,24,30,31,34,42]},{"type":"point","movable":false,"collision":true,"pos":[16,26,36,46,28,40,52,38,48,50]}],"player":93},
    {"limitTime":15,"limitMoves":65,"height":11,"width":11,"objects":[{"type":"box","movable":true,"pos":[24,36,26,48,38,28,60,50,40,30]},{"type":"wall","movable":false,"pos":[46,57,68,69,100,89,90,79,108,97,96,85,74,73,63,52]},{"type":"point","movable":false,"collision":true,"pos":[83,81,93,91,95,107,105,103,101]}],"player":16},
    {"limitTime":15,"limitMoves":65,"height":16,"width":11,"objects":[{"type":"box","movable":true,"pos":[27,41,35,57,79,63,85,107,129]},{"type":"wall","movable":false,"pos":[15,16,17,38,39,40,49,37,36,47,58,69,80,91,102,113,124,135,61,62,73,84,95,106,157,151,152,150,161,139,138,127,116,105,122,111,100]},{"type":"point","movable":false,"collision":true,"pos":[48,60,59,70,71,72,83,82,94]}],"player":140},
    {"limitTime":15,"limitMoves":65,"height":9,"width":10,"objects":[{"type":"box","movable":true,"pos":[33,34,35,36,46,56,55,54,53,43]},{"type":"wall","movable":false,"pos":[12,21,17,28,68,77,72,61,11,18,78,71]},{"type":"point","movable":false,"collision":true,"pos":[13,22,31,76,67,58,38,27,51,62]}],"player":45},
    {"limitTime":15,"limitMoves":65,"height":9,"width":9,"objects":[{"type":"box","movable":true,"pos":[22,51,60,59,58,57,56,47,38,39,40,41]},{"type":"wall","movable":false,"pos":[20,29,21,33,42]},{"type":"point","movable":false,"collision":true,"pos":[15,24,25,16,34,52,61,70,69,68,37,46]}],"player":48},
    {"limitTime":15,"limitMoves":65,"height":9,"width":9,"objects":[{"type":"box","movable":true,"pos":[51,60,58,57,56,47,39,40,41]},{"type":"wall","movable":false,"pos":[19,28,22,13,23,14,15,24,33,42,43,59]},{"type":"point","movable":false,"collision":true,"pos":[10,11,12,20,29,38,37,46,31]}],"player":48},
    {"limitTime":15,"limitMoves":65,"height":6,"width":11,"objects":[{"type":"box","movable":true,"pos":[35,24,26,28,30,41]},{"type":"wall","movable":false,"pos":[38,37,39,50,48]},{"type":"point","movable":false,"collision":true,"pos":[13,14,15,16,17,18]}],"player":27},
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