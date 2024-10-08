let beds = {}
let songs = {}

window.onload = function (){setup()}



function setup(){
  
  //console.log("page loaded")
  //runTests()
  //setupSongs()

  let svgHeading = {}
  let svgCanvas = {}

  

  function setupSVG(){

    function positionDiv(divID, left, top){
      d3.select(divID)
        .style("position", "absolute")
        .style("left", left)
        .style("top", top)
    }

    function createSVGCanvas(divID, height, width){
      return d3.select(divID)
        .append("svg")
        .attr("height", height)
        .attr("width",width)
    }

    positionDiv("#heading", "50px", "50px")
    positionDiv("#canvas", "50px", "100px")

    svgHeading = createSVGCanvas("#heading", 50, 500)
    svgCanvas = createSVGCanvas("#canvas", 500, 500)

  }

  
  function setupHeading(){

    function renderHeading(headingText){
      svgHeading.append("text")
        .text(headingText)
    }

    renderHeading("Misguided Romantic Garden")
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
      
      svgCanvas.selectAll("rect.bed")
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

  setupSVG()
  setupHeading()
  setupBeds()

    //displaySong(songs.goodAfterBad)
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
