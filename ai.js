class Ai {
    constructor(ai) {
        this.player = ["playerOne", "playerTwo"]:
        this.score = 0;
        this.selectedGesture = "";
        this.gestures = ["Rock", "Paper", "scissors", "Lizard", "Spock"]
    }

    chooseGesture(); {
        this.gestures = Math.floor(Math.random() * 3);
    }
}