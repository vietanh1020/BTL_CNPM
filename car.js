class car{
    constructor(game){
        this.game =game;
        this.image= null;

        this.x = CAR_START_X;
        this.y = CAR_START_Y;
        

        this.loadImage();
    }

    loadImage(){
        this.image = new Image;
        this.image.src = 'images/carcat.png';
    }




    update(){
        this.x+=2;
    }

    draw(){

        this.game.context.drawImage(
            this.image,
            this.x,
            this.y,
        );
    }
}
