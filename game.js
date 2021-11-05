const { Player } = require("./Player");

class Game extends Player {
    constructor(Player) {
        super(Player)
    // two human player options
    this.player = ["PlayerOne", "playerTwo"];
}

    runGame(){
        this.displayRules();
        this.choosePlayerType();
    }

        displayRules(){
            console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock! \n You may only have two players. \n Choose Single Player to play against computer. \n Choose Multiplayer to play against a friend.");
        }

            choosePlayerType(){
                console.log("Choose Player Type");
                this.singlePlayer;
                this.multiplayer;
                const prompt = require("prompt-sync")();
               const input = prompt("Single Player or Multiplayer?");
               console.log('You selected ${input');
               return userInput;

            }




}
module.exports = {Game}