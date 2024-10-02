let beds = {}
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

      let bedsArray = []

      function setupBedData(){
        
        let bedData = getBedData()

        for (let i = 0; i < bedData.length; i++) { 
          thisBed = new bed (bedData[i])
          beds[thisBed.name] = thisBed
          bedsArray[i] = thisBed
        }

        console.log(beds)
        console.log(bedsArray)
      
      } 

      function renderBeds(){
        
        svg.selectAll("rect.bed")
          .data(bedsArray)
          .attr("class","bed")
          .attr("id", (d) => d.name)
          .join("rect")
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y)
          .attr("width", (d) => d.width)
          .attr("height", (d) => d.height)
          .attr("fill", "brown")
          .attr("opacity", 1) 
      }

      setupBedData()
      renderBeds()
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
