class choices extends Phaser.Scene {
    constructor () {
        super({key:"choices"});
    }

    preload ()
    {
        this.load.image('background', 'assets/simple_background.png');   
    }

    create ()
    {
        this.image = this.add.image(400,300, 'background');

        //first create the array of object 'phrase'
        //'phrase' has 2 values: message and meaning


        
    }
}