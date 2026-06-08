const width = 635
const height = 889


window.onload = async () => {

    const notes = await extractSongsData()


    const main = d3.select('body').append('main').style('padding', '50px')
    const svg = main.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background-color', Colours.backgroundRaised)


    const duplicatePitchCount = (pkNum, i) => {
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
        .attr('x', (d, i) => duplicatePitchCount(d, i) * 11)
        .attr('y', d => (highestPitch - d) * 11)


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
