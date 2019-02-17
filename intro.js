class intro extends Phaser.Scene {
    constructor () {
        super({key: "intro"});
    }

    preload ()
    {
        this.load.image('background', 'assets/simple_background.png');   
    }

    create ()
    {
        var width = this.sys.game.config.width; 
        var height = this.sys.game.config.height; 
        this.cameras.resize(width,height);
        this.cameras.main.setBackgroundColor('#f7dba7');
        //this.image = this.add.image(game.renderer.width,game.renderer.height, 'background');

        this.text = this.add.text(width/2 * 0.2,60, "Microaggressions.", {font:"75px Impact", color:"#465354"});
        this.text = this.add.text(width/2 * 0.2,150, "Microaggressions are the subtle or unintential actions,", {font:"20px", color:"#465354"});
        this.text = this.add.text(width/2 * 0.2,175, " words, and statements that happen in our everyday lives.", {font:"20px", color:"#465354"});
        this.text = this.add.text(width/2 * 0.2,height/2 * 0.8, "Press [space] to see how much you know about microagressions.", {font:"bold 19px ", color:"#465354"});

        this.input.keyboard.on('keyup', function(e) {
            if(e.key == " ") {
                this.scene.start("choices");
            }
            if(e.key == "p") {
                this.scene.start("play.js");
            }
        }, this);
        
    }
    
}

var aggressions;
var friendly;
var rand1;
var arg;
var yay;
var score = 0; 
var scoreText;
var correct;
