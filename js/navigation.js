window.onload = function (){setup()}

function setup(){

    const divNavigation = d3.select("#navigation")
    const svgNavigation = divNavigation
        .append("svg")
        .attr("height", "80px")
        .attr("width", "200px")

    svgNavigation.append("g")
        .attr("id", "persona")
        .attr("transform", "translate(20, 20)")
        .append("text")
        .text("persona e.g. mgr")

    svgNavigation.append("g")
        .attr("id", "domain")
        .attr("transform", "translate(80, 20)")
        .append("text")
        .text("domain")

}