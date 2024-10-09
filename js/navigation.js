window.onload = function (){setup()}

function setup(){

    console.log("setup started")

    let divNavigation = d3.select("#navigation");

    let svgNavigation = divNavigation
        .append("svg")
        .attr("height", "80px")
        .attr("width", "200px");

    let persona = new phrase ("persona", "misguided romantic")

    persona.render(svgNavigation)

}



class phrase {

    constructor(id, text){
        this.id = id
        this.text = text
    }

    render(svgContainer){

        let g = svgContainer.select("#" + this.id)

        if (!g.empty()) {
            
            console.log("g no exist yet")
            
            g = svgContainer.append("g")
                .attr("id", this.id)
                .attr("transform", "translate(20, 20)")
                
            g.append("text")
                .text(this.text);


        } else {
            console.log("g exists already")
        }

    }

    getLength(){

    }


}

function getTextElementWidth(textElement){
    d3.select('text').node().getBBox().width
}



function getScreenDimensions(){

    return {
        width: window.innerWidth,
        height: window.innerHeight
    }

}
