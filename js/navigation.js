
window.onload = function (){

    function createMenu(){

        const menuPosition = {x: "5px", y: "5px"}
        const menuDimensions = {width: (window.innerWidth - 10) + "px", height: "80px"}

        function createMenuDiv(){
            return d3.select('body')
                .append('div')
                .attr('id','menu')
                .style('position', 'absolute')
                .style('left', menuPosition.x)
                .style('top', menuPosition.y)
                .style('width', menuDimensions.width)
                .style('height', menuDimensions.height)
        }

        function createMenuSVG(){
            return menuDiv.append('svg')
                .attr('id', "menuCanvas")
                .width('width', menuDimensions.width)
                .height('height', menuDimensions.height)

        }

        const menuDiv = createMenuDiv()
        const menuSVG = createMenuSVG()

        function createCarosuelGroup(){
            menuSVG.append('g.carosuel')
        
        }
        
    }
    
    
    createMenu()

}







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

    function getTranslate(d, i){
        let x = 0
        let y = i * 30 + 20
        return 'translate(' + x + ',' + y + ')'
    }
    
    let gPersona = svg.selectAll('g.persona')
        .data(personas)
        .join('g')
        .attr("id", d => d.title)
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