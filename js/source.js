async function extractSongsData(){
    const data = await d3.csv('./data/songs.csv')
    const motifs = await d3.csv('./data/motifs.csv')

    const noteTest = new MelodyNote (33, 14)
    const notes = motifs.flatMap(motif => motif.melody_pitches.split(' '))
    return notes
}

function getToilingStructure(){



    

    
    const sectionSequence = 'A-B-A^'

    const phraseSequence = []
    phraseSequence.push(['A','a a a a']) //inst. intro
    phraseSequence.push(['A','a a a'])
    phraseSequence.push(['B','a a^'])
    phraseSequence.push(['A','a a']) //refrain
    phraseSequence.push(['C','a a b b^'])
    phraseSequence.push(['A','a a']) //refrain
    phraseSequence.push(['C','a a b b^'])
    phraseSequence.push(['A','a a']) //inst.
    phraseSequence.push(['C','b b^'])
    phraseSequence.push(['A','a a']) //refrain
    phraseSequence.push(['B','a a^'])
    phraseSequence.push(['A','a']) //refrain
    phraseSequence.push(['A','a a']) //inst.
    phraseSequence.push(['D','a']) //inst. key change
    phraseSequence.push(['A^','a a'])

    



    const motifSequence = [

    ]

    const chordSequence = [

    ]

    

}


