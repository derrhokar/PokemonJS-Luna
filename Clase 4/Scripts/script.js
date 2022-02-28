// 1)Declarar las variables de nivel, potencia de movimientos, efectividad,stab, ataque y defensa 
//(se usarán en la fórmula de daño).
// 2) Dejar que el usuario elija un pokemon de una lista para que sea su atacante, el cual solo tendrá asignado un valor de ataque
// (el otro será el defensor, con solo la defensa como valor).
// 3)Pedir al usuario que elija un nivel (solo valores del 1 al 100).
// 4) Crear listas de movimientos para cada pokemon, dentro de una función.
// 5) Calcular el daño con todos los valores previamente establecidos.
// 6) Mostrar el daño en pantalla.


let nivel
let potencia
let efectividad
let stab = 1
let choosing = prompt('Elija su pokemon atacante\n1)Gallade\n2)Pelliper')
let ataque
let defensa
switch (choosing) {
    default:
        console.log('Por favor, elige un pokemon de la lista')
    case 'Gallade':
        ataque = 383
        defensa = 328
        break;
    case 'Pelliper':
        ataque = 226
        defensa = 329
        break;
}
nivel = parseInt(prompt('Por favor, elige el nivel de tu Pokemon'))
if (isNaN(nivel) || nivel<=0 ||nivel>100) {
    alert('Los pokemon solo pueden ser de nivel 1 a 100')
} else {
    if (choosing == 'Gallade') {
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
    if(potencia ==undefined){
        console.log(`${choosing} está expectante`)
    }
    else{
        alert(`${choosing} usó ${elegirMovimiento}, causando ${dmg} puntos de daño.`)
    }
    
}