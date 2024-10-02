let beds = []
let songs = {}

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
      
      let bedData = getBedData()

      for (let i = 0; i < bedData.length; i++) { 
        let d = bedData[i]
        thisBed = new bed (d.bedName)
        thisBed.x = d.bedPosX
        thisBed.y = d.bedPosY
        thisBed.width = d.bedWidth
        thisBed.height = d.bedHeight
        
        beds[thisBed.name] = thisBed
      } 

      svg.selectAll("rect")
        .data(bedData)
        .join("rect")
        .attr("x", (d) => d.bedPosX)
        .attr("y", (d) => d.bedPosY)
        .attr("width", (d) => d.bedWidth)
        .attr("height", (d) => d.bedHeight)
        .attr("fill", "brown")
        .attr("opacity", 1) 
    }
    
    setupSVGCanvas()
    setupBeds()

    //displaySong(songs.goodAfterBad)
  }
  setupDisplay()
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
