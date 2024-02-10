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
  }

  function renderActions(){
    renderCircles(actions, "action", "purple")
  }

  function renderTransactions(){

    const actionsArray = Object.keys(actions)

    for (let i = 0; i < actionsArray.length; i++) {
      console.log(actionsArray[i])
    }

    //console.log(stack[0])
    
    //while (stack?.length > 0) {
      //const thisAction = stack.pop()
    //}
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
