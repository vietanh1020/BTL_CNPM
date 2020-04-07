class ball{
    constructor(game){
        this.game =game;
        this.image= null;

        this.x = BALL_START_X;
        this.y = BALL_START_Y;
        

        this.loadImage();
    }

    loadImage(){
        this.image = new Image;
        this.image.src = 'images/ball.png';
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
