class play extends Phaser.Scene {
    constructor () {
        super({key: "play"});
    }

    preload ()
    {
        this.game.load.image('bubble', 'assets/bubble.png');   
        this.game.load.image('bunny', 'assets/bunny.png');
    }

    create() 
    {
        var width = this.sys.game.config.width; 
        var height = this.sys.game.config.height; 
        this.cameras.resize(width,height);
        this.cameras.main.setBackgroundColor('#0d3f4e');

        var delay = 0;
        for(var i = 0; i < 40; i++) {
            var sprite = game.add.sprite(-100 + (game.world.randomX), 600, 'bubble');

            sprite.scale.set(game.rnd.realInRange(0.1, 0.6));
            var speed = game.rnd.between(4000,6000);
            this.tweens.add({
                targets: image,
                x: 700,
                duration: speed,
                ease: 'Sine.easeInOut',
                loop: 2,
                loopDelay: 2000
            });
        }

        this.add.image(50, 50, 'bunny');
    }

    
}