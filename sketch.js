var db;
var playerCount, form, player, game, gameState = 0, allPlayers;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img;
var groundImg, trackImg;

function preload() {
    trackImg = loadImage("Pictures/track.jpg");
    groundImg = loadImage("Pictures/ground.png");
    car4Img = loadImage("Pictures/car4.png");
    car3Img = loadImage("Pictures/car3.png");
    car2Img = loadImage("Pictures/car2.png");
    car1Img = loadImage("Pictures/car1.png");
}

function setup() {
    createCanvas(displayWidth - 25, displayHeight - 170);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("white");
    if (playerCount === 2) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2) {
        game.end()
    }
}

