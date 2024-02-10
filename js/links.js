let svg = {}
let actions = {}

window.onload = function (){setup()}

function setup(){
  setupSVGCancas()
  displayRecords()
}

function setupSVGCanvas(){
    svg = d3.select("#canvas")
      .append("svg")
      .attr("height", 500)
      .attr("width",500)
  }


function displayRecords(){

  function setupActions (){
    actions.a = new action ("A")
    actions.b = new action ("B")
  }

  function renderActions(){
    const actionsArray = Object.keys(actions)
    renderCircles(actionsArray, "action")
  }

  function renderTransactions(){

    const actionsArray = Object.keys(actions)

    for (let i = 0; i < actionsArray.length; i++) {
      let key = actionsArray[i]
      let thisAction = actions[key]
      let theseTransactions = actions[key].transactions
      renderCircles(actions[key].transactions, "transaction")
    }

  }

  setupSVGCanvas()
  setupActions()
  renderActions()
  renderTransactions()
  
}

class action {
  
  constructor(title){
    this.title = title
    this.transactions = []
    this.shape = "circle"
    this.r = 5
    this.colour = "purple"
    this.x1 = 25
    this.y1 = 25
    this.xGap = 0
    this.yGap = 25
  }

  setTransactions(){

    let transactions = []

    switch(this.title){
      case "A":
        transactions[0] = new transaction("A1")

      case "B":
        transactions[0] = new transaction("B1")
        transactions[1] = new transaction("B2")
    }

    this.transactions = transactions
}

class transaction {

  constructor(title){
    this.title = title
    this.shape = "circle"
    this.colour = "red"
    this.r = 5
    this.x1 = 225
    this.y1 = 25
    this.xGap = 25
    this.yGap = 0
  }

}

function renderCircles(data, classString){

  console.log(data)

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
