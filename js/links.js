let svg = {}
let actions = {}

window.onload = function (){setup()}

function setup(){
  displayRecords()
}

function displayRecords(){

  function setupSVGCanvas(){
    svg = d3.select("#canvas")
      .append("svg")
      .attr("height", 500)
      .attr("width",500)
  }

  function setupActions (){
    actions.a = new action ("A", ["change","addon1"])
    actions.b = new action ("B", ["change"])

    console.log(actions)
  }

  function renderActionCircles(){
    let gTiebel = svg.append("g")
      .attr("class", "tiebel")

    let gJCP = svg.append("g")
      .attr("class", "jcp")
  
    gTiebel.selectAll("circle")
      .data(actions)
      .join("circle")
      .attr("cx", 25)
      .attr("cy", (d, i) => i * 25 + 25)
      .attr("r", 5)
      .attr("fill", "purple")
      .attr("opacity", 1) 
  
    gTiebel.selectAll("circle")
      .data(actions.transactions)
      .join("circle")
      .attr("cx", 225)
      .attr("cy", (d, i) => i * 25 + 25)
      .attr("r", 5)
      .attr("fill", "red")
      .attr("opacity", 1) 
  }

  setupSVGCanvas()
  setupActions()
  renderActionCircles()

}

class action {
  
  constructor(title, transactions){
    this.title = title
    this.transactions = transactions
  }
  
}
