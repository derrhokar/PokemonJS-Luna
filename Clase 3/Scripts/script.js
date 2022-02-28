// Pasos a Seguir
// 1) Pedir al usuario que se elija un pokemon de los 3 iniciales (error en caso contrario).
// 2) Darle la opción al usuario de evolucionarlo a través de subida de niveles (en caso contrario se termina la funcionalidad).
// 3)Repetir el Proceso 
// 4)Una vez que no pueda evolucionar más, darle la opción de subir a nivel 100
let nivel = 5
 let choosing = prompt('Elija un inicial escribiendo su nombre:\n1)Charmander\n2)Squirtle\n3)Bulbasaur');

 if (choosing == 'Charmander'  || choosing =='Squirtle' || choosing =='Bulbasaur'){
    let opcion = confirm('¿Deseas evolucionar a tu inicial?')
    if(opcion == true){
        for (nivel=5; nivel<16;nivel++){
            console.log(`Felicidades, tu ${choosing} ha subido al nivel ${nivel}`)
        }
        if(choosing =='Charmander'){
            console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Charmeleon`)
            choosing ='Charmeleon'
            
        }
        else if(choosing =='Squirtle'){
            console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Wartortle`)
            choosing ='Wartortle'
        }
        else{
            console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Ivysaur`)
            choosing ='Ivysaur' 
        }
        let opcion2 = confirm('¿Deseas volver a evolucionar a tu inicial?')
        if(opcion2 == true){
            if(choosing == 'Charmeleon'  || choosing =='Wartortle'){
                for (nivel=16; nivel<36;nivel++){
                    console.log(`Felicidades, tu ${choosing} ha subido al nivel ${nivel}`)
                }
                if(choosing == 'Charmeleon'){
                    console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Charizard`)
                    choosing ='Charizard'
                }
                else{
                    console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Blastoise`)
                    choosing ='Blastoise'
                }    
            }
            else{
                for (nivel=16; nivel<32;nivel++){
                    console.log(`Felicidades, tu ${choosing} ha subido al nivel ${nivel}`)
                }
                console.log(`Felicidades, tu ${choosing} acaba de evolucionar a Venusaur`)
                choosing ='Venusaur'   
            }
            let opcion3 = confirm('¿Deseas llevar tu pokemon al nivel 100?')
            if(opcion3 ==true){
                while(nivel<100){
                    nivel++
                }
                console.log(`Felicidades, tu ${choosing} ha alcanzado el nivel 100`)
            }
            else{
                console.log('Tu pokemon ha llegado a su última etapa')
            }
        }
        else{
            console.log('Tu pokemon ha evolucionado una vez')
        }

        
    } 
    else{
        console.log('Disfruta de tu pokemon')
    }
    alert(`Resultado final: Tu pokemon inicial es ${choosing} y está al nivel ${nivel}`)
 }
 else{
     console.log('No has elegido tu inicial, vuelve a intentarlo')
 }



