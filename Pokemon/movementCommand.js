class movementCommand {
    constructor(){
        this.heldDirections = [];
        this.map = {
            'ArrowUp': 'Up',
            'W': 'Up',
            'ArrowDown': 'Down',
            'S': 'Down',
            'ArrowLeft': 'Left',
            'A': 'Left',
            'ArrowRight': 'Right',
            'D': 'Right'
            
        }
    }

    get direction(){
        return this.heldDirections[0];
    }
    init(){
        document.addEventListener('keydown', e => {
            const movement =this.map[e.code];
            if(movement && this.heldDirections.indexOf(movement) ===-1){
                this.heldDirections.unshift(movement);
 
            }
        });
        document.addEventListener('keyup', e =>{
            const movement = this.map [e.code]
            const index = this.heldDirections.indexOf(movement);
            if (index > -1){
                this.heldDirections.splice(index, 1);
        
            }
        })
}
}