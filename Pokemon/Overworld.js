class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector('.gameCanvas');
        this.context = this.canvas.getContext('2d');
    }
    init(){
       const image = new Image();
       image.onload = () =>{
           this.context.drawImage(image,0,0)
       };
       image.src = '/Images/Lab.png';

       const x = 5;
       const y = 6;
       
       const shadow = new Image();
       shadow.onload = () =>{
           this.context.drawImage(
               shadow, //Imágen a pintar
               0, //posicionamiento inicial desde la izquierda
               0, //posicionamiento inicial desde arriba
               32, //ancho del corte
               32, //alto del corte
                x*16 -8,//posicionamiento final en el eje x
                y*16 -18,//posicionamiento final en el eje y
                32,//tamaño a lo ancho
               32) //tamaño a lo alto
       };
       shadow.src = '/Images/shadow.png'

       const protag = new Image();
       protag.onload = () =>{
           this.context.drawImage(
               protag, //Imágen a pintar
               0, //posicionamiento inicial desde la izquierda
               0, //posicionamiento inicial desde arriba
               32, //ancho del corte
               32, //alto del corte
                x*16 -8,//posicionamiento final en el eje x
                y*16 -18,//posicionamiento final en el eje y
                32,//tamaño a lo ancho
               32) //tamaño a lo alto
       };
       protag.src = '/Images/dolape.png'
    
}

    
}
