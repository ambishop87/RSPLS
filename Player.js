class Player {
    constructor(Player) {
        super (Player)
        this.player = ["playerOne", "playerTwo"];
        this.score = 0;
        this.selectedGesture = "";
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard","Spock"]
    }

    chooseGesture(); {
        console.log("Choose your gesture");
        this.gestures;


    }

}
module.exports = {Player}