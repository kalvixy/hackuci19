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

        //create two arrays: aggressions and friendly
        //'aggressions' has 2 values: message and meaning
        //'friendly' holds messages

        
        var phrase = {message:"xyz", meaning: "abc"};
        var phrase2 = {message: "next", meaning: "thank you"};
        //continue for all aggression phrases
        var aggressions = [phrase, phrase2]; //extend line22 until all aggressions are complete

        var nice = "you perf";
        var nice2 = "you qt";
        //continue for all friendly phrases
        var friendly = [nice, nice2]; //extend for all aggressions

        
    }
}