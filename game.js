class Game {
    constructor() { }

    getState() {
        var gamestateRef = db.ref("gameState")
        gamestateRef.on("value", function (data) {
            gameState = data.val();


        })
    }
    update(state) {
        db.ref("/").update({
            gameState: state
        })
    }
    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200, 80, 80);
        car1.addImage("c1", car1Img);
        car2 = createSprite(300, 200, 80, 80);
        car2.addImage("c2", car2Img);
        car3 = createSprite(500, 200, 80, 80);
        car3.addImage("c3", car3Img);
        car4 = createSprite(700, 200, 80, 80);
        car4.addImage("c4", car4Img);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        text("GAME IS STARTING", 120, 100);
        Player.getInfo();
        player.getRank();
        if (allPlayers !== undefined) {
            background(groundImg);
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var x = 280;
            var x1;
            var y;
            var index = 0;
            for (var plr in allPlayers) {
                x += 270;
                y = displayHeight - allPlayers[plr].distance;
                index++
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                fill("white");
                textSize(22);
                text("player:"+allPlayers[plr].name,x-40,y+70)
                if (index === player.index) {
                    fill("white");
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if (keyDown("UP_ARROW") && player.index !== null&&player.distance<=5310) {
            player.distance += 50
            player.update();
        }
        // if (keyDown("LEFT_ARROW") && player.index !== null) {
        //     player.distanceX -= 10
        //     player.update();
        // }
        // if (keyDown("RIGHT_ARROW") && player.index !== null) {
        //     player.distanceX += 10
        //     player.update();
        // }
        if(player.distance>=5310){
            gameState=2;
            player.rank=player.rank+1;
            Player.updateRank(player.rank);
        }
        drawSprites();

    }
    end(){
        console.log("GAME ENDED")
        console.log("Rank:"+player.rank);
        form.gameOver.show();
        form.gameOver.position(displayWidth/2-200,200);
        form.gameOver.size(500,500);
        form.result.html("RANK: "+player.rank)
        form.result.position(100,100);
    }
}