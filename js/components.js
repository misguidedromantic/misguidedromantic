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
  
  svg.selectAll("circle")
    .data(song)
    .join("rect")
    .attr("width", d => d.bars.length)
    .attr("height", 15)
    .attr("fill", "green")
    .attr("opacity", 1)
    
}

function setupGoodAfterBad (){
  
  let thisSong = new song ("Good After Bad")
  
  thisSong.addBarSet(155, "four-four")
  
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
      this.push(thisBar)
    }
    
  }
  
}

class bar {
  
  constructor(timeSignature){
    this.timeSignature = timeSignature
  }
  

}
