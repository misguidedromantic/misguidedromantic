const width = 635
const height = 889


window.onload = async () => {

    const card = getCard()
    const song = await getSong('toiling avoiding')
    renderSongOnCard(card, song)
}

function getCard(){
    const card = new ArtCard(new Structure())

    card.main.style('position', 'relative')
        .style('width', width + 'px')
        .style('height', height + 'px')
        .style('padding', '50px')

    card.svg.attr('width', card.width)
        .attr('height', card.height)
        .style('background-color', Colours.backgroundRaised)
        .style('opacity', 1)

    return card
}

async function getSong(title){
    const model = new DataModel()
    const songs = await model.loadSongsData()
    const song = songs.find(song => song.title === title)
    await song.loadMotifsData()
    return Promise.resolve(song)
}

function renderSongOnCard(card, song){

    function renderPitchCounts(svg = card.svg, notes = song.notes){
        
        const pitchTally = (pkNum, i) => {
            return notes.slice(0, i).reduce((acc, current) => (current === pkNum ? acc + 1 : acc), 0)
        }

        const highestPitch = Math.max(...notes)

        svg.selectAll('rect.pitchCounter')
            .data(notes)
            .join('rect')
            .attr('class', 'pitchCounter')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', Colours.main)
            .attr('x', (d, i) => pitchTally(d, i) * 11)
            .attr('y', d => (highestPitch - d) * 11)
    }

    renderPitchCounts()

}

function loadArtCard(card, song) {


    

    configureView()
    renderPitchCounts()
}

class ArtCard {
    #structure = null

    width = 635
    height = 889

    constructor(structure){
        this.#structure = structure
    }

    get svg(){
        return this.#structure.svg
    }

    get main(){
        return this.#structure.main
    }

    get aspectRatio(){
        return this.width / this.height
    }

    get artBoxDimensions(){
        return {
            width: 540,
            height: 340
        }
    }
}


class Structure {
    #main = null
    #svg = null

    get main(){
        if(!this.#main){
            this.#main = d3.select('body').append('main')
        }
        return this.#main
    }

    get svg(){
        if(!this.#svg){
            this.#svg = this.main.append('svg')
        }
        return this.#svg
    }
}


class Colours {

    static #greens = [
        '#384D48'
    ]


    static green(darknessIndex) {
        return this.#greens[darknessIndex]
    }


    
    static get captionText(){
        return '#6E7271'
    }

    static get captionReverse(){
        return '#D8D4D5'
    }

    static get main(){
        return this.green(0)
    }

    static get mainReverse(){
        return '#F5F5F5'
    }

    static get backgroundRaised (){
        return '#E2E2E2'
    }
}
