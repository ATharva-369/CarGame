class Form {
    constructor() {
        this.input = createInput("");
        this.button = createButton("Play");
        this.reset= createButton("Reset");
        this.greeting = createElement("h3");
        this.gameOver=createImg("Pictures/gm.png");
        this.result=createElement("h1");
    }
    display() {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-100, 10);

        this.input.position(displayWidth/2-100, displayHeight/2-200);
        this.button.position(displayWidth/2-100, displayHeight/2-170);
        this.reset.position(100,50);

        this.gameOver.position(displayWidth/2-200,200)
        this.gameOver.hide();

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("WELCOME " + player.name);
            this.greeting.position(displayWidth/2-100, displayHeight/2);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateRank(0);
        })


    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

}