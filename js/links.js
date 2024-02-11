let svg = {}
let actions = []

window.onload = function (){setup()}

function setup(){
  setupSVGCanvas()
  setupData()
}

function setupSVGCanvas(){
    svg = d3.select("#canvas")
      .append("svg")
      .attr("height", 500)
      .attr("width",500)
  }

function getAlphabeticArray(length){
  //error if null/NaN etc.?

  switch (length){
    
    case (length > 26):
      length = 26
      break;

    case (length < 1):
      length = 1 
  }

  let arr = []

  for (let i = 0; i < length; i++){
    arr[i] = (i + 10).toString(36)    
  }

  return arr
}

function setupData(){
  
  let arr = getAlphabeticArray(20)
  arr.forEach((elem) => {
    actions.push(new action(elem))
  })
  console.log(actions)
}


function displayRecords(){

  

  function renderActions(){
    renderCircles(actions, "action")
  }

  function renderTransactions(){

    for (let i = 0; i < actions.length; i++) {
      let thisAction = actions[i]
      let classString = thisAction.title + "transaction"
      renderCircles(thisAction.transactions, classString)
    }

  }

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
    this.yGap = 15
    this.setTransactions()
  }

   setTransactions(){

    let transactions = []

    switch(this.title){

      case "B":
        transactions[0] = new transaction("B1")
        transactions[1] = new transaction("B2")
        break;

      default:
        transactions[0] = new transaction(this.title + "1")

    }
    this.transactions = transactions
  }
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
      .attr("cx", (d, i) => parseInt(i * d.xGap + d.x1))
      .attr("cy", (d, i) => parseInt(i * d.yGap + d.y1))
      .attr("r", d => d.r)
      .attr("fill", d => d.colour)
      .attr("opacity", 1) 
  
}
