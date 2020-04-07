class list{
    constructor(game){
        this.game= game;
        this.x = WINDOW_START_X;
        this.y = WINDOW_START_Y ;
        this.arr_windows= [];
        this.createArr_Windows();
    }

    update() {
        this.arr_windows.forEach((windows) => {
            windows.update();
            });
    }

    createArr_Windows()  {
        let arr=0;
        for (let i=0; i<7; i++){
            this.x=WINDOW_START_X + arr;
            this.y=WINDOW_START_Y;
            let newW = new windows(this.game,this.x,this.y);
            arr+=20;
            this.arr_windows.push(newW);
        }
    }
        
        draw(){
            this.arr_windows.forEach((windows) => {
                windows.draw();
            });
        }
    }