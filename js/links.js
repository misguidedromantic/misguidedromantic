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

