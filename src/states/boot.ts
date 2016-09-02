


import Phaser from 'phaser';

export default class Boot extends Phaser.State {

    preload() {
    }

    create() {

        //  Unless you specifically need to support multitouch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
           // this.stage.scale.pageAlignHorizontally = true;
        }
        else {
            //  Same goes for mobile settings.
        }
        var text = "Hello World!";
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };

        this.game.add.text(0, 0, text, style);
        this.game.state.start('Preloader', true, false);

    }

}