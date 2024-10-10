
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

        function createCarosuel(id, data, SVGcontainer){

            let gCarosuel = SVGcontainer.append('g')
                .attr('class', 'carosuel')
                .attr('id', id)

            let gSlots = gCarosuel.selectAll('g.' + id)
                .data(data)
                .join('g')
                .attr("id", d => d.title)
            
            gSlots.append('text')
                .text(d => d.title)
                .style('font-family', 'tahoma')
                .style('font-size', '14px')
        
        }

        function createPersonaCarosuel(){
            
            function getPersonaData(){
                return [
                    new persona ("aimless analyst"),
                    new persona ("misguided romantic"),
                    new persona ("james parry"),
                    new persona ("dynastic observer")
                ]
            }

            let personaData = getPersonaData()
            return createCarosuel('persona', personaData, menuSVG)
        }

        function createDomainCarosuel(){
            
            function getDomainData(){
                return [
                    new domain ("garden"),
                    new domain ("songs"),
                    new domain ("journeys")
                ]
            }

            let domainData = getDomainData()
            return createCarosuel('domain', domainData, menuSVG)
        }

        
        let personaCarosuel = createPersonaCarosuel()
        let domainCarosuel = createDomainCarosuel()

        console.log(personaCarosuel.selectAll('text').node().getBBox().width)

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