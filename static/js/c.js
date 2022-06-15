// var w = 1900;
// var h = 1020;

// // function range() {
// //     return Math.ceil(Math.random() * 20)
// // }
// // var data = [5, 19, 13, 19, 11, 25, 20, 15, 17, 16, 18, 12, 22]
// // var data = d3.csv("data.csv")

// // var readData,
// //     drawData = [],
// //     dateData = [],
// //     nameData = [],
// //     categoryData = []

// var drawData = []
// d3.csv('./data.csv', function(d) {
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

//     return {
//         date: d.date,
//         name: d.name,
//         category: d.category,
//         value: +d.value,
//     }
//     // console.log(readData)
// }).then(function(data) {
//     for (let index = 0; index < data.length; index++) {
//         drawData.push(data[index])
//     }
//     console.log(drawData)
//     draw(drawData)
// })





// function draw(data) {
//     var date = []
//     data.forEach(element => {
//         if (date.indexOf(element["date"]) == -1) {
//             date.push(element["date"])
//         }
//     })
//     console.log(date)

//     var name = []
//     data.sort((a, b) => Number(b.value) - Number(a.value))
//         .forEach(element => {
//             if (name.indexOf(element.name) == -1) {
//                 name.push(element.name)
//             }
//         })
//     console.log(name)

//     var margin = { left: 250, right: 150, top: 180, bottom: 0 }

//     var svg = d3.select("#s")

//     var innerWidth = w - margin.left - margin.right
//     var innerHeight = h - margin.top - margin.bottom - 32
//     var xValue = d => Number(d.value)
//     var yValue = d => d.name

//     var g = svg
//         .append("g")
//         .attr("transform", `translate(${margin.left},${margin.top})`)
//     var xAxisG = g
//         .append("g")
//         .attr("transform", `translate(0, ${innerHeight})`)
//     var yAxisG = g.append("g")

//     xAxisG
//         .append("text")
//         .attr("class", "axis-label")
//         .attr("x", innerWidth / 2)
//         .attr("y", 100)

//     var xScale = d3.scaleLinear()
//     var yScale = d3
//         .scaleBand()
//         .paddingInner(0.3)
//         .paddingOuter(0)

//     var xTicks = 10
//     var xAxis = d3
//         .axisBottom()
//         .scale(xScale)
//         .ticks(xTicks)
//         .tickPadding(20)
//         .tickFormat(d => {
//             if (d <= 0) {
//                 return ""
//             }
//             return d3.format(",.0f")(d)
//         })
//         .tickSize(-innerHeight)

//     var yAxis = d3
//         .axisLeft()
//         .scale(yScale)
//         .tickPadding(5)
//         .tickSize(-innerWidth)
// }




// // var x = d3.scaleBand()
// //     .domain(drawData.map((d) => d.name))
// //     .range([h, 0])

// // var y = d3.scaleLinear()
// //     .domain([0, d3.max(drawData, (d) => d.value)])
// //     .range([0, w])



// // svg.selectAll("rect")
// //     .data(drawData)
// //     .enter()
// //     .append("rect")
// //     .attr('y', d => y(d.value))
// //     .attr('x', (d, i) => x(d.name))
// //     .attr("width", (w / drawData.length) - 5)
// //     .attr("height", function(d) {
// //         return d.value / 16
// //     })
// //     .attr("fill", function(d) {
// //         return "rgb(0, 0, " + (d.value * 15) + ")"
// //     })



// // svg.selectAll("text")
// //     .data(drawData)
// //     .enter()
// //     .append("text")
// //     .text(function(d) {
// //         return d
// //     })
// //     .attr("text-anchor", "middle")
// //     .attr("x", function(d, i) {
// //         return i * (w / drawData.length) + (w / drawData.length) / 2
// //     })
// //     .attr("y", function(d) {
// //         return h - (d * 16) + 25
// //     })
// //     .attr("font-size", "15px")
// //     .attr("fill", "red")


// // var yScale = d3.scaleLinear()
// //     .domain([0, 25])
// //     .range([0, 25])

// // var axisLeft = d3.axisLeft(yScale)

// // svg.append("g")
// //     .attr("transform", "translate(5, 50)")
// //     .call(axisLeft)






// // 数据

// // // var readData,
// // //     drawData = [],
// // //     dateData = [],
// // //     nameData = [],
// // //     categoryData = []

// var drawData = []
// d3.csv('./data.csv', function(d) {
//     //     // if (error) {
//     //     //     console.log(error)
//     //     // }

//     //     // readData = d3.csv.format(data).split("\n")
//     //     // readData.shift()
//     //     // readData.forEach(function(d) {
//     //     //     dateData.push(d.split(",")[0])
//     //     // })
//     //     // readData.forEach(function(d) {
//     //     //     nameData.push(d.split(",")[1])
//     //     // })
//     //     // readData.forEach(function(d) {
//     //     //     categoryData.push(d.split(",")[2])
//     //     // })
//     //     // readData.forEach(function(d) {
//     //     //         drawData.push(d.split(",")[3])
//     //     //     })

//     return {
//         date: d.date,
//         name: d.name,
//         category: d.category,
//         value: +d.value,
//     }
//     // console.log(readData)
// }).then(function(data) {
//     for (let index = 0; index < data.length; index++) {
//         drawData.push(data[index])
//     }
//     console.log(drawData)
//     draw(drawData)
// })

// var data = []
// for (let i = 0; i < 10; ++i) {
//     data.push({ id: i, value: parseInt(Math.random() * 10) })
// }
// console.log(data)


// // 1. 创建svg
// var width = 1900
// var height = 1020
// var svg = d3.select('#s')

// // 2. 创建比例尺

// var x = d3.scaleBand()
//     .domain(data.map(d => d.id))
//     .range([0, width])

// var y = d3.scaleLinear()
//     .domain([0, d3.max(data.map(d => +d.value))])
//     .range([height, 0])

// // 3. 进行数据绑定，分别获得enter、update、exit的部分 // 4. 图形绘制
// // let index = 10
// // setTimeout(function () {
// //   data.shift()
// //   data.push({id: index, value: parseInt(Math.random() * 10)})
// //   index += 1
// //   x.domain(data.map(d => d.id))
// //   render()
// // }, 1000)

// render()

// function render() {
//     var rects = svg.selectAll('rect')
//         .data(data, d => d.id)

//     // update
//     rects.transition()
//         .duration(1000)
//         .delay(1000)
//         .attr('x', (d, i) => x(d.id))

//     // enter
//     var enter = rects
//         .enter()
//         .append('rect')
//         // .transition()
//         // .duration(1000)
//         // .delay(2000)
//         .attr('x', (d, i) => x(d.id))
//         .attr('y', d => y(d.value))
//         .attr('height', d => height - y(d.value))
//         .attr('width', x.bandwidth())
//         .style('fill', 'blue')
//         .style('stroke', 'black')
//         .style('stroke-width', 2)
//         .style('opacity', 0.5)
//         // .on('mouseover', function (event, data) {
//         //   d3.select(this)
//         //     .style('fill', 'red')
//         // })
//         // .on('mouseout', function (_, data) {
//         //   d3.select(this)
//         //     .style('fill', 'blue')
//         // })

//     // exit
//     var exit = rects.exit()
//         .transition()
//         .duration(1000)
//         .attr('height', 0)
//         .remove()
// }

// // 5. 添加交互

// var interval = setInterval(() => {
//     // svg.selectAll('rect')
//     //   .sort((a, b) => {
//     //     return d3.ascending(a, b)
//     //   })
//     //   .transition()
//     //   .duration(1000)
//     //   .attr('x', (d, i) => x(i))

//     data = data.sort((a, b) => a.value - b.value)

//     svg.selectAll('rect')
//         .data(data, d => d.id)
//         .transition()
//         .duration(1000)
//         .attr('x', (d, i) => {
//             return x(i)
//         })
// }, 1000)



d3.csv('./data.csv', function(d) {
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
}).then(function(data) {
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

    var deformat = function(val) {
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
        currentData.sort(function(a, b) {
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

    function getCurrentData(date) {
        rate = []
        currentData = []
        indexList = []
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
            _cName = e.name
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
        var bar = g.selectAll(".bar").data(currentData, function(d) {
            return d.name
        })


        var barEnter = bar.enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function(d) {
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
            .attr("class", function() {
                return "barInfo"
            })
            .attr("y", 500)
            .attr("fill-opacity", 0)
            .transition()
            .delay(500)
            .duration(2490)
            .text(function(d) {
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
            .attr("class", function(d) {
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
            .attr("class", function(d) {
                return "label"
            })
            .attr("width", d => xScale(xValue(d)))


        barUpdate.select(".value")
            .attr("class", function(d) {
                return "value"
            })
            .attr("width", d => xScale(xValue(d)))



        barUpdate.select(".barInfo")
            .text(function(d) {
                return d.name
            })
            .attr("x", d => {
                return xScale(xValue(d)) - 40
            })
            .attr("fill-opacity", 1)


        barUpdate.select(".value")
            .tween("text", function(d) {
                var i = d3.interpolate(self.textContent, Number(d.value))
                var i = d3.interpolate(
                    deformat(this.textContent, ""),
                    Number(d.value)
                )

                var prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1
                    // d.value = self.textContent
                return function(t) {
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
        barExit.attr("transform", function(d) {
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
            .data(currentData, function(d) {
                return d.name
            })
            .transition("1")
            .ease(d3.easeLinear)
            .duration(1000)
            .attr("transform", function(d) {
                return "translate(0," + yScale(yValue(d)) + ")"
            })

    }

    var i = 0
    var inter = setInterval(function next() {
        currentdate = time[i]
        getCurrentData(time[i])
        i++

        if (i >= time.length) {
            window.clearInterval(inter)
        }
    }, 1000)
})