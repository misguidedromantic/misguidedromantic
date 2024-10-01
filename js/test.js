function testSongs(){

    const songTitle = "testSong"

    const testSong = new song ("testSong")

    assert.equal(1,2, "don't match")

    //testSong.setLength(getRandomInt(0,10),getRandomInt(0,60))

    //let titleResult = (songTitle === testSong.title)

    //return titleResult

}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

