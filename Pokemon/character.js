class character extends GameObject{
    constructor(config){
        super(config);
        //contador para medir la distancia restante hasta terminar 1 unidad de movimiento
        this.moveDistance = 0;
        //propiedad para que sólo se mueva el personaje controlado por el jugador
        this.playableCharacter = config.playableCharacter || false;

        this.directionUpdate = {
            'Up': ['y',-1],
            'Down': ['y',1],
            'Left': ['x',-1],
            'Right': ['x',1]
        }
    }
    update(state){
        this.updatePosition();
        this.updateSprite(state);
        console.log(state.map.isSpaceTaken(this.x, this.y, this.direction))
        if(this.playableCharacter && this.moveDistance === 0 && state.arrow){
            this.direction =state.arrow;
            this.moveDistance = 16;
        }
    }

    updatePosition(){
        if(this.moveDistance > 0){
            const [axis, direction] = this.directionUpdate[this.direction];
            this[axis] += direction;
            this.moveDistance -=1;
         }
    
    }
    updateSprite(state){
        if(this.playableCharacter && this.moveDistance === 0 && !state.arrow){
        this.sprite.setAnimation('idle'+this.direction);
        return;
        }
        if(this.moveDistance > 0){
            this.sprite.setAnimation('walk'+this.direction)
        }
    } 
}