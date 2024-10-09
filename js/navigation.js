window.onload = function (){setup()}

function setup(){

    let divNavigation = d3.select("#navigation")

    divNavigation.append("g")
        .attr("id", "persona")
        .attr("transform", "translate(20, 20)")
        .append("text")
        .text("persona")

    divNavigation.append("g")
        .attr("id", "domain")
        .attr("transform", "translate(20, 20)")
        .append("text")
        .text("domain")

}