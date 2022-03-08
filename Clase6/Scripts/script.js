import moves from './moves.js';
// //Constructor de los pokemon
class Pokemon {
    constructor(name, index, HP, AT, DEF, SPA, SPDEF, SPD, type1, type2, movepool) {
        this.name = name;
        this.index = index;
        this.HP = HP;
        this.AT = AT;
        this.DEF = DEF;
        this.SPA = SPA;
        this.SPDEF = SPDEF;
        this.SPD = SPD;
        this.type1 = type1;
        this.type2 = type2;
        this.movepool = movepool;
    }
}


//Pokemon en forma de objetos

let Bulbasaur = new Pokemon('Bulbasaur', 1, 294, 216, 216, 251, 251, 207, 'plant', 'poison', moves[0]);

let Ivysaur = new Pokemon('Ivysaur', 2, 324, 245, 247, 284, 284, 240, 'plant', 'poison', moves[0]);

let Venusaur = new Pokemon('Venusaur', 3, 364, 289, 291, 328, 328, 284, 'plant', 'poison', moves[0]);

let Charmander = new Pokemon('Charmander', 4, 282, 223, 203, 240, 218, 251, 'fire', null, moves[1]);

let Charmeleon = new Pokemon('Charmeleon', 5, 320, 249, 236, 284, 251, 284, 'fire', null, moves[1]);

let Charizard = new Pokemon('Charizard', 6, 360, 293, 280, 348, 295, 328, 'fire', 'flying', moves[1]);

let Squirtle = new Pokemon('Squirtle', 7, 292, 214, 251, 218, 249, 203, 'water', null, moves[2]);

let Wartortle = new Pokemon('Wartortle', 8, 322, 247, 284, 251, 284, 236, 'water', null, moves[2]);

let Blastoise = new Pokemon('Blastoise', 9, 362, 291, 328, 295, 339, 280, 'water', null, moves[2]);

//Arrays para categorizarlos
const grassStarter = [];

const fireStarter = [];

const waterStarter = [];

grassStarter.push(Bulbasaur, Ivysaur, Venusaur);
fireStarter.push(Charmander, Charmeleon, Charizard);
waterStarter.push(Squirtle, Wartortle, Blastoise);
//Array que engloba todos los pokemon creados, en orden del índice de la pokedex
const pokedex = grassStarter.concat(fireStarter, waterStarter);
let random = Math.round(Math.random() * 15 + 85)
let nivel
let potencia
let efectividad
let ataque
let defensa
let choosingAt = prompt('Elige un pokemon atacante:' + pokedex.map(Pokemon => Pokemon.name + ' '));
let choosingDef = prompt('Elige un pokemon defensor:' + pokedex.map(Pokemon => Pokemon.name + ' '));
let filterAt = pokedex.filter(Pokemon => {
    return (
        Pokemon.name == choosingAt
    )
});

let filterDef = pokedex.filter(Pokemon => {
    return (
        Pokemon.name == choosingDef
    )
})

if (filterAt.length === 0) {
    console.log('Por favor, elige un pokemon de la lista')
} else {
    ataque = filterAt[0].AT
}
if (filterDef.length === 0) {
    console.log('Por favor, elige un pokemon de la lista')
} else {
    defensa = filterDef[0].DEF
}

const extractMoves = filterAt[0].movepool

nivel = parseInt(prompt('Por favor, elige el nivel de tu Pokemon'))
if (isNaN(nivel) || nivel <= 0 || nivel > 100) {
    alert('Los pokemon solo pueden ser de nivel 1 a 100')
} else {
    var elegirMovimiento = prompt('Es tu turno, elige un movimiento de la lista: ' + extractMoves.map(Movement => Movement.name + ' '));

    let filterMove = extractMoves.filter(Movement =>{
        return (
            Movement.name == elegirMovimiento
        )
    });

if (filterMove.length === 0){
    console.log('Por favor, elija un movimiento de la lista')
} else {
    potencia = filterMove[0].power
}

        var dmg = parseInt((((2 * nivel / 5 + 2) * potencia * ataque / defensa) / 50 + 2)*(random/100))
        if (potencia == undefined) {
            console.log(`${choosingAt} está expectante`)
        } else {
            alert(`${choosingAt} usó ${elegirMovimiento}, causando ${dmg} puntos de daño.`)
        }

}