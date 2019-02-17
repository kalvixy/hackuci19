class choices extends Phaser.Scene {
    constructor () {
        super({key:"choices"});
    }

    preload ()
    {
        this.load.image('background', 'assets/simple_background.png');   
    }
    

    //to reset string upon clicked event


    create ()
    {
        var width = this.sys.game.config.width; 
        var height = this.sys.game.config.height; 
        this.cameras.resize(width,height);
        this.cameras.main.setBackgroundColor('#f7dba7');
        
        this.add.text(width/2 *0.6, 70, "Click on the microaggression:", {font:"bold 30px ", color:"#465354"})

        //create two arrays: aggressions and friendly
        //'aggressions' has 2 values: message and meaning
        //'friendly' holds messages
        
        var phrase = {message:"When a female student asks a male professor for extra help on an engineering assignment, he asks “What do you need to work on this for anyway?", 
                      meaning: "Women are less capable in math and science."};
        var phrase2 = {message: "Female doctor mistaken for a nurse.", 
                       meaning: "Women occupy nurturing positions and are unable to take on more challenging tasks."};
        var phrase3 = {message: "You’re a girl, you don’t have to be good at math.", 
                       meaning: "Women are less capable in math and science."};
        var phrase4 = {message: "An advisor asks a female student if she is planning on having children while in postdoctoral training.", 
                       meaning: "Women should be married during child-bearing ages because that is their primary purpose."};
        var phrase5 = {message: "Labeling an assertive female committee chair/dean as a “b**ch,” while describing a male counterpart as a 'forceful leader'", 
                       meaning: "Women are out of line when they are aggressive."};
        var phrase6 = {message: "“I would have never guessed that you were a scientist.”", 
                       meaning: "It is unusual for a woman to have strong mathematical or science skills."};
        var phrase7 = {message: "In class, an instructor tends to call on male students more frequently than female ones.", 
                       meaning: "The contributions of female students are less worthy than the contributions of male students."};
        var phrase8 = {message: "A person asks a woman her age and, upon hearing she is 31, looks quickly at her ring finger.", 
                       meaning: "Women should be married during child-bearing ages because that is their primary purpose."};

        //continue for all aggression phrases
        aggressions = [phrase, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8]; //extend line22 until all aggressions are complete

        var nice = "I like your outfit.";
        var nice2 = "Can you help me with this? I can't figure it out.";
        var nice3 = "I admire your work ethic.";
        var nice4 = "I like your hair.";
        var nice5 = "You're so funny!";
        var nice6 = "I love your confidence.";
        var nice7 = "I didn't think about that. You're so smart!";
        var nice8 = "You should hang out with us sometime!";


        //continue for all friendly phrases
        friendly = [nice, nice2, nice3, nice4, nice5, nice6, nice7, nice8]; //extend for all aggressions

        /*********************************************************************************************************************** */
        /*********************************************************************************************************************** */
        var i = 0;
        
        arg = this.add.text(width/2 * 0.2, 250, " ", {font:'bold 20px Arial', color:"#465354"} );
        yay = this.add.text(width/2 * 0.2, 350, " ", {font:'bold 20px Arial', color:"#465354"});
        correct = this.add.text(width/2 * 0.2, 420, " ", {font: 'bold 20px Arial', color: "#465354"});

        var argIsPressed = false;
        var yayIsPressed = false;
        scoreText = this.add.text(20,20, 'score: 0',   {font:'15px ', color: "#465354"});
            reset();

            arg.setInteractive().on('pointerover', () => arg.setStyle({color: "#f1ab86"})
                .on('pointerdown', () => right()))
                .on('pointerout', () => arg.setStyle({color : "#465354"}));
            yay.setInteractive().on('pointerover', () => yay.setStyle({color: "#f1ab86"})
                .on('pointerdown', () => wrong()))
                .on('pointerout', () => yay.setStyle({color : "#465354"}));

    }
    
    
}

function reset() {
    rand1 = Math.floor(Math.random() * aggressions.length);
    var rand2 = Math.floor(Math.random() * friendly.length);

    arg.setText(aggressions[rand1].message);
    yay.setText(friendly[rand2]);
}

function wrong(){
    arg.setStyle({color: "5dc4a8"});
    yay.setStyle({color: "db4C40"});
    score = score -60;
    scoreText.setText('score: ' + score);
    
    correct.setText("Hidden meaning: " + aggressions[rand1].meaning);
    //this.add.text(width/2 * 0.2, 420, aggressions[rand1].meaning, {font: 'bold 20px Arial', color: "#465354"});
}

function right(){
    arg.setStyle({color: "5dc4a8"});
    yay.setStyle({color: "db4C40"});
    score = score +100;
    scoreText.setText('score: ' + score);

    correct.setText("Correct!");

}