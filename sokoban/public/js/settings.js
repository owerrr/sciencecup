let game;
let levels = [
    {"limitTime":15,"limitMoves":56,"height":6,"width":11,"objects":[{"type":"box","movable":true,"pos":[36,35,26,28,40,41]},{"type":"wall","movable":false,"pos":[48,37,38,39,50,16]},{"type":"point","movable":false,"collision":true,"pos":[13,14,15,18,19,20]}],"player":27},
    {"limitTime":20,"limitMoves":65,"height":7,"width":7,"objects":[{"type":"box","movable":true,"pos":[23,30,31,32,25,18,17,16]},{"type":"wall","movable":false,"pos":[]},{"type":"point","movable":false,"collision":true,"pos":[36,37,39,40,33,15,8,12]}],"player":24},
    {"limitTime":30,"limitMoves":65,"height":10,"width":11,"objects":[{"type":"box","movable":true,"pos":[47,49,51,63,62,61,60,59,58,57]},{"type":"wall","movable":false,"pos":[15,17,25,35,45,29,41,53,12,13,14,18,19,20,23,24,30,31,34,42]},{"type":"point","movable":false,"collision":true,"pos":[16,26,36,46,28,40,52,38,48,50]}],"player":93},
    {"limitTime":25,"limitMoves":65,"height":11,"width":11,"objects":[{"type":"box","movable":true,"pos":[24,36,26,48,38,28,60,50,40,30]},{"type":"wall","movable":false,"pos":[46,57,68,69,100,89,90,79,108,97,96,85,74,73,63,52]},{"type":"point","movable":false,"collision":true,"pos":[83,81,93,91,95,107,105,103,101]}],"player":16},
    {"limitTime":20,"limitMoves":65,"height":16,"width":11,"objects":[{"type":"box","movable":true,"pos":[27,41,35,57,79,63,85,107,129]},{"type":"wall","movable":false,"pos":[15,16,17,38,39,40,49,37,36,47,58,69,80,91,102,113,124,135,61,62,73,84,95,106,157,151,152,150,161,139,138,127,116,105,122,111,100]},{"type":"point","movable":false,"collision":true,"pos":[48,60,59,70,71,72,83,82,94]}],"player":140},
    {"limitTime":45,"limitMoves":65,"height":9,"width":10,"objects":[{"type":"box","movable":true,"pos":[33,34,35,36,46,56,55,54,53,43]},{"type":"wall","movable":false,"pos":[12,21,17,28,68,77,72,61,11,18,78,71]},{"type":"point","movable":false,"collision":true,"pos":[13,22,31,76,67,58,38,27,51,62]}],"player":45},
    {"limitTime":30,"limitMoves":65,"height":9,"width":9,"objects":[{"type":"box","movable":true,"pos":[22,51,60,59,58,57,56,47,38,39,40,41]},{"type":"wall","movable":false,"pos":[20,29,21,33,42]},{"type":"point","movable":false,"collision":true,"pos":[15,24,25,16,34,52,61,70,69,68,37,46]}],"player":48},
    {"limitTime":90,"limitMoves":90,"height":9,"width":9,"objects":[{"type":"box","movable":true,"pos":[51,60,58,57,56,47,39,40,41]},{"type":"wall","movable":false,"pos":[19,28,22,13,23,14,15,24,33,42,43,59]},{"type":"point","movable":false,"collision":true,"pos":[10,11,12,20,29,38,37,46,31]}],"player":48},
    {"limitTime":85,"limitMoves":90,"height":6,"width":11,"objects":[{"type":"box","movable":true,"pos":[35,24,26,28,30,41]},{"type":"wall","movable":false,"pos":[38,37,39,50,48]},{"type":"point","movable":false,"collision":true,"pos":[13,14,15,16,17,18]}],"player":27},
    {"limitTime":67,"limitMoves":100,"height":8,"width":9,"objects":[{"type":"box","movable":true,"pos":[21,22,23,40,51]},{"type":"wall","movable":false,"pos":[14,15,16,30,29,32,33,48,60,61,59]},{"type":"point","movable":false,"collision":true,"pos":[13,28,31,34,49]}],"player":10},
    {"limitTime":50,"limitMoves":100,"height":9,"width":9,"objects":[{"type":"box","movable":true,"pos":[60,58,56,48,50,42,40,38,30,32,24,22,20]},{"type":"wall","movable":false,"pos":[14,15,16,61]},{"type":"point","movable":false,"collision":true,"pos":[13,28,34,57,59,67,47,49,51,41,39,29,31,33,23,21]}],"player":70},
    {"limitTime":90,"limitMoves":100,"height":7,"width":9,"objects":[{"type":"box","movable":true,"pos":[60,58,56,48,50,24,29,38,40,41,42,33]},{"type":"wall","movable":false,"pos":[61,10,19,21,31,43,52]},{"type":"point","movable":false,"collision":true,"pos":[28,57,59,67,47,49,51,23,16,15,14,13,12,11]}],"player":49},
    {"limitTime":30,"limitMoves":100,"height":7,"width":12,"objects":[{"type":"box","movable":true,"pos":[60,56,48,50,24,38,21,33,45,57,69,30,18,42,54,66,15,27,39,51,63]},{"type":"wall","movable":false,"pos":[61,10,13]},{"type":"point","movable":false,"collision":true,"pos":[59,47,49,23,14,12,11,19,31,43,55,67,16,17,28,29,40,41,52,53,64,65]}],"player":70},
    {"limitTime":60,"limitMoves":100,"height":7,"width":8,"objects":[{"type":"box","movable":true,"pos":[60,56,48,50,24,38,33,45,57,69,42,54,66,15,39,51,63,18,26,34,28,21,37]},{"type":"wall","movable":false,"pos":[61,10,13,11,43,30]},{"type":"point","movable":false,"collision":true,"pos":[59,47,49,23,14,12,31,55,67,16,17,40,41,52,53,64,65,19,27,35,20,36,29]}],"player":25},
    {"limitTime":60,"limitMoves":100,"height":7,"width":9,"objects":[{"type":"box","movable":true,"pos":[60,56,50,24,45,57,69,54,66,51,63,18,26,21,41,33,22,38,29,30]},{"type":"wall","movable":false,"pos":[61,43,10,11,12,40,42,16,25,23]},{"type":"point","movable":false,"collision":true,"pos":[59,31,55,67,17,52,53,64,65,27,35,20,36,37,46,47,48,39,49]}],"player":50},
    {"limitTime":60,"limitMoves":100,"height":8,"width":11,"objects":[{"type":"box","movable":true,"pos":[56,45,69,54,66,18,21,33,22,36,37,38,49,50,51]},{"type":"wall","movable":false,"pos":[43,10,11,12,40,42,16,24,25,27,29,30,41,63,62,60,58,57,46]},{"type":"point","movable":false,"collision":true,"pos":[31,55,67,17,53,64,65,20,47,48,39,26,28,52,59,61,35]}],"player":12},
    {"limitTime":60,"limitMoves":150,"height":6,"width":9,"objects":[{"type":"box","movable":true,"pos":[56,69,66,18,36,27,28,24,42,32,14,12,21,30,39]},{"type":"wall","movable":false,"pos":[40,16,25,63,62,60,58,57,51,50,49,46,37,45]},{"type":"point","movable":false,"collision":true,"pos":[31,55,67,17,64,65,47,48,26,52,59,61,22,23,15,33,41,11,20,29,38]}],"player":25},
    {"limitTime":60,"limitMoves":150,"height":8,"width":8,"objects":[{"type":"box","movable":true,"pos":[56,69,66,36,24,32,39,28,35,43,34,26,20,29]},{"type":"wall","movable":false,"pos":[40,16,63,62,60,58,57,9,10,14,13,41,49,18,19,21,38,37,46,54]},{"type":"point","movable":false,"collision":true,"pos":[31,55,67,17,64,65,47,48,52,59,61,22,23,15,33,11,12,25,27,30,42,50,51,45,53]}],"player":11},
    {"limitTime":60,"limitMoves":150,"height":6,"width":10,"objects":[{"type":"box","movable":true,"pos":[56,69,66,24,39,28,35,43,34,26,20,29,37,27]},{"type":"wall","movable":false,"pos":[40,63,62,60,58,57,9,10,41,49,19,21,38,54,18,17,16,11,12,36,46,32]},{"type":"point","movable":false,"collision":true,"pos":[31,55,67,64,65,47,48,52,59,61,22,23,33,25,30,50,51,53,42,45]}],"player":47},
    {"limitTime":60,"limitMoves":150,"height":5,"width":14,"objects":[{"type":"box","movable":true,"pos":[56,69,66,39,28,35,43,29,37,27,38,36,34,32,30]},{"type":"wall","movable":false,"pos":[40,63,62,60,58,57,9,10,41,49,54,16,11,12,17,18,19,20,21,22,23,24,25,26]},{"type":"point","movable":false,"collision":true,"pos":[31,55,67,64,65,52,59,61,33,50,51,53,42,44,45,46,47,48]}],"player":39},
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