

window.onload = function (){setup()}

function setup(){

    function getPersonaData(){
        return [
            new persona ("aimless analyst"),
            new persona ("misguided romantic"),
            new persona ("james parry"),
            new persona ("dynastic observer")
        ]
    }

    function getDomainData(){
        return [
            new domain ("garden"),
            new domain ("songs"),
            new domain ("journeys")
        ]
    }

 
    function getSVG(){
        return d3.select('#navigation')
            .append('svg')
            .attr('height', '80px')
            .attr('width', '800px');
    }

    const personas = getPersonaData()
    //const domains = getDomainData()
    const svg = getSVG()

    function getTranslate(){
        let x = 0
        let y = i * 30 + 20
        return 'translate(' + x + ',' + y + ')'
    }
    
    let gPersona = svg.selectAll('g.persona')
        .data(personas)
        .join('g')
        .attr('transform', getTranslate)
    
    gPersona.append('text')
        .text(d => d.title)
        .style('font-family', 'tahoma')
        .style('font-size', '14px')
        .style('font-weight', 'bold');
}

class persona {

    constructor(title){
        this.title = title
        this.selected = false
    }

}

class domain {

    constructor(title){
        this.title = title
        this.selected = false
    }

}

function getScreenDimensions(){

    return {
        width: window.innerWidth,
        height: window.innerHeight
    }

}