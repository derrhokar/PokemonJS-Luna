class Sprite{
    constructor(config){
        //Incluir la imagen
        this.image = new Image();
        this.image.src =config.src;
        this.image.onload = () =>{
            this.isLoaded = true; 
        }

        //Sombras
        this.shadow = new Image();
        this.useShadow = true;
        if(this.useShadow){
            this.shadow.src = '/Images/shadow.png'
        }
        this.shadow.onload = () =>{
            this.isShadowLoaded = true;
        }
        //Configuración de las animaciones
        this.animation = config.animation ||{
            'idleDown': [[0,0]],
            'idleRight': [[0,1]],
            'idleUp': [[0,2]],
            'idleLeft': [[0,3]],
            'walkDown': [[1,0],[0,0],[3,0],[0,0]],
            'walkRight': [[1,1],[0,1],[3,1],[0,1]],
            'walkUp': [[1,2],[0,2],[3,2],[0,2]],
            'walkLeft': [[1,3],[0,3],[3,3],[0,3]]
        }
        this.current = 'idleDown'; //config.current ||
        this.currentFrame = 0;

        this.frameLimit = config.frameLimit ||10;
        this.frameProgress = this.frameLimit;

        this.gameObject =config.gameObject
    }

    get frame() {
        return this.animation [this.current][this.currentFrame]
      }

    setAnimation(key){
        if(this.current !== key){
            this.current =key;
            this.currentFrame = 0;
            this.frameProgress =this.frameLimit
        }
    }

    updateAnimationProgress(){
        if (this.frameProgress >0){
            this.frameProgress -=1;
            return;
        }

        this.frameProgress =this.frameLimit;
        this.currentFrame += 1

        if(this.frame === undefined){
            this.currentFrame = 0;
        }
    };
    draw (context, fixedCamera){
        const x = this.gameObject.x -8 +utilities.gridWidth(10.5) - fixedCamera.x;
        const y = this.gameObject.y -18 +utilities.gridWidth(6) - fixedCamera.y;
        
        this.isShadowLoaded && context.drawImage(this.shadow, x, y)
        

        const [frameX, frameY] = this.frame;
         this.isLoaded && context.drawImage(this.image,
            frameX*32,
            frameY*32,
            32,
            32,
            x,
            y,
            32,
            32
            )
            this.updateAnimationProgress();
    }
}