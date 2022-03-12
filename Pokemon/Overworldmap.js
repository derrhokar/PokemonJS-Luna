class OverworldMap {
    constructor(config){
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc; 
    }

    drawLowerImage(context, fixedCamera) {
        context.drawImage(this.lowerImage, 
            utilities.gridWidth(10.5)-fixedCamera.x,
            utilities.gridWidth(6)-fixedCamera.y)
      }

      drawUpperImage(context, fixedCamera) {
        context.drawImage(this.upperImage, 
            utilities.gridWidth(10.5)-fixedCamera.x,
            utilities.gridWidth(6)-fixedCamera.y
            )
      } 
      isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utilities.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
      }
      
    }

    window.OverworldMaps = {
    myHouseUpper: {
        lowerSrc: '/Images/screenshot.png',
        upperSrc: 'Images/screenshotUpper.png',
        gameObjects: {
            protag: new character({
                playableCharacter:true,
                x:utilities.gridWidth(4),
                y:utilities.gridWidth(4),
            }),

            npc: new character({
                x:utilities.gridWidth(4),
                y:utilities.gridWidth(5),
                src: '/Images/dolape.png'
            })
            
        },
        walls: {
            [utilities.asGridCoord(7,6)] : true,
            [utilities.asGridCoord(8,6)] : true,
            [utilities.asGridCoord(7,7)] : true,
            [utilities.asGridCoord(8,7)] : true,
          },
      
          
    },
    forest: {
        lowerSrc: 'Images/maptest.png',
        upperSrc: 'Images/maptestUpper.png',
        gameObjects:{
            protag: new GameObject({
                x:3,
                y:4,
            }),
            npc: new GameObject({
                x:7,
                y:2,
            src: '/Images/dolape.png'
            })
        }
    }
}

var music ={
    battle: new Howl({
        src:['/battle.mp3'],
        autoplay: true  
    })
}