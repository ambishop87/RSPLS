class Human extends Player {
    constructor(Human){
        super(Human)
        this.player = ["PlayerOne", "playerTwo"];
        this.score = 0;
        this.selectedgesture = "";
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard","Spock"];

    }

    chooseGesture(); {
        console.log("Choose your gesture");
        this.gestures;
    }
}

module.exports = {Human}