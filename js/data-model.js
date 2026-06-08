class Songs {
    #songs = null

    async loadData(){
        const data = await d3.csv('./data/songs.csv')
        this.#songs = data.map(d => new Song (d))
        return Promise.resolve(this.songs)
    }

    get songs(){
        return this.#songs
    }
}

class Song {
    constructor(d){
        this.id = d.short_title
        this.title = d.title
        this.releaseId = d.release_id
        this.selected = false
    }

    get lyrics(){
        return [
            new Line("I'm a doll and nothing more"),
            new Line("deny all my rights"),
            new Line("adore me and I'll want to be in your bed tonight"),
            new Line("it takes so much to remain this high"),
            new Line("I keep on taking, still I need you to try"),
            new Line("cause when you're open I can feed off attention"),
            new Line("your eyes trained on mine (on mine)")
        ]   
    }
}


class Motif {
    notes = []

    constructor(divisionScheme, key){
        this.divisionScheme = divisionScheme
        this.key = key
    }
}

class Section {

    constructor(phrases){
        this.phrases = []
    }
}

class Phrase {

    motifs = []

    get pitchCounts(){
        
    }

    get pitches (){
        
    }

    get notes(){
        return this.motifs.flatMap(motif => motif.notes)
    }

    get uniquePitches(){
        
        return [...new Set(this.notes.map(note => note.pitch))];

    }

    get anchor(){
        return this.notes.find(d => d.constructor.name === 'Anchor')
    }

}

class MelodyNote {
    constructor(pianoKeyNumber, metricPosition){
        this.pianoKeyNumber = pianoKeyNumber
        this.metricPosition = metricPosition
        this.chomaticFlats = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']
    }

    get scientificName () {
        return this.pitchClass + this.octave
    }

    get pitchClassNumber(){
        return this.pianoKeyNumber % 12 - 3
    }

    get pitchClass(){
        return this.chomaticFlats[this.pitchClassNumber - 1]
    }

    get octave(){
        return Math.floor(this.pianoKeyNumber / 12) + 1
    }

}

class Anchor extends MelodyNote {

}

class MetricPosition {
    constructor(beat, subdivision, tick){

    }
}