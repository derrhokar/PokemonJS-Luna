class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector('.gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.map = null
    }

 startGameLoop(){
     const step = () =>{
         //Limpiar en cada frame
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height)       

        //Inicializar cámara
        const fixedCamera = this.map.gameObjects.protag;
        Object.values(this.map.gameObjects).forEach(object =>{
            object.update({
                arrow: this.movementCommand.direction,
                map:this.map,
        })
    })

        //Inicializar las diferentes imágenes
         this.map.drawLowerImage(this.context,fixedCamera);

         Object.values(this.map.gameObjects).forEach(object =>{
            object.sprite.draw(this.context, fixedCamera);
             })
            
        

        this.map.drawUpperImage(this.context, fixedCamera);

         
        requestAnimationFrame(() =>{
            step();
        })
     }
     step();
 }
    init(){
        this.map = new OverworldMap(window.OverworldMaps.myHouseUpper);
        console.log(this.map.walls)
        this.movementCommand = new movementCommand();
        this.movementCommand.init();

  this.startGameLoop();
    }
}