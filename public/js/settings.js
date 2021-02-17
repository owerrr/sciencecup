
let levels = [
    {
        height: 8,
        width: 8,
        player: 15,
        objects: [
            {
                type: "box",
                movable: true,
                pos: [2, 3, 6, 27, 28]
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
        src: "public/img/player.png"
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