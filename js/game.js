class Game{
    constructor(){}
    getState(){
       var gameStateRef =  database.ref('gameState');
       gameStateRef.on('value',function(data){

          gameState = data.val();

       })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Start Game",500,300);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var displayPos = 130;
            for(var plr in allPlayers){
                if(plr === 'player'+player.index){
                    fill('red');
                }else{
                    fill('black');
                }
                displayPos = displayPos+20;
                textSize(15);
                text(allPlayers[plr].name+':'+allPlayers[plr].distance,500,displayPos);
            }
        }
        if(keyDown('up') && player.index !== null){
            player.distance = player.distance+50;
            player.update();
        }
    }
}