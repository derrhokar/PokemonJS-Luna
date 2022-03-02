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
const sludgeBomb = new Movement('Bomba Lodo', 'poison',90,100,16,'special')
const earthquake = new Movement('Earthquake', 'ground',100,100,16,'physical')