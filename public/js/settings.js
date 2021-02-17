
let levels = [
    {
        height: 8,
        width: 8,
        player: 9,
        objects: [
            {
                type: "box",
                movable: true,
                pos: [18, 45]
            },
            {
                type: "wall",
                movable: false,
                pos: []
            },
            {
                type: "point",
                movable: false,
                collision: true,
                pos: [25]
            }
        ]
    },
    {
        height: 10,
        width: 10,
        player: 11,
        objects: [
            {
                type: "box",
                movable: true,
                pos: [25, 42]
            },
            {
                type: "point",
                movable: false,
                collision: true,
                pos: [13]
            }
        ]
    },
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