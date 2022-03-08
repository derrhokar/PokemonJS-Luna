class Movement {
    constructor(name,type, power, accuracy, pp, category){
        this.name =name;
        this.type =type;
        this.power =power;
        this.accuracy =accuracy;
        this.pp =pp;
        this.category =category;
    }
}

const gigaDrain = new Movement('GigaDrain', 'plant',75,100,16,'special')
const sludgeBomb = new Movement('Sludge Bomb', 'poison',90,100,16,'special')
const earthquake = new Movement('Earthquake', 'ground',100,100,16,'physical')
const dragonPulse = new Movement('Dragon Pulse', 'dragon',90,100,21,'special')
const hurricane = new Movement('Hurricane','flying',120,100,21,'special')
const fireBlast = new Movement('Fire Blast','fire',120,85,11,'special')
const solarBeam = new Movement('Solar Beam','grass',130,100,11,'special')
const surf = new Movement('Surf','water',95,100,21,'special')
const icePunch = new Movement('Ice Punch','ice',75,100,21,'physical')

const grassMovepool = [gigaDrain,sludgeBomb,earthquake,dragonPulse]
const fireMovepool = [dragonPulse,hurricane,fireBlast,solarBeam]
const waterMovepool = [icePunch,surf,dragonPulse,earthquake]
const moves = [grassMovepool,fireMovepool,waterMovepool]

export default moves;
