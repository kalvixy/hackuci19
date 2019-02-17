var config = {
            
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    //autoResize = true,
    resolution: window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    
    scene: [ intro, choices, play ]
    /*
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    */
};


var game = new Phaser.Game(config);

