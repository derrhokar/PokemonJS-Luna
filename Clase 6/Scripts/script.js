//Constructor de los pokemon
class Pokemon {
    constructor(nombre,index, HP, AT, DEF, SPA, SPDEF, SPD, tipo1, tipo2) {
        this.nombre = nombre;
        this.index =index;
        this.HP = HP;
        this.AT = AT;
        this.DEF = DEF;
        this.SPA = SPA;
        this.SPDEF = SPDEF;
        this.SPD = SPD;
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
    }
}
//Pokemon en forma de objetos
let Bulbasaur = new Pokemon('Bulbasaur',1, 294,216,216,251,251,207,'Planta','Veneno');

let Ivysaur = new Pokemon('Ivysaur',2, 324,245,247,284,284,240,'Planta','Veneno');

let Venusaur = new Pokemon('Venusaur',3, 364,289,291,328,328,284,'Planta','Veneno');

let Charmander = new Pokemon('Charmander',4,282,223,203,240,218,251,'Fuego',null);

let Charmeleon = new Pokemon('Charmeleon',5,320,249,236,284,251,284,'Fuego',null);

let Charizard = new Pokemon('Charizard',6,360,293,280,348,295,328,'Fuego','Volador');

let Squirtle = new Pokemon('Squirtle',7,292,214,251,218,249,203,'Agua', null);

let Wartortle = new Pokemon('Wartortle',8,322,247,284,251,284,236,'Agua', null);

let Blastoise = new Pokemon('Blastoise',9,362,291,328,295,339,280,'Agua', null);
//Arrays para categorizarlos
const inicialPlanta = [];

const inicialFuego = [];

const inicialAgua = [];

inicialPlanta.push(Bulbasaur,Ivysaur,Venusaur);
inicialFuego.push(Charmander,Charmeleon,Charizard);
inicialAgua.push(Squirtle,Wartortle,Blastoise);
//Array que engloba todos los pokemon creados, en orden del índice de la pokedex
const pokedex = inicialPlanta.concat(inicialFuego, inicialAgua);

let nivel
let potencia
let efectividad
let stab = 1
var pokemons
let choosing =prompt('Elige un pokemon atacante' + pokemons);

pokedex.forEach (Pokemon =>console.log(Pokemon.name))
    


switch (choosing) {
    default:
        console.log('Por favor, elige un pokemon de la lista')
    case Pokemon:
        ataque = Pokemon.AT
        defensa = Pokemon.SPDEF
        break;
}

/*
nivel = parseInt(prompt('Por favor, elige el nivel de tu Pokemon'))
if (isNaN(nivel) || nivel <= 0 || nivel > 100) {
    alert('Los pokemon solo pueden ser de nivel 1 a 100')
} else {
    if (choosing == 'Pokemon') {
        var elegirMovimiento = prompt('Es tu turno, elige un movimiento de la lista\n1)A Bocajarro\n2)Puño Trueno\n3)Roca Afilada\n4)Psicocorte')
    } else {
        var elegirMovimiento = prompt('Es tu turno, elige un movimiento de la lista\n1)Vendaval\n2)Hidrobomba\n3)Pulso Umbrío\n4)Rayo Hielo')
    }

    function calcularDaño(movimiento) {
        switch (movimiento) {
            case 'A Bocajarro':
                potencia = 120
                efectividad = 0.5
                stab = 1.5
                break;
            case 'Puño Trueno':
                potencia = 75
                efectividad = 4
                break;
            case 'Roca Afilada':
                potencia = 100
                efectividad = 2
                break;
            case 'Psicocorte':
                potencia = 70
                efectividad = 1
                stab = 1.5
                break;
            case 'Vendaval':
                potencia = 110
                efectividad = 2
                stab = 1.5
                break;
            case 'Hidrobomba':
                potencia = 110
                efectividad = 1
                stab = 1.5
                break;
            case 'Pulso Umbrío':
                potencia = 80
                efectividad = 0.5
                break;
            case 'Rayo Hielo':
                potencia = 90
                efectividad = 1
                break;
            default:
                alert('Ese no es un movimiento válido. Por favor, escoge un movimiento válido.')
        }
    }
    calcularDaño(elegirMovimiento)
    var dmg = parseInt((((2 * nivel / 5 + 2) * potencia * ataque / defensa) / 50 + 2) * stab * efectividad)
    if (potencia == undefined) {
        console.log(`${choosing} está expectante`)
    } else {
        alert(`${choosing} usó ${elegirMovimiento}, causando ${dmg} puntos de daño.`)
    }

} */