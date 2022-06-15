import * as d3 from './b-d3.js'

function bf() {
    var data = [5, 19, 13, 19, 11, 25, 20, 15, 17, 16, 18, 12, 22];

    var svg = d3.select("#s")


    var w = 900;
    var h = 500;

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return i * (w / data.length);
        })
        .attr("y", function(d) {
            return h - (d * 16)
        })
        .attr("width", (w / data.length) - 5)
        .attr("height", function(d) {
            return d * 16
        })
        .attr("fill", function(d) {
            return "rgb(0, 0, " + (d * 15) + ")"
        })

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return d;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (w / data.length) + (w / data.length) / 2;
        })
        .attr("y", function(d) {
            return h - (d * 16) + 25
        })
        .attr("font-size", "15px")
        .attr("fill", "red")
}

export default {
    bf
}
// var yScale = d3.scaleLinear()
//     .domain([0, 25])
//     .range([0, 25])

// var axisLeft = d3.axisLeft(yScale)

// svg.append("g")
//     .attr("transform", "translate(5, 50)")
//     .call(axisLeft);