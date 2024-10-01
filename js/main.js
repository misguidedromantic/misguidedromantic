let songs = {}
let svg ={}

window.onload = function (){setup()}

function setup(){
  console.log("page loaded")
  runTests()
  console.log("tests complete")
  setupSongs()
  //setupDisplay()
}

function setupSongs (){
  songs.goodAfterBad = setupGoodAfterBad()
}

function setupGoodAfterBad (){
  let thisSong = new song ("Good After Bad")
  thisSong.setLength(5,2)
  thisSong.addBarSet(155, "44")
  return thisSong
}  

function setupDisplay(){
  setupSVGCanvas()
  displaySong(songs.goodAfterBad)
}

function setupSVGCanvas(){
  svg = d3.select("#canvas")
    .append("svg")
    .attr("height", 500)
    .attr("width",500)
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
