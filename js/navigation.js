window.onload = function (){setup()}

async function setup(){

    console.log("setup started")

    let divNavigation = d3.select("#navigation");

    let svgNavigation = divNavigation
        .append("svg")
        .attr("height", "80px")
        .attr("width", "200px");

    let persona = new phrase ("persona", "misguided romantic", svgNavigation)
    persona.render()
    persona.setPosition(20, 20)

    let domain = new phrase ("domain", "garden", svgNavigation)
    domain.render()
    domain.setPosition(persona.getWidth() + 20 + 5, 20)
}



class phrase {

    constructor(id, text, svgContainer){
        this.id = id
        this.text = text
        this.container = svgContainer
    }

    getGSelection(){
        return d3.select("#" + this.id)
    }

    render(){

        let g = this.getGSelection()

        if (g.empty()) {
            
            let g = this.container.append("g")
                .attr("id", this.id)
                
            g.append("text")
                .text(this.text);


        } else {
            
            console.log("no g selection")

        }

    }

    getWidth(){
        let g = this.getGSelection()
        return g.select("text").node().getBBox().width;
    }

    setPosition(x, y){
        let g = this.getGSelection()
        g.attr("transform", "translate(" + x + "," + y + ")")
    }


}

function getScreenDimensions(){

    return {
        width: window.innerWidth,
        height: window.innerHeight
    }

}
