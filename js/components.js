window.onload(){
  
console.log("hello")
  
let svg = d3.select("#canvas")
.append("svg")
.style("height", 500)
.style("width",500)

svg.append("circle")
.attr("cx",50)
.attr("cy",50)
.attr("r", 10)
.attr("fill", "blue")

}
