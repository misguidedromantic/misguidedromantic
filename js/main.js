//let songs = {}

window.onload = function (){setup()}

function setup(){
  
  //console.log("page loaded")
  //runTests()
  //setupSongs()

  function setupDisplay(){
    
    let svg ={}

    function setupSVGCanvas(){
      svg = d3.select("#canvas")
        .append("svg")
        .attr("height", 500)
        .attr("width",500)
    }

    function setupBeds(){
      
      let beds = {}

      beds.bed1 = new bed("bed1")
      beds.bed2 = new bed("bed2")

      beds["bed2"].setDimensions(80, 30)
      beds["bed2"].setPosition(250,250)

      svg.selectAll("rect")
        .data(beds)
        .join("rect")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("fill", "brown")
        .attr("opacity", 1) 
    }
    
    setupSVGCanvas()
    setupBeds()

    //displaySong(songs.goodAfterBad)
  }

  setupDisplay()
}

//eventually a data source?
function getSongTitles (){
  return [
    "good after bad",
    "inside out"
  ]

}

function setupSongs (){

  let songTitles = getSongTitles()

  songTitles.forEach(songTitle => {
    songs[songTitle] = new song(songTitle)
  });
  
}

function setupGoodAfterBad (){
  let thisSong = new song ("Good After Bad")
  thisSong.setLength(5,2)
  thisSong.addBarSet(155, "44")
  return thisSong
}  





function displaySong(song){

  function getRectWidth (d){
    let beatsPerSecond = song.bars.length / song.lengthInSeconds
    let secondsPerBar = d.timeSignatureNumerator / beatsPerSecond
    let widthInPixels = secondsPerBar
    return widthInPixels
  }
 
  svg.selectAll("rect")
    .data(song.bars)
    .join("rect")
    .attr("x", (d, i) => i * 10)
    .attr("y", 10)
    .attr("width", d => getRectWidth(d))
    .attr("height", 15)
    .attr("fill", "green")
    .attr("opacity", 1) 
    
    
    
}
