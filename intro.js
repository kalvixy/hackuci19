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
        this.image = this.add.image(400,300, 'background');

        this.text = this.add.text(10,0, "Microaggressions.", {font:"50px Impact", color:"#465354"});
        this.text = this.add.text(75,75, "Microaggressions are the subtle or unintential actions,", {font:"20px", color:"#465354"});
        this.text = this.add.text(75,100, " words, and statements that happen in our everyday lives.", {font:"20px", color:"#465354"});
        this.text = this.add.text(75,150, "Press [space] to see how much you know about microagressions.", {font:"19px", color:"#465354"});

        this.input.keyboard.on('keyup', function(e) {
            if(e.key == " ") {
                this.scene.start("choices");
            }
        }, this);
        
    }
}