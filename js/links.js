let svg = {}
let actions = {}
let transactions = {}

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

  function renderActions(){
    renderCircles(actions, "action", "purple")
  }

  function renderTransactions(){

    for (let thisAction in actions){
      console.log(thisAction)
    }
    
  }

  setupSVGCanvas()
  setupActions()
  renderActions()
  renderTransactions()
  

}

class action {
  
  constructor(title, transactions){
    this.title = title
    this.transactions = transactions
  }
  
}

function renderCircles(data, classString, colour){

  let g = svg.selectAll("g." + classString)
      .data(data)
      .join("g")
      .attr("class", "classString")
   
    g.append("circle")
      .attr("cx", 225)
      .attr("cy", (d, i) => i * 25 + 25)
      .attr("r", 5)
      .attr("fill", colour)
      .attr("opacity", 1) 
  
}
