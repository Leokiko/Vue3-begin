<template>
    <div>
        <svg id="s" width="1900" height="1020"></svg>
    </div>
</template>

<script>
import * as d3 from '../../static/js/c-d3.js'
export default {
    mounted() {
        d3.csv('../../static/data/3.csv', function (d) {
            //     // if (error) {
            //     //     console.log(error)
            //     // }

            //     // readData = d3.csv.format(data).split("\n")
            //     // readData.shift()
            //     // readData.forEach(function(d) {
            //     //     dateData.push(d.split(",")[0])
            //     // })
            //     // readData.forEach(function(d) {
            //     //     nameData.push(d.split(",")[1])
            //     // })
            //     // readData.forEach(function(d) {
            //     //     categoryData.push(d.split(",")[2])
            //     // })
            //     // readData.forEach(function(d) {
            //     //         drawData.push(d.split(",")[3])
            //     //     })

            return {
                name: d.name,
                type: d.category,
                value: +d.value,
                date: d.date,
            }
            // console.log(readData)
        }).then(function (data) {
            var date = []
            data.forEach(e => {
                if (date.indexOf(e["date"]) == -1) {
                    date.push(e["date"]);
                    // console.log(e["date"])
                }
            })
            // console.log(date)

            var rate = []
            var time = date
            var max_number = 6
            var svg = d3.select("#s")
            var lastData = []
            var currentData = []

            var name_list = []
            data.sort((a, b) => Number(b.value) - Number(a.value))
                .forEach(e => {
                    if (name_list.indexOf(e.name) == -1) {
                        name_list.push(e.name)
                    }
                })

            var deformat = function (val) {
                return Number(val.replace(/\,/g, ""))
            }


            var margin = {
                left: 250,
                right: 150,
                top: 180,
                bottom: 0,
            }

            var width = svg.attr("width")
            var height = svg.attr("height")
            // console.log(width, height)
            var innerWidth = width - margin.left - margin.right
            var innerHeight = height - margin.top - margin.bottom - 32
            var xValue = d => Number(d.value)
            var yValue = d => d.name

            var g = svg
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)
            var xAxisG = g
                .append("g")
                .attr("transform", `translate(0, ${innerHeight})`)
            var yAxisG = g.append("g")

            xAxisG.append("text")
                .attr("class", "axis-label")
                .attr("x", innerWidth / 2)
                .attr("y", 100)

            var xScale = d3.scaleLinear()
            var yScale = d3
                .scaleBand()
                .paddingInner(0.3)
                .paddingOuter(0)

            var xTicks = 10
            var xAxis = d3
                .axisBottom()
                .scale(xScale)
                .ticks(xTicks)
                .tickPadding(20)
                .tickFormat(d => {
                    return d3.format(",.0f")(d)
                })
                .tickSize(-innerHeight)

            var yAxis = d3
                .axisLeft()
                .scale(yScale)
                .tickPadding(5)
                .tickSize(-innerWidth)

            function dataSort() {
                currentData.sort(function (a, b) {
                    if (Number(a.value) == Number(b.value)) {
                        var r1 = 0
                        var r2 = 0
                        for (let index = 0; index < a.name.length; index++) {
                            r1 = r1 + a.name.charCodeAt(index)
                        }
                        for (let index = 0; index < b.name.length; index++) {
                            r2 = r2 + b.name.charCodeAt(index)
                        }
                        return r2 - r1
                    } else {
                        return Number(b.value) - Number(a.value)
                    }
                })

            }
            var tail
            function getCurrentData(date) {
                rate = []
                currentData = []
                data.forEach(element => {
                    if (element["date"] == date && parseFloat(element["value"]) != 0) {
                        if (element.name.length > 30) {
                            tail = "..."
                        } else {
                            tail = ""
                        }
                        element.name = element.name.slice(0, 29) + tail
                        currentData.push(element)
                    }
                })

                rate["MAX_RATE"] = 0
                rate["MIN_RATE"] = 1
                currentData.forEach(e => {
                    // _cName = e.name
                    lastData.forEach(el => {
                        if (el.name == e.name) {
                            rate[e.name] = Number(Number(e.value) - Number(el.value))
                        }
                    })
                    if (rate[e.name] == undefined) {
                        rate[e.name] = rate["MIN_RATE"]
                    }
                    if (rate[e.name] > rate["MAX_RATE"]) {
                        rate["MAX_RATE"] = rate[e.name]
                    } else if (rate[e.name] < rate["MIN_RATE"]) {
                        rate["MIN_RATE"] = rate[e.name]
                    }
                })

                // 取最大值
                dataSort()
                currentData = currentData.slice(0, max_number)

                d3.transition("2")
                    .each(redraw)
                    .each(change)
                lastData = currentData
            }

            function redraw() {
                xScale.domain([0, d3.max(currentData, xValue)])
                    .range([0, innerWidth])
                xAxisG.transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .call(xAxis)
                yAxisG.transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .call(yAxis)
                yAxisG.selectAll(".tick").remove()
                yScale.domain(currentData.map(d => d.name).reverse())
                    .range([innerHeight, 0])
                var bar = g.selectAll(".bar").data(currentData, function (d) {
                    return d.name
                })


                var barEnter = bar.enter()
                    .insert("g", ".axis")
                    .attr("class", "bar")
                    .attr("transform", function (d) {
                        return "translate(0," + yScale(yValue(d)) + ")"
                    })

                function changeColor() {
                    var color = "#"
                    var randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
                    for (var i = 0; i < 6; i++) {
                        color += randomArr[parseInt(Math.random() * 15)];
                    }
                    return color
                }
                barEnter.append("rect")
                    .attr("width", 0)
                    .attr("fill-opacity", 0)
                    .attr("height", 26)
                    .attr("y", 50)
                    .style("fill", changeColor())
                    .transition("a")
                    .delay(500)
                    .duration(2490)
                    .attr("y", 0)
                    .attr("width", d => xScale(xValue(d)))
                    .attr("fill-opacity", 1)

                // bar上文字
                var barInfo = barEnter.append("text")
                    .attr("x", 0)
                    .attr("class", function () {
                        return "barInfo"
                    })
                    .attr("y", 500)
                    .attr("fill-opacity", 0)
                    .transition()
                    .delay(500)
                    .duration(2490)
                    .text(function (d) {
                        return d.name
                    })
                    .attr("x", d => {
                        return xScale(xValue(d)) - 40
                    })
                    .attr("y", -20)

                barEnter.append("text")
                    .attr("x", 0)
                    .attr("y", 50)
                    .attr("fill-opacity", 0)
                    .transition()
                    .duration(2990)
                    .attr("fill-opacity", 1)
                    .attr("y", 0)
                    .attr("class", function (d) {
                        return "value"
                    })
                    .attr("x", d => {
                        return xScale(xValue(d)) + 10
                    })
                    .attr("y", 22)

                var barUpdate = bar.transition("2")
                    .duration(2990)
                    .ease(d3.easeLinear)

                barUpdate.select("rect")
                    .attr("width", d => xScale(xValue(d)))
                barUpdate.select(".label")
                    .attr("class", function (d) {
                        return "label"
                    })
                    .attr("width", d => xScale(xValue(d)))


                barUpdate.select(".value")
                    .attr("class", function (d) {
                        return "value"
                    })
                    .attr("width", d => xScale(xValue(d)))



                barUpdate.select(".barInfo")
                    .text(function (d) {
                        return d.name
                    })
                    .attr("x", d => {
                        return xScale(xValue(d)) - 40
                    })
                    .attr("fill-opacity", 1)


                barUpdate.select(".value")
                    .tween("text", function (d) {
                        var i = d3.interpolate(self.textContent, Number(d.value))
                        var i = d3.interpolate(
                            deformat(this.textContent, ""),
                            Number(d.value)
                        )

                        var prec = (Number(d.value) + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1
                        // d.value = self.textContent
                        return function (t) {
                            this.textContent = d3.format(".0f")(Math.round(i(t) * round) / round) + ""
                            // d.value = self.textContent
                        }
                    })
                    .duration(2990)
                    .attr("x", d => xScale(xValue(d)) + 10)


                var barExit = bar.exit()
                    .attr("fill-opacity", 1)
                    .transition()
                    .duration(2500)
                barExit.attr("transform", function (d) {
                    return "translate(0," + "1000" + ")"
                })
                    .remove()
                    .attr("fill-opacity", 0)
                barExit.select("rect")
                    .attr("fill-opacity", 0)
                barExit.select(".value")
                    .attr("fill-opacity", 0)
                barExit.select(".barInfo")
                    .attr("fill-opacity", 0)
                barExit.select(".label")
                    .attr("fill-opacity", 0)
            }


            function change() {
                yScale.domain(currentData.map(d => d.name).reverse())
                    .range([innerHeight, 0])
                g.selectAll(".bar")
                    .data(currentData, function (d) {
                        return d.name
                    })
                    .transition("1")
                    .ease(d3.easeLinear)
                    .duration(1000)
                    .attr("transform", function (d) {
                        return "translate(0," + yScale(yValue(d)) + ")"
                    })

            }

            var i = 0
            var inter = setInterval(function next() {
                getCurrentData(time[i])
                i++

                if (i >= time.length) {
                    window.clearInterval(inter)
                }
            }, 1000)
        })
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#s {
    width: 1900px;
    height: 1020px;
    background-color: rgb(209, 204, 204);
    display: block;
    margin: auto;
    padding-left: 5px;
}

.barInfo {
    fill: #FFFFFF;
    font-weight: 800;
    font-size: 24pt;
}

.value {
    fill: #8A2E2E;
    font-size: 20pt;
    font-weight: 400;
    font-family: "Fira Code", "Source Han Sans CN"
}
</style>