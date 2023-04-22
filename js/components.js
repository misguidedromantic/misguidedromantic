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

  
function displaySong(song){
  
  svg.selectAll("rect")
    .data(song.bars)
    .join("rect")
    .attr("x", (d, i) => i * 10)
    .attr("y", 10)
    .attr("width", d => d.timeSignatureNumerator)
    .attr("height", 15)
    .attr("fill", "green")
    .attr("opacity", 1)
    
}

function setupGoodAfterBad (){
  
  let thisSong = new song ("Good After Bad")
  
  thisSong.addBarSet(155, 44)
  
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
