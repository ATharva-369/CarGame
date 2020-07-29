class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
        // this.distanceX=0;
    }
    getCount() {
        var playerCountRef = db.ref("playerCount")
        playerCountRef.on("value", function (data) {
            playerCount = data.val();


        })
    }
    updateCount(count) {
        db.ref("/").update({
            playerCount: count
        })
    }
    update() {
        var pIndex = "players/player" + this.index;
        db.ref(pIndex).set({
            name: this.name,
            distance: this.distance,
            // distanceX:this.distanceX
        })
    }
    getRank() {
        db.ref("carsAtEnd").on("value",(data)=>{
           this.rank=data.val(); 
        })

        }
    static updateRank(rank){
        db.ref("/").update({
        carsAtEnd:rank
        })
    }

    static getInfo() {
        var playerInfo = db.ref("players");
        playerInfo.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}