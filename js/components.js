window.onload{
let svg = d3.select("#canvas")
.append("svg")
.attr("height", 500)
.attr("width",500)

svg.append("circle")
.attr("cx",50)
.attr("cy",50)
.attr("r", 10)
.attr("fill", "blue")
}
