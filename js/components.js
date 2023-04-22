let songs = {}
let svg ={}

window.onload = function (){setup()}

function setup(){
  setupSongs()
  setupDisplay()
}

function setupSongs (){
  songs.goodAfterBad = setupGoodAfterBad()
  console.log(songs)
}

function setupGoodAfterBad (){
  let thisSong = new song ("Good After Bad")
  thisSong.setLength(5,2)
  thisSong.addBarSet(155, "44")
  return thisSong
}  

class song {
  
  constructor(title){
    this.title = title
    this.bars = []
  }
  
  addBarSet(number, timeSignature){
    
    for (let i = 0; i < number; i++) { 
      let thisBar = new bar (timeSignature)
      this.bars.push(thisBar)
    } 
    
  }
  
  setLength(min,sec){
    this.lengthInSeconds = min/60 + sec
  }
}

class bar {
  
  constructor(timeSignature){
    this.setupTimeSignature(timeSignature) 
  }
  
  setupTimeSignature(timeSignature){
    this.timeSignatureNumerator = timeSignature[0]
    this.timeSignatureDenominator = timeSignature[1]
  }
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
    console.log(widthInPixels)
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
