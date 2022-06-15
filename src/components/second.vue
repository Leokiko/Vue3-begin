<template>
    <div>
        <svg id="s"></svg>
        <router-link to="./third" class="link">跳转至3rd</router-link>
    </div>
</template>

<script>
// <remote-script src="https://d3js.org/d3.v7.min.js"></remote-script>
import * as d3 from '../../static/js/c-d3.js'
// import { bf } from '../../static/js/b.js'

export default {
    // data() { return {} },
    mounted() {
        var data = [5, 19, 13, 19, 11, 25, 20, 15, 17, 16, 18, 12, 22];

        var svg = d3.select("#s")


        var w = 900;
        var h = 500;

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / data.length);
            })
            .attr("y", function (d) {
                return h - (d * 16)
            })
            .attr("width", (w / data.length) - 5)
            .attr("height", function (d) {
                return d * 16
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d * 15) + ")"
            })

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("text-anchor", "middle")
            .attr("x", function (d, i) {
                return i * (w / data.length) + (w / data.length) / 2;
            })
            .attr("y", function (d) {
                return h - (d * 16) + 25
            })
            .attr("font-size", "15px")
            .attr("fill", "red")
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#s {
    width: 900px;
    height: 500px;
    background-color: rgb(209, 204, 204);
    display: block;
    margin: auto;
    padding-left: 5px;
}

.link {
    position: absolute;
    top: 80%;
    left: 20%;
    width: 100px;
    text-decoration: none;
    color: red;
    font-size: large;
    border: 3px solid black;
    border-radius: 50%;
}


/* .axis path {
    fill: none;
    stroke: black;
}

.axis line {
    fill: none;
    stroke: black;
}

.axis text {
    font-size: 11 px;
} */
</style>