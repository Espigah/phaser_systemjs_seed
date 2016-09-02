
import Game from './game';


function start() {
    document.getElementById("game-stage").innerHTML = "";
    //let game = new Phaser.Game(800, 600, Phaser.AUTO,'game-stage');

    //game.state.add('State', Test);
    // game.state.start('State');
   
    var game = new Game();

}

if (document.readyState === "complete") {
    start();
} else {
    window.onload = start;
}