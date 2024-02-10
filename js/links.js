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
  }

  function renderActions(){
    const actionsArray = Object.keys(actions)
    renderCircles(actionsArray, "action", "blue", 0)
  }

  function renderTransactions(){

    const actionsArray = Object.keys(actions)

    for (let i = 0; i < actionsArray.length; i++) {
      let key = actionsArray[i]
      let theseTransactions = actions[key].transactions

      console.log(theseTransactions)
      
      renderCircles(theseTransactions, key + "transaction", "red", 200)
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

function renderCircles(data, classString, colour, offset){

  let g = svg.selectAll("g." + classString)
      .data(data)
      .join("g")
      .attr("class", classString)
   
    g.append("circle")
      .attr("cx", 25 + offset)
      .attr("cy", (d, i) => i * 25 + 25)
      .attr("r", 5)
      .attr("fill", colour)
      .attr("opacity", 1) 
  
}
