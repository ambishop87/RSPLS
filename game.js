class Game extends Player {
    constructor(player) {
        super(player)
    // two human player options
    this.playerOne;
    this.playerTwo;
}

    runGame(){
        this.displayRules();
        this.chooseGameType();
    }

        displayRules(){
            console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock! \n You may only have two players. \n Choose Single Player to play against computer. \n Choose Multiplayer to play against a friend.");
        }

            chooseGameType(){
                console.log("Choose game type");
                prompt( )
            }

            choosePlayerType(){
                console.log("Choose Player Type");
                this.singlePlayer;
                this.multiplayer;
                const prompt = require("prompt-sync")();
               const input = prompt("Single Player or Multiplayer?");
               console.log('You selected ${input');

            }




}
module.exports = {Game}