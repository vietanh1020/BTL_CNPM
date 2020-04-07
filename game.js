class game {
    constructor(){
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    init(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);
        
        this.car = new car(this);
        this.windows= new windows(this);
        this.list= new list(this);





    }
    loop() {
        this.update();
        this.draw();
        setTimeout( () => this.loop(), 20);
        
        
    }

    update(){
       this.car.update();
       this.list.update();
    }


    draw(){
        this.context.clearRect(CAR_START_X,CAR_START_Y,1090,CAR_START_Y+60); 
        this.car.draw();
        this.list.draw();
    }
}

var g = new game();