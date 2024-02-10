window.onload = function (){setup()}

function setup(){
  setupTransactions()
  setupDisplay()
}

function setupTransactions(){
  
}

function setupSVGCanvas(){
  svg = d3.select("#canvas")
    .append("svg")
    .attr("height", 500)
    .attr("width",500)
}


function displayRecords(){

  let interactions = ["a","b","c","d"]
  
  svg.selectAll("circle")
    .data(interactions)
    .join("rect")
    .attr("x", (d, i) => i * 10)
    .attr("y", 10)
    .attr("r", 10)
    .attr("fill", "purple")
    .attr("opacity", 1) 
    
    
}
