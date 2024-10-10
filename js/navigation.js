
let personaData = []
let domainData = []

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
                .attr('width', menuDimensions.width)
                .attr('height', menuDimensions.height)

        }

        const menuDiv = createMenuDiv()
        const menuSVG = createMenuSVG()

        
        function createPersonaCarosuel(){
            
            function getPersonaData(){
                return [
                    new persona ("aimless analyst"),
                    new persona ("misguided romantic"),
                    new persona ("james parry"),
                    new persona ("dynastic observer")
                ]
            }

            personaData = getPersonaData()
            return new dial (menuSVG, 'persona', personaData)
        }

        function createDomainCarosuel(){
            
            function getDomainData(){
                return [
                    new domain ("garden"),
                    new domain ("songs"),
                    new domain ("journeys")
                ]
            }

            domainData = getDomainData()
            return createCarosuel(menuSVG, 'domain', domainData)
        }

        let personaCarosuel = createPersonaCarosuel()
        let domainCarosuel = createDomainCarosuel()

        function getCarosuelWidestPoint(carosuel){
            
            const widths = []        

            carosuel.selectAll('text').each(function(d, i) {
                const width = parseInt(Math.round(d3.select(this).node().getBBox().width))
                widths.push(width)
            });

            return d3.max(widths)
        }

        function setDomainCarosuelPosition(){
            let x = getCarosuelWidestPoint(personaCarosuel) + 3
            let y = 0

            domainCarosuel.attr('transform', getTranslateString(x, y))
        }

        function setPersonaCarosuelPosition(){

            let widestPoint = getCarosuelWidestPoint(personaCarosuel)

            personaCarosuel.selectAll('text')
                .attr('x', widestPoint)
                .attr("text-anchor", "end") // Right-align

        }
        
        setPersonaCarosuelPosition()
        setDomainCarosuelPosition()

    }
    
    createMenu()

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

function getTranslateString(x, y){
    return 'translate(' + x + ',' + y + ')'
}

