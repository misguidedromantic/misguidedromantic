class div {
    
    constructor(id){
        this.id = id
        this.#createElement()
    }

    #createElement(){

        this.element = d3.select('body')
            .append('div')
            .attr('id', this.id)

    }

    #renderStyles(){
        
        this.element.style('position', 'absolute')
            .style('left', this.posX)
            .style('top', this.posY)
            .style('')

    }

    setPosition(x, y){
        this.posX = x
        this.posY = y
    }

    setDimensions(width, height){
        this.width = width
        this.height = height
    }

}