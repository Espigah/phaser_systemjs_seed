
import Phaser from 'phaser';
import Boot from './states/boot';

export default class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, 'game-stage', null);
        this.state.add('Boot', Boot, false);
        this.state.start('Boot');
    }
}