class Form{
    constructor(){
        this.title = createElement('H1')
        this.input = createInput('ENTER YOUR NAME')
        this.button = createButton('NEXT')
        this.greeting = createElement('H3')
    }
    display(){
        
        this.title.html('MULTIPLAYER CAR RACER')
        this.title.position(370,100)

        
        this.input.position(500,200)

        
        this.button.position(550,300)

        
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           this. greeting.html('HELLO '+player.name);
           this.greeting.position(500,150);
        })

    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
        
    }

}