class Ai extends Player {
    constructor(Ai) {
        super(Ai)
        this.player = ["playerOne", "playerTwo"];
        this.score = 0;
        this.selectedGesture = "";
        this.gestures = ["Rock", "Paper", "scissors", "Lizard", "Spock"]
    }

    chooseGesture() {
        console.log("The other player has selected a gesture");
        this.gestures = Math.floor(Math.random() * 5);
        console.log(gestures);
        return gestures;
    }
}

module.exports = {Ai} 