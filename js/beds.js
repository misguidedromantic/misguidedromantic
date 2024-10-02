class bed {

    constructor(bedID){
        this.id = bedID
        this.x = 50
        this.y = 50
        this.width = 50
        this.height = 50
    }

    setDimensions(width, height){
        this.width = width
        this.height = height
    }

    setPosition(x, y){
        this.x = x
        this.y = y
    }

}