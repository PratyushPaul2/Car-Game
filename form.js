class Form{
    constructor(){
       this.input=createInput("name");
       this.button=createButton("play");
       this.greeting=createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(550,0);
        this.input.position(550,160);
        this.button.position(550,200);
        
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(550,160);
        });
    }

}