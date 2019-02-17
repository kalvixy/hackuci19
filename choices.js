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
        //testing

        
        var phrase = {message:"When a female student asks a male professor for extra help on an engineering assignment, he asks “What do you need to work on this for anyway?", 
                      meaning: "Women are less capable in math and science."};
        var phrase2 = {message: "Female doctor mistaken for a nurse.", 
                       meaning: "Women occupy nurturing positions and are unable to take on more challenging tasks."};
        var phrase3 = {message: "You’re a girl, you don’t have to be good at math.”", 
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
        var aggressions = [phrase, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8]; //extend line22 until all aggressions are complete

        var nice = "I like your outfit.";
        var nice2 = "Can you help me with this? I can't figure it out.";
        var nice3 = "I admire your work ethic.";
        var nice4 = "I like your hair.";
        var nice5 = "You're so funny!";
        var nice6 = "I love your confidence.";
        var nice7 = "I didn't think about that. You're so smart!";
        var nice8 = "You should hang out with us sometime!";


        //continue for all friendly phrases
        var friendly = [nice, nice2, nice3, nice4, nice5, nice6, nice7, nice8]; //extend for all aggressions

        
    }
}